/* eslint-disable no-underscore-dangle */
import { connect, history } from 'umi';
import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Table } from 'antd';
import moment from 'moment';
import classNames from 'classnames';

const AllOrders = ({ dispatch, loading, orders }) => {
  useEffect(() => {
    dispatch({
      type: 'orders/getOrders',
      payload: { query: { status: 'Success' } },
    });
  }, [dispatch]);

  const columns = [
    // {
    //   title: 'Order ID',
    //   dataIndex: 'order_id',
    //   render: (data) => `${data}`,
    // },
    {
      title: 'Receipt No',
      dataIndex: 'receipt_no',
    },
    {
      title: 'Customer Name',
      dataIndex: ['patient', 'name'],
    },
    {
      title: 'Contact',
      dataIndex: ['patient', 'contact'],
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (data) => `₹ ${data}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (data) => (
        <div
          className={classNames(
            data === 'Success' ? 'bg-green-700' : 'bg-red-700',
            'text-white font-semibold text-center rounded-full',
          )}
        >
          {data}
        </div>
      ),
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      render: (data) => `${moment(data).format('LL')}`,
    },
    {
      title: 'Location',
      dataIndex: ['location', 'address_line_1'],
    },
  ];

  return (
    <div>
      <PageHeaderWrapper>
        <Table
          // rowKey={(record) => record?._id}
          loading={loading}
          onRow={(record) => {
            return {
              onClick: () => history.push(`/orders/${record?._id}`),
            };
          }}
          dataSource={orders?.orders || []}
          columns={columns}
          scroll={{ x: 420 }}
        />
      </PageHeaderWrapper>
    </div>
  );
};

export default connect(({ loading, orders }) => ({
  loading: loading.effects['orders/getOrders'],
  orders: orders.orders,
}))(AllOrders);
