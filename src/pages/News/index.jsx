/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Button, Pagination, Popconfirm, Row, Image } from 'antd';
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
      render: (data) => (
        <Image
          src={data}
          width={80}
          height={50}
          style={{ objectFit: 'cover', cursor: 'pointer' }}
          preview={{
            maskClassName: 'customize-mask',
          }}
          fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgesAJ+Y5DgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dB3AU5QPF8bcDSSgBQu+9N6kWxAIqzYIUkSJV7L33hr33ir333kDp0quAKNI7SO8dQr7rZWP+M7M7m93NJnMr7r8d7uzs7ny/mZ2dnXfgHEQgQCAXBUJzcbDsgICA/wRCCHwQEBBgJxB5R5HLpOyYZ3vT2fT0OJyMWGwk7btyMfLYlRffcKcjkpqrN3lFu+vV7kzqlW7aqx/PTy7qr7atXyB+V7n7tTZ7urq6pHqt7v/JysqqvnHq79+aqn/yGjsquqevqqpnf399fqN7ve/dqJfqlPP/C9VqfGl6vVvvqBtvq9Drdr0rr7vKvuveL9V9HRWlJUeVZ1NZWXlZ5WUlRytKSv4sP7u8tLS0rPS8srLS8tKyMzPT0tIy09PTMzIyMrKysjJzcrKyc3KysnNzc7Nzc3OLioqKi4qKioqLi4tLSkpKSktLS8vKysoqKioqq6qqqqqrq6urqqqqa2pqampra2vr6urq6hsaGhoaGxsbm5qamppbWlpaWltb29ra2trbO9o7Ojo6Ozs7u7q6urq7u7t7enp6+/r6+vv7+wcGBgaHhoaGR4ZHRkdHR8fGxsbHJyYmJicnJ6empaVNT09Pz8zMzM7Ozs3NzS0oKCgsLCwqKiouLi4pKSktLS0rKysvLy+vqKiorKysqqqqrq6urqmpqamtra2rq6tvb29vaGhobGxsbGpqam5pbm5paWlta2trb29v7+jo6Ozs7Orq6u7p6ent7e3r6+vv7x8YGBgcGhoeGR4ZHR0dHxsbG5+YnJyanp6ZmZ6enZ2dm5ubn5+fn19QUFBYWFhUVFRcXFxSUlJaWlpaVlZWXl5eUVFRWVlZVVVVdXV1TU1NbW1tbV1dXX19fUNDQ2NjY1NTU3Nzc0tLS2tra1tbW3t7e0dHR2dnZ1dXV3d3d09PT29vb19fX39/f0BAQGBgYFBQUHBwcEhISGhoaFhYWHh4eERERGRkZFRUVHR0dExMTGxsbFxcXHx8fEJCQmJiYlJSUnJycgICAhISEhITE7O7u3sV6e3t7Ozu7Ojs7Ozq6urp6enq7Ozs7e3t7+/v7BAQEBgYGBIeHh4REREdHR0TExMbGxsXFxcfHx8QkJCYmJiUlJSSkpKampqWlpaenp6RkZGZmZmVlZWdnZ2Tk5Obm5ubm5ufn5+QUFBYWFhUVFRSUlJaWlpWVlZeXl5RUVFZWVlVVVVdXV1TU1NTU1NbW1tXV1dfX19QUFBDQ0NjY2NTU1Nzc3NLS0tra2tbW1t7e3tHR0dnZ2dXV1d3d3dPT09vb29fX19/f3x8fHxAQEBAYGBgUFBQcHBwSEhIaGhoWFhYeHh4REREdHR0VFRUTBQUXF5eQkJCYmJiUlJScnJySkpKampqWlpaenp6RkZGZmZmVlZWdnZ2Tk5Obm5ubm5ufn5+fn5+QUFBQVFRUVFRUUFBQX19fUFBQU1NTV1dXVVVVZWVlYWFhbW1tbW1tfX19QUFBQ0NDY2NjU1NTc3NzS0tLa2tra1tbW3t7e0dHR2dnZ1dXV3d3d09PT29vb19fX39/f0BAQGBgYFBQUHBwcEhISGhoaFhYWHh4eEREREZGRlJSUnJyckJCQmJiYlJSUnJyclJSUmpqalpYWHp6ekZGRmZmZlZWVnZ2dk5OTm5ubm5ubn5+fkFBQWFhYVFRUXFxcUlJSWlpaVlZWXl5eUVFRWVlZVVVVXV1dU1NTW1tbV1dXX19fUFBQUNDQ2NjY1NTU3Nzc0tLS2tra1tbW3t7e0dHR2dnZ1dXV3d3d09PT29vb19fX39/fHx8fEBAQEBgYGBQUFBwcHBISEhoaGhYWFh4eHhEREZ0dHRVVU1NTU3NzcwsLC2tra1tbW3t7e0dHR2dnZ1dXV3d3d09PT29vb19fX39/f0BAQGBgYFBQUHBwcEhISGhoaFhYWHh4eERERERGRlZWVnZ2dnp6ekpKSmpqalpaWnp6ekZGRmZmZlZWVnZ2dk5OTm5ubm5ubn5+fkFBQWFhYVFRUXFxcUlJSWlpaVlZWXl5eUVFRWVlZVVVVXV1dU1NTW1tbV1dXX19fUFBQUNDQ2NjY1NTU3Nzc0tLS2tra1tbW3t7e0dHR2dnZ1dXV3d3d09PT29vb19fX39/f0BAQGBgYFBQUHBwcEhISGhoaFhYWHh4eERERHR0dFVVVU1NTVFRUXFxcUlJSWlpaVlZWXl5eUVFRWVlZVVVVXV1dU1NTW1tbV1dXX19fUFBQUN"
        />
      ),
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
