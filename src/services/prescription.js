import { callApi } from '@/utils/apiUtils';
import { prescription } from '@/utils/endpoints/prescription';

export const getPrescriptions = () =>
  callApi({ uriEndPoint: prescription.getPrescriptions.v1 })
    .then((res) => res)
    .catch((err) => err);

export const getSinglePrescription = ({ query }) =>
  callApi({ uriEndPoint: prescription.getSinglePrescription.v1, query })
    .then((res) => res)
    .catch((err) => err);
