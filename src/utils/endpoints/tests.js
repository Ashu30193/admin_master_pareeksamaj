const { defaults } = require('./defaults');

export const tests = {
  createTest: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/tests/create',
    },
  },
  getAllTests: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/tests/all',
    },
  },
  updateTest: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/tests/:testId/update',
    },
  },
  deleteTest: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/tests/:testId/delete',
    },
  },
  createPackage: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/tests/packages/create',
    },
  },
  getAllPackages: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/tests/packages/all',
    },
  },
  getSinglePackage: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/tests/packages/:packageId/single',
    },
  },
};
