/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Button, Pagination, Popconfirm, Row } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Table } from 'antd';
import CreateUpdateNews from './CreateUpdateNews';
import { connect } from 'umi';
import { DeleteOutlined } from '@ant-design/icons';

function stripHtml(html) {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

const News = ({ loading, dispatch, news }) => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(false);
  const [start, setStart] = useState(1);

  const getNews = () => {
    dispatch({ type: 'common/getNews', payload: { query: { _start: start, _limit: 10 } } });
  };

  useEffect(() => {
    getNews();
  }, [start]);

  const deleteNews = (id) =>
    dispatch({ type: 'common/newsDelete', payload: { pathParams: { id } } }).then(() => getNews());

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      render: (data) => <img src={data} width={80} height={50} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'State',
      dataIndex: 'state',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      render: (data) =>
        stripHtml(data) && stripHtml(data).length > 50
          ? `${stripHtml(data).slice(0, 50)}...`
          : stripHtml(data),
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
    <div>
      <PageHeaderWrapper
        extra={
          <Button
            className="mb-2"
            type="primary"
            style={{
              float: 'right',
            }}
            onClick={() => setIsFormModalOpen(true)}
          >
            Add News
          </Button>
        }
      >
        <Table
          columns={columns}
          rowKey={(record) => record?._id}
          loading={loading}
          pagination={false}
          dataSource={news?.data || []}
          footer={() => (
            <Row type="flex" justify="end">
              <Pagination
                defaultCurrent={1}
                current={start}
                pageSize={10}
                total={news?.total}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                onChange={setStart}
              />
            </Row>
          )}
        />
      </PageHeaderWrapper>
      <CreateUpdateNews
        showModal={isFormModalOpen}
        setShowModal={setIsFormModalOpen}
        selectedNews={selectedNews}
        setSelectedNews={setSelectedNews}
        refresh={getNews}
      />
    </div>
  );
};

export default connect(({ common: { news }, loading }) => ({
  news,
  loading: loading.effects['common/getNews'],
}))(News);
