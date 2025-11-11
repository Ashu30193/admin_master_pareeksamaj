import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@/components/BreadCrumbs';
import { useParams, history, connect, Link } from 'umi';
import { Row, Col, Tabs, Skeleton, Button } from 'antd';
import Page from '@/components/Page';
import svg from '@/assets/icons/m-0.svg';
import { debounce } from 'lodash';
import moment from 'moment';
import { EditOutlined, PlusSquareOutlined } from '@ant-design/icons';

import CreatedFormTable from './CreatedFormTable';

const formType = [
  {
    value: 'Client Review',
    type: 'Client Review',
    category: 'clientReviewForm',
  },
  {
    value: 'Mental Capacity',
    type: 'Mental Capacity',
    category: 'mentalCapacityForm',
  },
  {
    value: 'Risk Assessment',
    type: 'Risk Assessment',
    category: 'riskAssessmentForm',
  },
  {
    value: 'Risk Assessment - COSHH',
    type: 'Risk Assessment - COSHH',
    category: 'riskAssessmentFormCoshh',
  },
  {
    value: 'Moving And Handling',
    type: 'Moving And Handling',
    category: 'movingAndHandlingForm',
  },
  {
    value: 'Support Plan',
    type: 'Support Plan',
    category: 'supportPlanForm',
  },
  {
    value: 'Telephone Monitoring',
    type: 'Telephone Monitoring',
    category: 'telephoneMonitoring',
  },
];

