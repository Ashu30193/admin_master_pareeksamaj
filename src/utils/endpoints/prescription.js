const { defaults } = require('./defaults');

export const prescription = {
  getPrescriptions: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/prescription/all',
    },
  },

  getSinglePrescription: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/prescription/single',
    },
  },
};
