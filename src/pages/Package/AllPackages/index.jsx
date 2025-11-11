/* eslint-disable no-underscore-dangle */
import { connect, Link } from 'umi';
import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Divider, Popconfirm, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const AllPackages = ({ dispatch, loading, packageList }) => {
  useEffect(() => {
    dispatch({
      type: 'tests/getAllPackages',
    });
  }, [dispatch]);

  const handleDelete = (testId) => {
    dispatch({
      type: 'tests/deleteTest',
      payload: { pathParams: { testId } },
    }).then(() =>
      dispatch({
        type: 'tests/getAllPackages',
      }),
    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Sample',
      dataIndex: 'sample',
      render: (data) => data.join(', '),
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      render: (data) => `${data}% Off`,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (data) => `₹ ${data}`,
    },
    {
      title: 'Actions',
      render: (record) => (
        <>
          <Link to={`/tests/${record._id}/edit`}>
            <EditOutlined /> Edit
          </Link>
          <Divider type="vertical" />
          <Popconfirm
            title="Are you sure you want to delete this test?"
            placement="left"
            okText="Delete"
            onConfirm={() => handleDelete(record._id)}
          >
            <a className="text-red-700 hover:text-red-800">
              <DeleteOutlined /> Delete
            </a>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
      <PageHeaderWrapper>
        <Table
          columns={columns}
          rowKey={(record) => record?._id}
          loading={loading}
          dataSource={packageList?.packages || []}
        />
      </PageHeaderWrapper>
    </div>
  );
};

export default connect(({ loading, tests }) => ({
  loading: loading.effects['tests/getAllPackages'],
  packageList: tests.packageList,
}))(AllPackages);
