/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Table, Button, Divider, Popconfirm } from 'antd';
import { connect } from 'dva';
import { DeleteOutlined, EditOutlined, PlusSquareOutlined } from '@ant-design/icons';
import CreateCategory from '../CreateCategory';
import moment from 'moment';

const AllCategory = (props) => {
  const { dispatch, loading, categoryList } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    dispatch({
      type: 'labs/getCategoryList',
    });
  }, [dispatch]);

  const deleteCategory = (categoryId) => {
    dispatch({
      type: 'labs/deleteCategory',
      payload: {
        pathParams: { categoryId },
      },
    }).then(() =>
      dispatch({
        type: 'labs/getCategoryList',
      }),
    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      render: (date) => moment(date).format('LLL'),
    },
    {
      title: 'Update at',
      dataIndex: 'updated_at',
      render: (date) => moment(date).format('LLL'),
    },
    {
      title: 'Actions',
      render: (record) => (
        <span>
          <a
            onClick={() => {
              setSelectedCategory(record);
              setShowModal(true);
            }}
          >
            <EditOutlined /> Edit
          </a>
          <Divider type="vertical" />
          <Popconfirm
            okType="danger"
            okText="Delete"
            onConfirm={() => deleteCategory(record._id)}
            title="Do you want to delete this Category?"
          >
            <a>
              <DeleteOutlined /> Delete
            </a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <PageHeaderWrapper
      extra={[
        <Button
          key="2"
          type="primary"
          onClick={() => setShowModal(true)}
          icon={<PlusSquareOutlined />}
        >
          Add Category
        </Button>,
      ]}
    >
      <CreateCategory
        setShowModal={setShowModal}
        showModal={showModal}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        reload={() => dispatch({ type: 'labs/getCategoryList' })}
      />
      <Table
        pagination={false}
        loading={loading}
        columns={columns}
        dataSource={categoryList?.categories}
      />
    </PageHeaderWrapper>
  );
};

export default connect(({ loading, labs }) => ({
  loading: loading.effects['labs/getCategoryList'],
  categoryList: labs.categoryList,
}))(AllCategory);
