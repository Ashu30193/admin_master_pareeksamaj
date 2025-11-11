import {
  createPackage,
  createTest,
  deleteTest,
  getAllPackages,
  getAllTests,
  updateTest,
} from '@/services/tests';

const Model = {
  namespace: 'tests',
  state: { testsList: null },
  effects: {
    *createTest({ payload }, { call }) {
      const res = yield call(createTest, payload);
      return res;
    },
    *getAllTests({ payload }, { call, put }) {
      const res = yield call(getAllTests, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'testsList',
      });
    },
    *updateTest({ payload }, { call }) {
      const res = yield call(updateTest, payload);
      return res;
    },
    *deleteTest({ payload }, { call }) {
      const res = yield call(deleteTest, payload);
      return res;
    },
    *createPackage({ payload }, { call }) {
      const res = yield call(createPackage, payload);
      return res;
    },
    *getAllPackages({ payload }, { call, put }) {
      const res = yield call(getAllPackages, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'packageList',
      });
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
