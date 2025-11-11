const { defaults } = require('./defaults');

export const common = {
  productTypes: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/products/types',
    },
  },
  createProductType: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/products/types',
    },
  },
  updateProductType: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/products/types/:typeId',
    },
  },
  uploadContent: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/content',
      headerProps: {
        'Content-Type': 'multipart/form-data',
      },
    },
  },
  getProducts: { v1: { ...defaults.methods.GET, ...defaults.versions.v1, uri: '/products' } },
  updateProduct: {
    v1: { ...defaults.methods.PUT, ...defaults.versions.v1, uri: '/products/:productId' },
  },
  createNews: { v1: { ...defaults.methods.POST, ...defaults.versions.v1, uri: '/news' } },
  getNews: { v1: { ...defaults.methods.GET, ...defaults.versions.v1, uri: '/news' } },
  newsDelete: { v1: { ...defaults.methods.DELETE, ...defaults.versions.v1, uri: '/news/:id' } },
  getJobs: { v1: { ...defaults.methods.GET, ...defaults.versions.v1, uri: '/job/list' } },
  createEvent: { v1: { ...defaults.methods.POST, ...defaults.versions.v1, uri: '/events' } },
  getEvents: { v1: { ...defaults.methods.GET, ...defaults.versions.v1, uri: '/events' } },
  deleteEvent: { v1: { ...defaults.methods.DELETE, ...defaults.versions.v1, uri: '/events/:id' } },
};
