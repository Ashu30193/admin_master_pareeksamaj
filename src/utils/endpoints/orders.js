const { defaults } = require('./defaults');

export const orders = {
  getOrders: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/orders/all',
    },
  },
  getSingleOrder: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/orders/single',
    },
  },
};
