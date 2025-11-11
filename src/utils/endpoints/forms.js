const { defaults } = require('./defaults');

export const forms = {
  editForm: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/forms/:id',
    },
  },
  storedata: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/forms/:formType',
    },
  },
  getFormData: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/forms/:id',
    },
  },
  getForms: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/forms',
    },
  },
  getStats: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/forms/count/stats',
    },
  },
};
