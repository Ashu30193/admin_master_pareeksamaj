import {
  createEvent,
  createNews,
  deleteEvent,
  getCountriesList,
  getCountryStates,
  getEvents,
  getJobs,
  getNews,
  getProducts,
  newsDelete,
  updateProduct,
  uploadContent,
} from '@/services/common';

const Model = {
  namespace: 'common',
  state: {
    stateCodes: null,
    ProductTypesList: null,
    ProductSubTypesList: null,
    contentId: null,
  },
  effects: {
    *getStateCodes({ payload }, { call, put }) {
      const res = yield call(getCountryStates, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'stateCodes',
      });
    },
    *getCountriesList({ payload }, { call, put }) {
      const res = yield call(getCountriesList, payload);
      yield put({
        type: 'setStates',
        payload: res?.data || [],
        key: 'countriesList',
      });
      return res?.data || [];
    },
    *uploadContent({ payload }, { call, put }) {
      const res = yield call(uploadContent, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'contentId',
      });
      return res;
    },
    *getProducts({ payload }, { call, put }) {
      const res = yield call(getProducts, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'products',
      });
      return res;
    },
    *updateProduct({ payload }, { call }) {
      const res = yield call(updateProduct, payload);
      return res;
    },
    *createNews({ payload }, { call }) {
      const res = yield call(createNews, payload);
      return res;
    },
    *getNews({ payload }, { call, put }) {
      const res = yield call(getNews, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'news',
      });
      return res;
    },
    *newsDelete({ payload }, { call }) {
      const res = yield call(newsDelete, payload);
      return res;
    },
    *getJobs({ payload }, { call, put }) {
      const res = yield call(getJobs, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'jobs',
      });
      return res;
    },
    *createEvent({ payload }, { call }) {
      const res = yield call(createEvent, payload);
      return res;
    },
    *getEvents({ payload }, { call, put }) {
      const res = yield call(getEvents, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'events',
      });
      return res;
    },
    *deleteEvent({ payload }, { call }) {
      const res = yield call(deleteEvent, payload);
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
