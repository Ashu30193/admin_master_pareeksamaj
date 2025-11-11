import {
  createCategory,
  createLab,
  deleteCategory,
  deleteLab,
  getAllLab,
  getCategoryList,
  getOneLab,
  updateCategory,
  updateLab,
} from '@/services/labs';

const Model = {
  namespace: 'labs',
  state: { labsList: null },
  effects: {
    *createLabs({ payload }, { call }) {
      const res = yield call(createLab, payload);
      return res;
    },
    *getAllLabs({ payload }, { call, put }) {
      const res = yield call(getAllLab, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'labsList',
      });
    },
    *getOneLab({ payload }, { call }) {
      const res = yield call(getOneLab, payload);
      return res;
    },
    *deleteLab({ payload }, { call }) {
      const res = yield call(deleteLab, payload);
      return res;
    },
    *updateLab({ payload }, { call }) {
      const res = yield call(updateLab, payload);
      return res;
    },
    *createCategory({ payload }, { call }) {
      const res = yield call(createCategory, payload);
      return res;
    },
    *getCategoryList({ payload }, { call, put }) {
      const res = yield call(getCategoryList, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'categoryList',
      });
    },
    *updateCategory({ payload }, { call }) {
      const res = yield call(updateCategory, payload);
      return res;
    },
    *deleteCategory({ payload }, { call }) {
      const res = yield call(deleteCategory, payload);
      return res;
    },
  },
  reducers: {
    setStates(state, { payload, key }) {
      return {
        ...state,
        [key]: payload,
      };
    },
  },
};
export default Model;