const ViewServiceUser = ({ getServiceUser, dispatch, loading, formByType }) => {
  const { id } = useParams();
  const [type, setType] = useState('clientReviewForm');
  const [limit, setLimit] = useState(10);
  const [current, setCurrent] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');

  const action = (value) => {
    setSearchKeyword(value);
  };

  const debounceSearch = debounce(action, 400);

  useEffect(() => {
    dispatch({
      type: 'serviceUser/getServiceUser',
      payload: {
        pathParams: {
          id,
        },
      },
    });
  }, [dispatch, id]);

  useEffect(() => {
    const val = {
      type,
      _limit: limit,
      _start: current,
      user_id: id,
      keyword: searchKeyword,
    };

    dispatch({
      type: 'forms/getForms',
      payload: {
        query: val,
      },
    });
  }, [current, limit, type, id, searchKeyword, dispatch]);

  const Item = ({ title, value, classNames }) => (
    <div className=" px-4 py-2 border-b">
      <span className="flex justify-between">
        <div className="text-gray-700 font-normal text-sm">{title}</div>
        <Skeleton loading={loading}>
          <div className={classNames || 'font-semibold'} style={{ color: '#9D1D5A' }}>
            {value}
          </div>
        </Skeleton>
      </span>
    </div>
  );
  const FormCards = ({ value, category }) => (
    <div
      className="shadow h-20 rounded bg-white py-2 px-2 flex items-center justify-between "
      onClick={() => {
        history.push(`/form/${category}/${id}/create?data=createServiceUserForm`);
      }}
    >
      <div className="text-sm text-gray-900 font-semibold cursor-pointer ml-2">{value}</div>
      <PlusSquareOutlined
        style={{ fontSize: '15px', color: '#9D1D5A' }}
        className="cursor-pointer"
      />
    </div>
  );

  const countryCode = getServiceUser?.phone?.slice(0, 3);

  const phoneNumber = getServiceUser?.phone?.slice(3, getServiceUser?.phone?.length);
  const { TabPane } = Tabs;
  return (
    <Page
      title={
        <div className="capitalize">
          {getServiceUser?.title}. {getServiceUser?.first_name} {getServiceUser?.last_name}
        </div>
      }
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
            {
              name: (
                <div className="capitalize">
                  {getServiceUser?.title}. {getServiceUser?.first_name} {getServiceUser?.last_name}
                </div>
              ),
              path: '#',
            },
          ]}
        />
      }
      primaryAction={
        <Link to={`/service-user/${id}/edit`}>
          <Button icon={<EditOutlined />} type="primary">
            Edit Service User
          </Button>
        </Link>
      }
    >
      <div className="container mx-auto mt-6">
        <Row className="mb-6" gutter={[12, 12]}>
          {formType.map((form) => (
            <Col xl={4} lg={4} md={6} sm={12} xs={12} key={form.value}>
              <FormCards value={form.value} type={form.type} category={form.category} />
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 24]} className="mb-5">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="bg-white shadow rounded mb-3">
              <div className="flex items-center px-4 py-4 border-b">
                <div className="">
                  <img src={svg} className="h-16 w-16 rounded-full" alt="" />
                </div>
                <div className="">
                  <div className="pl-2 w-full">
                    <Skeleton loading={loading}>
                      <span className="flex justify-between">
                        <div className="text-lg capitalize font-medium text-gray-900">
                          {`${getServiceUser?.title}. ${getServiceUser?.first_name} ${getServiceUser?.last_name}`}
                        </div>
                      </span>
                      <div className="" style={{ fontSize: '13px' }}>
                        Created at {moment(getServiceUser?.created_at).format('LL')}
                      </div>
                    </Skeleton>
                  </div>
                </div>
              </div>
              {getServiceUser?.gender && (
                <Item
                  classNames="capitalize font-semibold"
                  value={getServiceUser?.gender}
                  title="Gender"
                />
              )}
              {getServiceUser?.email && <Item value={getServiceUser?.email} title="Email" />}
              {getServiceUser?.phone && (
                <Item value={`(${countryCode}) ${phoneNumber}`} title=" Phone Number" />
              )}
              {getServiceUser?.date_of_birth && (
                <Item value={getServiceUser?.date_of_birth} title="DOB" />
              )}
              {getServiceUser?.social_service_number && (
                <Item value={getServiceUser?.social_service_number} title="SSN" />
              )}
              {getServiceUser?.first_contact_person && (
                <Item
                  classNames="capitalize font-semibold"
                  value={getServiceUser?.first_contact_person}
                  title="First Contact person"
                />
              )}
              {getServiceUser?.relation_to_person && (
                <Item
                  classNames="capitalize font-semibold"
                  value={getServiceUser?.relation_to_person}
                  title="Relation To Person"
                />
              )}
              {getServiceUser?.service_end_date && (
                <Item
                  classNames="capitalize font-semibold"
                  value={moment(getServiceUser?.service_end_date).format('LL')}
                  title="Service End Date"
                />
              )}
            </div>
            <div className="bg-white shadow rounded mb-3">
              <div className=" px-4 py-2 border-b">
                <div className="text-gray-700 font-normal text-sm font-semibold">
                  Address Details
                </div>
              </div>
              {(getServiceUser?.address?.address_line_1 ||
                getServiceUser?.address?.address_line_2) && (
                <Item
                  classNames="capitalize font-semibold"
                  value={`${
                    getServiceUser?.address?.address_line_1 &&
                    getServiceUser?.address?.address_line_1.replaceAll(/undefined/gi, '')
                  }, ${
                    getServiceUser?.address?.address_line_2 &&
                    getServiceUser?.address?.address_line_2.replaceAll(/undefined/gi, '')
                  }`}
                  title="Street Name"
                />
              )}
              {getServiceUser?.address?.region && (
                <Item
                  classNames="capitalize font-semibold"
                  value={getServiceUser?.address?.region}
                  title="Region"
                />
              )}
              {getServiceUser?.address?.city && (
                <Item
                  value={getServiceUser?.address?.city}
                  classNames="capitalize font-semibold"
                  title="City"
                />
              )}
              {getServiceUser?.address?.state_code && (
                <Item
                  value={getServiceUser?.address?.state_code?.split(' ')[1]}
                  classNames="capitalize font-semibold"
                  title="County"
                />
              )}
              {getServiceUser?.address?.country_code && (
                <Item
                  value={getServiceUser?.address?.country_code}
                  classNames="capitalize font-semibold"
                  title="Country"
                />
              )}
              {getServiceUser?.address?.postal_code && (
                <Item value={getServiceUser?.address?.postal_code} title="Postal Code" />
              )}
            </div>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <Tabs
              defaultActiveKey="clientReviewForm"
              className="bg-white"
              onTabClick={(value) => {
                setType(value);
              }}
            >
              <TabPane tab={<span className="ml-3">Client Review</span>} key="clientReviewForm">
                <CreatedFormTable
                  type={type}
                  dataSource={formByType}
                  limit={limit}
                  current={current}
                  setCurrent={setCurrent}
                  setLimit={setLimit}
                  debounceSearch={debounceSearch}
                />
              </TabPane>
              <TabPane tab={<span className="ml-3">Mental Capacity</span>} key="mentalCapacityForm">
                <CreatedFormTable
                  type={type}
                  dataSource={formByType}
                  limit={limit}
                  current={current}
                  setCurrent={setCurrent}
                  setLimit={setLimit}
                  debounceSearch={debounceSearch}
                />
              </TabPane>

              <TabPane tab={<span className="ml-3">Risk Assessment</span>} key="riskAssessmentForm">
                <CreatedFormTable
                  type={type}
                  dataSource={formByType}
                  limit={limit}
                  current={current}
                  setCurrent={setCurrent}
                  setLimit={setLimit}
                  debounceSearch={debounceSearch}
                />
              </TabPane>
              <TabPane
                tab={<span className="ml-3">Risk Assessment - COSHH</span>}
                key="riskAssessmentFormCoshh"
              >
                <CreatedFormTable
                  type={type}
                  dataSource={formByType}
                  limit={limit}
                  current={current}
                  setCurrent={setCurrent}
                  setLimit={setLimit}
                  debounceSearch={debounceSearch}
                />
              </TabPane>
              <TabPane
                tab={<span className="ml-3">Moving And Handling</span>}
                key="movingAndHandlingForm"
              >
                <CreatedFormTable
                  type={type}
                  dataSource={formByType}
                  limit={limit}
                  current={current}
                  setCurrent={setCurrent}
                  setLimit={setLimit}
                  debounceSearch={debounceSearch}
                />
              </TabPane>
              <TabPane tab={<span className="ml-3">Support Plan</span>} key="supportPlanForm">
                <CreatedFormTable
                  type={type}
                  dataSource={formByType}
                  limit={limit}
                  current={current}
                  setCurrent={setCurrent}
                  setLimit={setLimit}
                  debounceSearch={debounceSearch}
                />
              </TabPane>
              <TabPane
                tab={<span className="ml-3">Telephone Monitoring</span>}
                key="telephoneMonitoring"
              >
                <CreatedFormTable
                  type={type}
                  dataSource={formByType}
                  limit={limit}
                  current={current}
                  setCurrent={setCurrent}
                  setLimit={setLimit}
                  debounceSearch={debounceSearch}
                />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </Page>
  );
};

export default connect(({ loading, forms, serviceUser }) => ({
  getServiceUser: serviceUser.getServiceUser,
  loading: loading.effects['serviceUser/getServiceUser'],
  formByType: forms.formByType,
  formData: forms.formData,
}))(ViewServiceUser);
