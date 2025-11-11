import React, { useState, useEffect } from 'react';
import { Table, Row, Pagination, Statistic, Button, Input } from 'antd';
import { connect, Link } from 'umi';
import moment from 'moment';
import SearchNotFound from '@/assets/icons/empty-search-contact.png';

const CreatedFormTable = ({
  dataSource,
  limit,
  current,
  setCurrent,
  setLimit,
  loading,
  type,
  debounceSearch,
}) => {
  const { Search } = Input;
  const columns = [
    {
      title: 'Sr. No.',
      align: 'center',
      render: (_, __, index) => index + 1,
    },
    {
      title: 'Form Id',
      dataIndex: 'form_id',
      align: 'center',
      render: (data) => <span className="capitalize">{data}</span>,
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      align: 'center',
      render: (data) => moment(data).format('LL'),
    },
    {
      title: 'Action',
      dataIndex: '_id',
      align: 'center',
      render: (id, record) => (
        <div className="flex justify-center">
          <div className="">
            <Link to={`/form/${type}/${id}`}>
              <Button
                type="primary"
                onClick={() => {
                  setLimit(10);
                  setCurrent(1);
                }}
              >
                View
              </Button>
            </Link>
          </div>
          <div className="ml-2">
            <Link to={`/form/${type}/${id}/edit?data=editServiceUserForm`}>
              <Button
                type="primary"
                onClick={() => {
                  setLimit(10);
                  setCurrent(1);
                }}
              >
                Edit
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
  ];
  const changePageSize = (page) => {
    setCurrent(page);
  };

  return (
    <>
      <div className="w-full px-4 mb-4">
        <Search
          size="large"
          placeholder="Enter keyword here to search..."
          onInput={(value) => debounceSearch(value.target.value)}
          enterButton
        />
      </div>
      <Table
        loading={loading}
        pagination={false}
        rowClassName="cursor-pointer"
        rowKey={(record) => record.srno}
        dataSource={dataSource?.forms || []}
        columns={columns}
        locale={{
          emptyText: (
            <div className="text-center  pt-6 pb-2">
              <img src={SearchNotFound} alt="No staff member found!" style={{ height: '80px' }} />
              <p className="text-base  text-gray-600">No data found!</p>
            </div>
          ),
        }}
      />
      <div className="p-2 bg-gray-100">
        <Row className="mt-2" type="flex" justify="end">
          <Pagination
            current={current}
            onChange={changePageSize}
            showSizeChanger
            defaultPageSize={limit}
            pageSizeOptions={['10', '25', '50', '100']}
            onShowSizeChange={(e, p) => {
              setLimit(p);
            }}
            total={dataSource?.total}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          />
        </Row>
      </div>
    </>
  );
};

export default connect(({ loading }) => ({
  loading: loading.effects['forms/getForms'],
}))(CreatedFormTable);
