import { getOrders, getSingleOrder } from '@/services/orders';

const Model = {
  namespace: 'orders',
  state: { orders: null },
  effects: {
    // eslint-disable-next-line no-empty-pattern
    *getOrders({ payload }, { call, put }) {
      const res = yield call(getOrders, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'orders',
      });
      return res;
    },

    *getSingleOrder({ payload }, { call, put }) {
      const res = yield call(getSingleOrder, payload);
      yield put({
        type: 'setStates',
        payload: res,
        key: 'orders',
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
