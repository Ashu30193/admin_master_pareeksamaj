import { callApi } from '@/utils/apiUtils';
import { siteConfig } from '@/utils/endpoints/siteConfig';

export const getSiteConfig = () =>
  callApi({ uriEndPoint: siteConfig.getSiteConfig.v1 })
    .then((res) => res)
    .catch((err) => err);

export const getSingleConfig = () =>
  callApi({ uriEndPoint: siteConfig.getSingleConfig.v1 })
    .then((res) => res)
    .catch((err) => err);

export const updateSiteConfig = ({ body, pathParams }) =>
  callApi({ uriEndPoint: siteConfig.updateSiteConfig.v1, pathParams, body })
    .then((res) => res)
    .catch((err) => err);
