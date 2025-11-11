import { callApi } from '@/utils/apiUtils';
import { labs } from '@/utils/endpoints/labs';

export const createLab = (body) =>
  callApi({ uriEndPoint: labs.createLab.v1, body })
    .then((res) => ({ ...res, status: 'ok' }))
    .catch(() => ({ status: 'notok' }));

export const getAllLab = () =>
  callApi({ uriEndPoint: labs.getLabs.v1 })
    .then((res) => res)
    .catch(() => {});

export const getOneLab = ({ pathParams }) =>
  callApi({ uriEndPoint: labs.getOneLab.v1, pathParams })
    .then((res) => res)
    .catch(() => {});

export const updateLab = ({ pathParams, body }) =>
  callApi({ uriEndPoint: labs.updateLab.v1, pathParams, body })
    .then((res) => ({ ...res, status: 'ok' }))
    .catch(() => ({ status: 'notok' }));

export const deleteLab = ({ pathParams }) =>
  callApi({ uriEndPoint: labs.deleteLab.v1, pathParams })
    .then((res) => res)
    .catch(() => {});

export const createCategory = ({ body }) =>
  callApi({ uriEndPoint: labs.createCategory.v1, body })
    .then((res) => ({ ...res, status: 'ok' }))
    .catch(() => ({ status: 'notok' }));

export const getCategoryList = () =>
  callApi({ uriEndPoint: labs.getCategoryList.v1 })
    .then((res) => res)
    .catch(() => {});

export const updateCategory = ({ pathParams, body }) =>
  callApi({ uriEndPoint: labs.updateCategory.v1, pathParams, body })
    .then((res) => ({ ...res, status: 'ok' }))
    .catch(() => ({ status: 'notok' }));

export const deleteCategory = ({ pathParams }) =>
  callApi({ uriEndPoint: labs.deleteCategory.v1, pathParams })
    .then((res) => res)
    .catch(() => {});
