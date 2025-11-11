import { callApi } from '@/utils/apiUtils';
import { orders } from '@/utils/endpoints/orders';

export const getOrders = ({ query }) =>
  callApi({ uriEndPoint: orders.getOrders.v1, query })
    .then((res) => res)
    .catch((err) => err);

export const getSingleOrder = ({ query }) =>
  callApi({ uriEndPoint: orders.getSingleOrder.v1, query })
    .then((res) => res)
    .catch((err) => err);
