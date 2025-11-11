const { defaults } = require('./defaults');

export const siteConfig = {
  getSiteConfig: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/siteConfig',
    },
  },
  getSingleConfig: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/siteConfig/:resource',
    },
  },
  updateSiteConfig: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/siteConfig/:key/update',
    },
  },
};
