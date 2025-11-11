import { callApi } from '@/utils/apiUtils';
import { tests } from '@/utils/endpoints/tests';

export const createTest = (body) =>
  callApi({ uriEndPoint: tests.createTest.v1, body })
    .then((res) => ({ ...res, status: 'ok' }))
    .catch(() => ({ status: 'notok' }));

export const getAllTests = () =>
  callApi({ uriEndPoint: tests.getAllTests.v1 })
    .then((res) => res)
    .catch(() => {});

export const updateTest = ({ pathParams, body }) =>
  callApi({ uriEndPoint: tests.updateTest.v1, pathParams, body })
    .then((res) => ({ ...res, status: 'ok' }))
    .catch(() => ({ status: 'notok' }));

export const deleteTest = ({ pathParams }) =>
  callApi({ uriEndPoint: tests.deleteTest.v1, pathParams })
    .then((res) => res)
    .catch(() => {});

export const createPackage = ({ body }) =>
  callApi({ uriEndPoint: tests.createPackage.v1, body })
    .then((res) => ({ ...res, status: 'ok' }))
    .catch(() => ({ status: 'notok' }));

export const getAllPackages = () =>
  callApi({ uriEndPoint: tests.getAllPackages.v1 })
    .then((res) => res)
    .catch(() => {});
