import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@/components/BreadCrumbs';
import Page from '@/components/Page';
import { Table, Row, Pagination, Input, Button, Avatar } from 'antd';
import { connect, Link } from 'umi';
import { getIntials } from '@/utils/utils';
import { debounce } from 'lodash';
import moment from 'moment';
import { ArrowRightOutlined } from '@ant-design/icons';
import SearchNotFound from '@/assets/icons/empty-search-contact.png';

const AllServiceUser = ({ loading, dispatch, serviceUserList }) => {
  const [limit, setLimit] = useState(10);
  const [current, setCurrent] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const { Search } = Input;

  useEffect(() => {
    dispatch({
      type: 'serviceUser/serviceUserList',
      payload: { query: { _limit: limit, _start: current, keyword: searchKeyword } },
    });
  }, [limit, current, searchKeyword, dispatch]);

  const columns = [
    {
      title: 'Sr. No.',
      align: 'center',
      render: (_, __, index) => <div>{index + 1}</div>,
    },
    {
      title: 'Name',
      align: 'left',
      dataIndex: 'first_name',
      render: (data, record) => (
        <div className="flex items-center">
          <div className="w-28">
            <Avatar
              className="bg-blue-800 w-8 uppercase"
              style={{
                backgroundColor: '#9D1D5A',
              }}
            >
              {record && getIntials(`${record?.first_name} ${record?.last_name}`)}
            </Avatar>
          </div>

          <div className="ml-2 w-28">
            <div className="font-medium capitalize">{`${record?.title}. ${record?.first_name} ${record?.last_name}`}</div>
            <div className="text-gray-600" style={{ fontSize: '12px' }}>
              Since {moment(record?.created_at).format('LL')}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      align: 'left',
      render: (data) =>
        data ? (
          <div>
            ({data.slice(0, 3)}) {data.slice(3, data.length)}
          </div>
        ) : (
          '-'
        ),
    },
    {
      title: 'Email',
      align: 'left',
      dataIndex: 'email',
      render: (data) => (data ? <div>{data}</div> : '-'),
    },

    {
      title: 'Action',
      align: 'center',
      dataIndex: '_id',
      render: (id) => (
        <Link to={`/service-user/${id}/view`}>
          <Button type="primary">
            View <ArrowRightOutlined />
          </Button>
        </Link>
      ),
    },
  ];
  const changePageSize = (page) => {
    setCurrent(page);
  };
  const action = (value) => {
    setSearchKeyword(value);
  };

  const debounceSearch = debounce(action, 400);
  return (
    <Page
      title="All Service User"
      breadcrumbs={
        <Breadcrumbs
          path={[
            {
              name: 'Dashboard',
              path: '/dashboard',
            },
            {
              name: 'All Service User',
              path: '/service-user/all',
            },
          ]}
        />
      }
    >
      <div className="w-full mb-6">
        <Search
          size="large"
          placeholder="Enter keyword here to search..."
          onInput={(value) => debounceSearch(value.target.value)}
          enterButton
        />
      </div>
      <div className="shadow mb-8">
        <Table
          loading={loading}
          pagination={false}
          rowClassName="cursor-pointer"
          rowKey={(record) => record.srno}
          dataSource={serviceUserList?.ServiceUser || []}
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
              total={serviceUserList?.total}
              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
          </Row>
        </div>
      </div>
    </Page>
  );
};

export default connect(({ loading, serviceUser }) => ({
  serviceUserList: serviceUser.serviceUserList,
  loading: loading.effects['serviceUser/serviceUserList'],
}))(AllServiceUser);
