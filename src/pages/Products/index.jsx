/* eslint-disable no-underscore-dangle */
import { connect } from 'umi';
import React, { useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Pagination, Row, Switch, Table } from 'antd';

const Products = ({ dispatch, products, loading }) => {
  const [start, setStart] = useState(1);
  useEffect(() => {
    dispatch({ type: 'common/getProducts', payload: { query: { _limit: 10, start } } });
  }, [dispatch, start]);

  const update = (productId, isActive) => {
    dispatch({
      type: 'common/updateProduct',
      payload: { pathParams: { productId }, body: { isActive } },
    });
  };

  const cols = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      render: (data, record) => (
        <div className="flex">
          <img className="h-10 w-10 mr-4" src={record?.image} alt="product-image" />
          <p className="font-semibold text-gray-800">{data}</p>
        </div>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render: (data) => data?.name,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (data) => `Rs. ${data}`,
    },
    {
      title: 'Owner',
      dataIndex: 'createdBy',
      render: (data) => (
        <div className="">
          <div className="font-semibold text-gray-800">{data?.name}</div>
          <div className="">{data?.phone}</div>
        </div>
      ),
    },
    {
      title: 'Actions',
      render: (record) => (
        <Switch
          onChange={(value) => {
            update(record?._id, value);
          }}
          defaultChecked={record?.isActive}
          checkedChildren="Active"
          unCheckedChildren="Inactive"
        />
      ),
    },
  ];

  return (
    <PageHeaderWrapper>
      <Table
        loading={loading}
        columns={cols}
        dataSource={products?.data || []}
        pagination={false}
        footer={() => (
          <Row className="mt-2" type="flex" justify="end">
            <Pagination
              defaultCurrent={1}
              current={start}
              pageSize={10}
              total={products?.total}
              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
              onChange={setStart}
            />
          </Row>
        )}
      />
    </PageHeaderWrapper>
  );
};

export default connect(({ common, loading }) => ({
  products: common.products,
  loading: loading.effects['common/getProducts'],
}))(Products);
