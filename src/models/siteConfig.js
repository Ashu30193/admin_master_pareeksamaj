import { getSiteConfig, getSingleConfig, updateSiteConfig } from '@/services/siteConfig';

const Model = {
  namespace: 'siteConfig',
  state: { siteConfig: null },
  effects: {
    // eslint-disable-next-line no-empty-pattern
    *getSiteConfig({}, { call, put }) {
      const res = yield call(getSiteConfig);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'siteConfig',
      });
      return res;
    },

    *getSingleConfig({ payload }, { call, put }) {
      const res = yield call(getSingleConfig, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'siteConfig',
      });
      return res;
    },

    *updateSiteConfig({ payload }, { call }) {
      yield call(updateSiteConfig, payload);
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
