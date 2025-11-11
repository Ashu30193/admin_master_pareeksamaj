/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Pagination, Row, Statistic } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Table } from 'antd';
import { connect } from 'umi';

const Jobs = ({ loading, dispatch, jobs }) => {
  const [start, setStart] = useState(1);

  const getJobs = () => {
    dispatch({ type: 'common/getJobs', payload: { query: { _start: start, _limit: 10 } } });
  };

  useEffect(() => {
    getJobs();
  }, [start]);

  useEffect(() => {}, []);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Company Name',
      dataIndex: 'company',
    },

    {
      title: 'Location',
      dataIndex: 'location',
    },
    {
      title: 'Vacancies',
      dataIndex: 'vacancies',
      align: 'center',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      ellipsis: true,
    },
    {
      title: 'Job Type',
      dataIndex: 'jobType',
    },
    {
      title: 'Skills',
      dataIndex: 'skills',
      render: (skills) => skills.join(', '),
    },
    {
      title: 'Pay',
      dataIndex: 'pay',
      render: (pay) => (
        <Statistic
          style={{ fontSize: 16 }}
          valueStyle={{ fontSize: 16 }}
          value={pay}
          prefix="₹"
          precision={2}
        />
      ),
    },
  ];

  return (
    <PageHeaderWrapper>
      <Table
        columns={columns}
        rowKey={(record) => record?._id}
        loading={loading}
        pagination={false}
        dataSource={jobs?.jobs || []}
        footer={() => (
          <Row type="flex" justify="end">
            <Pagination
              defaultCurrent={1}
              current={start}
              pageSize={10}
              total={jobs?.total}
              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
              onChange={setStart}
            />
          </Row>
        )}
      />
    </PageHeaderWrapper>
  );
};

export default connect(({ common: { jobs }, loading }) => ({
  jobs,
  loading: loading.effects['common/getJobs'],
}))(Jobs);
