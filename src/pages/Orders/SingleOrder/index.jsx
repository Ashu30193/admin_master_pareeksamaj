import React, { useEffect } from 'react';
import { Col, Row, Tag } from 'antd';
import moment from 'moment';
import usericon from '@/assets/user.png';
import { connect, useParams } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const SingleOrder = ({ dispatch, orders }) => {
  const { orderId } = useParams();

  useEffect(() => {
    dispatch({
      type: 'orders/getSingleOrder',
      payload: { query: { _id: orderId } },
    });
  }, [dispatch, orderId]);

  return (
    <PageHeaderWrapper title="Single Order">
      <div className="container mx-auto py-14 px-4">
        <Row gutter={[24, 24]}>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <table className="shadow-md border-b border-gray-200 bg-white">
              <tbody>
                {orders?.data ? (
                  <>
                    <tr key={orders?.data?.order_id}>
                      <td className="px-6 pt-4 pb-2 font-bold whitespace-nowrap text-sm text-gray-800">
                        Receipt No
                      </td>

                      <td className="px-6 pt-4 pb-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{orders?.data?.receipt_no}</div>
                      </td>
                    </tr>

                    <tr key={orders?.data?.order_id}>
                      <td className="px-6 pt-4 pb-2 font-bold whitespace-nowrap text-sm text-gray-800">
                        Pickup
                      </td>

                      <td className="px-6 pt-4 pb-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900 capitalize">
                          <Tag color="#f50">{orders?.data?.pickup?.sampleCollection}</Tag>
                        </div>
                      </td>
                    </tr>

                    <tr key={orders?.data?.order_id}>
                      <td className="px-6 pt-4 pb-2 font-bold whitespace-nowrap text-sm text-gray-800">
                        Slot Date & Time
                      </td>

                      <td className="px-6 pt-4 pb-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {moment(orders?.data?.pickup?.slotDate).format(
                            'MMM DD, YYYY & h:mm:ss a',
                          )}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-2 font-bold whitespace-nowrap text-sm text-gray-800">
                        Slot Address
                      </td>

                      <td className="px-6 py-2 ">
                        <div className="text-sm text-gray-900">
                          {` ${orders?.data?.location?.address_line_1}, ${orders?.data?.location?.address_line_2},
                                ${orders?.data?.location?.city}, ${orders?.data?.location?.country_code}, 
                                ${orders?.data?.location?.postal_code}`}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-2 font-bold whitespace-nowrap text-sm text-gray-800">
                        Total Order Amount
                      </td>

                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">₹ {orders?.data?.amount} </div>
                      </td>
                    </tr>
                  </>
                ) : (
                  <div></div>
                )}
              </tbody>
            </table>
          </Col>

          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <div className="shadow-md overflow-x-auto  overflow-y-auto">
              <table className="w-full border-b border-gray-200 divide-y divide-gray-200">
                <thead className="bg-white  border-b border-gray-600">
                  <tr>
                    <th
                      scope="col"
                      className="font-bold px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="font-bold px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="font-bold px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="font-bold px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-800">
                  {orders?.data && orders.items ? (
                    <>
                      {orders.items.map((item) => (
                        <tr key={orders?.data?.order_id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {moment(orders?.data?.created_at).format('ll')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={usericon} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {orders?.data?.patient?.name}
                                </div>
                                <div className="text-sm text-gray-800">
                                  {orders?.data?.patient?.email}
                                </div>
                                <div className="text-sm text-gray-800">
                                  {orders?.data?.patient?.contact}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-800">{item.type}</div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            ₹ {item.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-600 text-white
                          "
                            >
                              {orders?.data?.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <div></div>
                  )}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </div>
    </PageHeaderWrapper>
  );
};

export default connect(({ orders }) => ({
  orders: orders.orders,
}))(SingleOrder);
