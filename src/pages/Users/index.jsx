/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Table, Avatar, Descriptions, Button, Pagination, Row } from 'antd';
import moment from 'moment';
import { getInitials } from '@/utils/common';

const getRenderUserList = (usersList) => {
  if (!usersList || usersList.length === 0) return [];
  return usersList?.map((user) => ({
    ...user,
    father: user?.family?.father || '',
    grandfather: user?.family?.grandfather || '',
    spouse: user?.family?.spouse || '',
    marriage_date: user?.family?.marriage_date || '',
    address_line1: user?.address?.line1 || '',
    address_line2: user?.address?.line2 || '',
    city: user?.address?.city || '',
    state: user?.address?.state || '',
    country: user?.address?.country || '',
    role: user?.role?.name || '',
  }));
};

const defaultRender = (value) => value || '-';

// Helper to safely render values that might be objects with {isPrivate, <field>_value} structure
const safeRender = (value, valueKey) => {
  if (value === null || value === undefined) return '-';
  if (typeof value === 'object') {
    // Try common value key patterns
    const keys = valueKey ? [valueKey] : Object.keys(value).filter(k => k !== 'isPrivate');
    for (const key of keys) {
      if (value[key] !== undefined && value[key] !== null) {
        return value[key];
      }
    }
    return '-';
  }
  return value || '-';
};

const Users = ({ dispatch, loading, usersList }) => {
  const [startIndex, setStartIndex] = useState(1);
  const [viewSize, setViewSize] = useState(10);

  const fetchUsers = () => {
    dispatch({
      type: 'user/getAllUsers',
      payload: { query: { _limit: viewSize, _start: startIndex } },
    });
  };
  useEffect(() => {
    fetchUsers();
  }, [startIndex, viewSize]);

  const updateUser = (userId, isVerified) => {
    dispatch({
      type: 'user/updateUser',
      payload: { body: { isVerified }, pathParams: { userId } },
    }).then(() => fetchUsers());
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (data, record) => (
        <div className="flex items-center ">
          <Avatar style={{ background: '#fc8018' }} src={record?.profile_url}>
            {getInitials(data)}
          </Avatar>
          <div className="ml-2">
            <div className="capitalize">{data}</div>
            <div className="">{record?.phone}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      width: 100,
      render: defaultRender,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: defaultRender,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      render: defaultRender,
    },
    {
      title: 'Age',
      dataIndex: 'dob',
      render: (dob) => {
        if (!dob) return '-';
        const age = moment().diff(moment(dob), 'years');
        return age > 0 ? `${age} yrs` : '-';
      },
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      render: (value) => (value ? 'Yes' : 'No'),
    },
    {
      title: 'Verified',
      dataIndex: 'isVerified',
      render: (value) => (value ? 'Yes' : 'No'),
    },
    {
      title: 'Joined on',
      dataIndex: 'created_at',
      render: (value) => moment(value).format('ll'),
    },
    {
      title: 'Actions',
      dataIndex: 'isVerified',
      fixed: 'right',
      render: (isVerified, data) =>
        data?.hasDetails && (
          <Button onClick={() => updateUser(data._id, !isVerified)} size="small" type="primary">
            {isVerified ? 'Disable' : 'Approve'}
          </Button>
        ),
    },
  ];

  const expandedRowRender = (record) => (
    <Descriptions bordered title="Details">
      <Descriptions.Item label="Phone">{safeRender(record?.phone)}</Descriptions.Item>
      <Descriptions.Item label="Date of Birth">
        {record?.dob ? moment(record.dob).format('LL') : '-'}
      </Descriptions.Item>
      <Descriptions.Item label="Annual Income">{safeRender(record?.annual_income)}</Descriptions.Item>
      <Descriptions.Item label="Manglik">{safeRender(record?.manglik, 'manglik_value')}</Descriptions.Item>
      <Descriptions.Item label="Children">{safeRender(record?.family?.children)}</Descriptions.Item>
      <Descriptions.Item label="Spouse">{safeRender(record?.spouse)}</Descriptions.Item>
      <Descriptions.Item label="Grand Father">{safeRender(record?.grandfather)}</Descriptions.Item>
      <Descriptions.Item label="Father">{safeRender(record?.father)}</Descriptions.Item>
      <Descriptions.Item label="Address">{safeRender(record?.address_line1)}</Descriptions.Item>
      <Descriptions.Item label="Clan">{safeRender(record?.clan)}</Descriptions.Item>
      <Descriptions.Item label="Marital Status">{safeRender(record?.marital_status, 'marital_status_value')}</Descriptions.Item>
      <Descriptions.Item label="Marriage Date">{safeRender(record?.marriage_date)}</Descriptions.Item>
      <Descriptions.Item label="PAN">{safeRender(record?.pan)}</Descriptions.Item>
      <Descriptions.Item label="Aadhaar">{safeRender(record?.aadharcard)}</Descriptions.Item>
    </Descriptions>
  );

  // console.log(getRenderUserList(usersList?.users), 'ISET');
  return (
    <PageHeaderWrapper>
      <Table
        columns={columns}
        rowKey={(record) => record?._id}
        loading={loading}
        expandable={{ expandedRowRender }}
        dataSource={getRenderUserList(usersList?.users) || []}
        footer={() => (
          <Row className="mt-2" type="flex" justify="end">
            <Pagination
              key={`page-${startIndex}`}
              showSizeChanger
              pageSizeOptions={['10', '25', '50', '100']}
              onShowSizeChange={(e, p) => {
                setViewSize(p);
                setStartIndex(1);
              }}
              defaultCurrent={1}
              current={startIndex}
              pageSize={viewSize}
              total={usersList?.total}
              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
              onChange={(current) => setStartIndex(current)}
            />
          </Row>
        )}
      />
    </PageHeaderWrapper>
  );
};

export default connect(({ loading, user }) => ({
  loading: loading.effects['user/getAllUsers'],
  usersList: user.usersList,
}))(Users);
