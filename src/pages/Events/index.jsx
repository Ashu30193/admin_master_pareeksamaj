/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Button, Pagination, Popconfirm, Row } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Table } from 'antd';
import { connect } from 'umi';
import { DeleteOutlined } from '@ant-design/icons';
import CreateEvent from './CreateEvent';
import moment from 'moment';

const Events = ({ loading, dispatch, news, events }) => {
  const [showModal, setShowModal] = useState(false);

  const [start, setStart] = useState(1);

  const getEvents = () => {
    dispatch({ type: 'common/getEvents', payload: { query: { _start: start, _limit: 10 } } });
  };

  useEffect(() => {
    getEvents();
  }, [start]);

  const deleteNews = (id) =>
    dispatch({ type: 'common/newsDelete', payload: { pathParams: { id } } }).then(() =>
      getEvents(),
    );

  const columns = [
    {
      title: 'Name of the Event',
      dataIndex: 'name',
    },
    {
      title: 'Date of the Event',
      dataIndex: 'date',
      render: (data) => moment(data).format('LL'),
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      render: (data) => data?.name,
    },

    {
      title: 'Actions',
      render: (_, data) => (
        <Popconfirm
          title="Are you sure you want to delete this News?"
          placement="left"
          okText="Delete"
          onConfirm={() => deleteNews(data._id)}
        >
          <a className="text-red-700 hover:text-red-800">
            <DeleteOutlined /> Delete
          </a>
        </Popconfirm>
      ),
    },
  ];

  return (
    <PageHeaderWrapper
      extra={
        <Button
          className="mb-2"
          type="primary"
          style={{
            float: 'right',
          }}
          onClick={() => setShowModal(true)}
        >
          Create Event
        </Button>
      }
    >
      <CreateEvent setShowModal={setShowModal} showModal={showModal} refresh={getEvents} />
      <Table
        columns={columns}
        rowKey={(record) => record?._id}
        loading={loading}
        pagination={false}
        dataSource={events?.events || []}
        footer={() => (
          <Row type="flex" justify="end">
            <Pagination
              defaultCurrent={1}
              current={start}
              pageSize={10}
              total={events?.total}
              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
              onChange={setStart}
            />
          </Row>
        )}
      />
    </PageHeaderWrapper>
  );
};

export default connect(({ common: { news, events }, loading }) => ({
  news,
  events,
  loading: loading.effects['common/getEvents'],
}))(Events);
