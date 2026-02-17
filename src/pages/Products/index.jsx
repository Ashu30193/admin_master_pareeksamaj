/* eslint-disable no-underscore-dangle */
import { connect } from 'umi';
import React, { useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Pagination, Row, Switch, Table, Popconfirm, Space, Image } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const Products = ({ dispatch, products, loading }) => {
  const [start, setStart] = useState(1);

  const fetchProducts = () => {
    dispatch({ type: 'common/getProducts', payload: { query: { _limit: 10, start } } });
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch, start]);

  const update = (productId, isActive) => {
    dispatch({
      type: 'common/updateProduct',
      payload: { pathParams: { productId }, body: { isActive } },
    });
  };

  const deleteProduct = (productId) => {
    dispatch({
      type: 'common/deleteProduct',
      payload: { pathParams: { productId } },
    }).then(() => fetchProducts());
  };

  const cols = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      render: (data, record) => {
        const imageUrl = Array.isArray(record?.image) ? record?.image?.[0] : record?.image;
        return (
          <div className="flex items-center">
            <Image
              src={imageUrl}
              width={40}
              height={40}
              style={{ objectFit: 'cover', borderRadius: 4 }}
              fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgesAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAAgklEQVR4Ae3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jM/gAAAAASUVORK5CYII="
              preview={imageUrl ? { mask: 'View' } : false}
            />
            <p className="font-semibold text-gray-800 ml-4">{data}</p>
          </div>
        );
      },
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
      title: 'Active',
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
    {
      title: 'Actions',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete this product?"
          placement="left"
          okText="Delete"
          onConfirm={() => deleteProduct(record._id)}
        >
          <a className="text-red-700 hover:text-red-800">
            <DeleteOutlined /> Delete
          </a>
        </Popconfirm>
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
