/* eslint-disable no-underscore-dangle */
import {
  queryCurrent,
  updateUserProfile,
  userAvatar,
  userRegister,
  forgotUserPassword,
  updateUserPassword,
  signUp,
  fetchUsers,
  updateUser,
} from '@/services/user';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import jwtdecode from 'jwt-decode';
import { stringify } from 'querystring';
import { history } from 'umi';

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetchCurrent(_, { call, put }) {
      if (!localStorage.getItem('accessToken')) {
        const { redirect } = getPageQuery(); // Note: There may be security issues, please note
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        if (window.location.pathname !== '/user/login' && !redirect) {
          history.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          });
        }
      } else {
        const decodedtoken = jwtdecode(localStorage.getItem('accessToken'));
        const response = yield call(queryCurrent, { id: decodedtoken?.data?._id });
        yield put({
          type: 'saveCurrentUser',
          payload: response,
        });
        if (response?.role) {
          setAuthority(response?.role?.name);
        }
      }
    },
    *userRegister({ payload, cb }, { call }) {
      const res = yield call(userRegister, payload);
      if (cb) cb(res);
    },
    *updateCurrent({ payload }, { call }) {
      yield call(updateUserProfile, payload);
    },
    *userAvatarUpload({ payload, cb }, { call }) {
      const res = yield call(userAvatar, payload);
      if (cb) cb(res);
    },
    *userForgotPassword({ payload }, { call }) {
      const res = yield call(forgotUserPassword, payload);
      return res;
    },
    *resetUserPassword({ payload }, { call }) {
      const res = yield call(updateUserPassword, payload);
      return res;
    },
    *signUp({ payload }, { call }) {
      const res = yield call(signUp, payload);
      return res;
    },
    *getAllUsers({ payload }, { call, put }) {
      const res = yield call(fetchUsers, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'usersList',
      });
    },
    *updateUser({ payload }, { call }) {
      const res = yield call(updateUser, payload);
      return res;
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },
    setStates(state, { payload, key }) {
      return {
        ...state,
        [key]: payload,
      };
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
export default UserModel;
