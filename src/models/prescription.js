import { getPrescriptions, getSinglePrescription } from '@/services/prescription';

const Model = {
  namespace: 'prescription',
  state: { prescription: null },
  effects: {
    // eslint-disable-next-line no-empty-pattern
    *getPrescriptions({}, { call, put }) {
      const res = yield call(getPrescriptions);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'prescription',
      });
      return res;
    },

    *getSinglePrescription({ payload }, { call, put }) {
      const res = yield call(getSinglePrescription, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'prescription',
      });
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
