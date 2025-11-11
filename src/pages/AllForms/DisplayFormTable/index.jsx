import React from 'react';
import { Row, Pagination, Table, Button, Input } from 'antd';
import { connect, Link } from 'umi';
import { debounce } from 'lodash';
import moment from 'moment';
import SearchNotFound from '@/assets/icons/empty-search-contact.png';

const { Search } = Input;
const DisplayFormTable = (props) => {
  const { formByType, loading, setLimit, setCurrent, setSearchKeyword, current, limit } = props;

  const changePageSize = (page) => {
    setCurrent(page);
  };

  const action = (value) => {
    setSearchKeyword(value);
  };

  const debounceSearch = debounce(action, 400);
  const columns = [
    {
      title: 'Sr. No.',
      align: 'center',
      render: (_, __, index) => <span className="mx-4">{index + 1}</span>,
    },
    {
      title: 'Service User',
      dataIndex: 'serviceUser',
      render: (data) => <span className="capitalize ">{data}</span>,
    },
    {
      title: 'Form Id',
      dataIndex: 'form_id',
      align: 'center',
      render: (data) => <span>{data}</span>,
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      align: 'center',
      render: (data) => moment(data).format('DD MMM YYYY'),
    },
    {
      title: 'Action',
      dataIndex: '_id',
      align: 'center',
      render: (id, record) => (
        <div className="flex justify-center">
          <div className="">
            <Link to={`/form/${record?.type}/${id}`}>
              <Button
                type="primary"
                onClick={() => {
                  setSearchKeyword('');
                  setLimit(10);
                  setCurrent(1);
                }}
              >
                View
              </Button>
            </Link>
          </div>
          <div className="ml-2">
            <Link to={`/form/${record?.type}/${id}/edit?data=editForm`}>
              <Button
                type="primary"
                onClick={() => {
                  setSearchKeyword('');
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

  return (
    <div>
      <div className="flex px-4 mb-4">
        <div className="w-full">
          <Search
            size="large"
            placeholder="Enter keyword here to search..."
            onInput={(value) => debounceSearch(value.target.value)}
            enterButton
          />
        </div>
      </div>
      <Table
        className="no-shadow zcp-fixed-w-table"
        rowClassName="cursor-pointer"
        pagination={false}
        columns={columns}
        dataSource={formByType?.forms}
        rowKey={(record) => record.id}
        loading={loading}
        bordered={false}
        locale={{
          emptyText: (
            <div className="text-center  pt-6 pb-2">
              <img src={SearchNotFound} alt="No staff member found!" style={{ height: '80px' }} />
              <p className="text-base  text-gray-600">No data found!</p>
            </div>
          ),
        }}
        footer={() => (
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
              total={formByType?.total}
              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
          </Row>
        )}
      />
    </div>
  );
};

export default connect(({ loading }) => ({
  loading: loading.effects['forms/getForms'],
}))(DisplayFormTable);
