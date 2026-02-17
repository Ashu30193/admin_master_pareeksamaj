import { hostname, callApi } from '@/utils/apiUtils';
import { common } from '@/utils/endpoints/common';
import Axios from 'axios';

export const getCountryStates = ({ pathParams: { countryId } }) =>
  Axios.get(`${hostname()}/xapi/v1/common/country/${countryId}/provinces`)
    .then((result) => result.data)
    .catch(() => {});

export const getCountriesList = () =>
  Axios({
    method: 'get',
    url: `${hostname()}/xapi/v1/common/country`,
  })
    .then((response) => {
      const status = 'ok';
      return {
        data: response.data,
        status,
      };
    })
    .catch(() => {
      const status = 'notok';
      return {
        status,
      };
    });

export const uploadContent = (body) =>
  callApi({ uriEndPoint: common.uploadContent.v1, body })
    .then((res) => res)
    .catch((err) => err);

export const getProductTypesList = ({ query }) =>
  callApi({ uriEndPoint: common.productTypes.v1, query })
    .then((res) => res)
    .catch((err) => err);

export const createProductType = ({ query, body }) =>
  callApi({ uriEndPoint: common.createProductType.v1, query, body })
    .then((res) => res)
    .catch((err) => err);

export const updateProductType = ({ pathParams, body }) =>
  callApi({ uriEndPoint: common.updateProductType.v1, pathParams, body })
    .then((res) => res)
    .catch((err) => err);

export const getProducts = ({ query }) =>
  callApi({ uriEndPoint: common.getProducts.v1, query })
    .then((res) => res)
    .catch((err) => err);

export const updateProduct = ({ pathParams, body }) =>
  callApi({ uriEndPoint: common.updateProduct.v1, pathParams, body })
    .then((res) => res)
    .catch((err) => err);

export const deleteProduct = ({ pathParams }) =>
  callApi({ uriEndPoint: common.deleteProduct.v1, pathParams })
    .then((res) => res)
    .catch((err) => err);

export const createNews = ({ body }) =>
  callApi({ uriEndPoint: common.createNews.v1, body })
    .then((res) => res)
    .catch((err) => err);

export const getNews = ({ query }) =>
  callApi({ uriEndPoint: common.getNews.v1, query })
    .then((res) => res)
    .catch((err) => err);

export const newsDelete = ({ pathParams }) =>
  callApi({ uriEndPoint: common.newsDelete.v1, pathParams })
    .then((res) => res)
    .catch((err) => err);

export const getJobs = ({ query }) =>
  callApi({ uriEndPoint: common.getJobs.v1, query })
    .then((res) => res)
    .catch((err) => err);

export const getEvents = ({ query }) =>
  callApi({ uriEndPoint: common.getEvents.v1, query })
    .then((res) => res)
    .catch((err) => err);

export const createEvent = ({ body }) =>
  callApi({ uriEndPoint: common.createEvent.v1, body })
    .then((res) => res)
    .catch((err) => err);

export const deleteEvent = ({ pathParams }) =>
  callApi({ uriEndPoint: common.deleteEvent.v1, pathParams })
    .then((res) => res)
    .catch((err) => err);
