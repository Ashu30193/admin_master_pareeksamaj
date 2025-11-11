const { defaults } = require('./defaults');

export const labs = {
  createLab: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/labs/create',
    },
  },
  getLabs: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/labs/all',
    },
  },
  getOneLab: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/labs/:labId/single',
    },
  },
  updateLab: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/labs/:labId/update',
    },
  },
  deleteLab: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/labs/:labId/delete',
    },
  },
  createCategory: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/category/create',
    },
  },
  getCategoryList: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/category/all',
    },
  },
  updateCategory: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/category/:categoryId/update',
    },
  },
  deleteCategory: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/category/:categoryId/delete',
    },
  },
};
