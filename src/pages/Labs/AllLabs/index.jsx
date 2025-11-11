/* eslint-disable no-underscore-dangle */
import { connect, Link } from 'umi';
import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Divider, Popconfirm, Rate, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const AllLabs = ({ dispatch, loading, labsList }) => {
  useEffect(() => {
    dispatch({
      type: 'labs/getAllLabs',
    });
  }, [dispatch]);

  const handleDelete = (labId) => {
    dispatch({
      type: 'labs/deleteLab',
      payload: { pathParams: { labId } },
    }).then(() =>
      dispatch({
        type: 'labs/getAllLabs',
      }),
    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
    },
    {
      title: 'Manager',
      dataIndex: 'manager',
    },
    {
      title: 'Ratings',
      dataIndex: 'ratings',
      render: (value) => <Rate allowHalf disabled defaultValue={value} />,
    },
    {
      title: 'Actions',
      render: (record) => (
        <>
          <Link to={`/labs/${record._id}/edit`}>
            <EditOutlined /> Edit
          </Link>
          <Divider type="vertical" />
          <Popconfirm
            title="Are you sure you want to delete this lab?"
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
          dataSource={labsList?.labs || []}
        />
      </PageHeaderWrapper>
    </div>
  );
};

export default connect(({ loading, labs }) => ({
  loading: loading.effects['labs/getAllLabs'],
  labsList: labs.labsList,
}))(AllLabs);
