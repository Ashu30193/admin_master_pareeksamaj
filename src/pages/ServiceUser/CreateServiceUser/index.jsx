/* eslint-disable prefer-promise-reject-errors */
import { Input, Form, Row, Col, Button, Select, DatePicker } from 'antd';
import { connect, useParams } from 'umi';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { callApi } from '@/utils/apiUtils';
import ConfirmModal from '@/components/ConfirmModal';
import NumberInput from '@/components/NumberInput';
import PhoneNumber from '@/components/PhoneNumber';
import Address from '@/components/Address';

const { Option } = Select;
const CreateServiceUser = ({ dispatch, loading, getServiceUser, loadUpdateServiceUser, match }) => {
  const [form] = Form.useForm();
  const { serviceUserId } = useParams();
  const [id, setId] = useState('');
  const [confirmModal, setConfirmModal] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (match.path !== '/service-user/create') {
      dispatch({
        type: 'serviceUser/getServiceUser',
        payload: {
          pathParams: {
            id: serviceUserId,
          },
        },
      });
    }
  }, [dispatch, match.path, serviceUserId]);

  useEffect(() => {
    if (match.path !== '/service-user/create') {
      form.setFieldsValue({
        ...getServiceUser,
        phone: getServiceUser?.phone ? getServiceUser?.phone?.split('+44')[1] : '',
        date_of_birth: getServiceUser?.date_of_birth || '',
        service_end_date: getServiceUser?.service_end_date
          ? moment(getServiceUser?.service_end_date)
          : '',
      });
    }
  }, [form, getServiceUser, match.path]);

  const TextInput = ({ name, rules, label, placeholder, autoFocus }) => (
    <Form.Item name={name} rules={rules} label={<span className="formLabel">{label}</span>}>
      <Input autoFocus={autoFocus} size="large" placeholder={placeholder} />
    </Form.Item>
  );

  const onGenderChange = (value) => {
    form.setFieldsValue({
      gender: value,
    });
  };

  return (
    <div className="container mx-auto">
      <div className=" font-semibold text-2xl py-2">
        {match.path === '/service-user/create' ? 'Create Service User' : 'Edit Service User'}
      </div>
      <ConfirmModal visible={confirmModal} setVisible={setConfirmModal} id={id} status={status} />

      <Form
        colon="false"
        layout="vertical"
        form={form}
        scrollToFirstError
        requiredMark={false}
        onFinish={(values) => {
          const data = values;
          if (data.service_end_date) {
            data.service_end_date = new Date(data.service_end_date).toISOString();
          }

          data.address.address_line_1 =
            data?.address?.address_line_1 &&
            data?.address?.address_line_1.replaceAll(/undefined/gi, '').trim();

          data.address.address_line_2 =
            data?.address?.address_line_2 &&
            data?.address?.address_line_2.replaceAll(/undefined/gi, '').trim();

          if (match.path === '/service-user/create') {
            dispatch({
              type: 'serviceUser/registerServiceUser',
              payload: {
                body: {
                  ...data,
                  phone: data?.phone ? `${data?.country_code}${data?.phone}` : '',
                },
              },
            }).then((res) => {
              if (res?.status === 'ok') {
                form.resetFields();
                setConfirmModal(true);
                setStatus('registered');
                // eslint-disable-next-line no-underscore-dangle
                setId(res._id);
              } else {
                setConfirmModal(true);
                setStatus('notRegistered');
              }
            });
          } else {
            dispatch({
              type: 'serviceUser/editServiceUser',
              payload: {
                pathParams: {
                  id: serviceUserId,
                },
                body: {
                  ...data,
                  phone: data?.phone ? `${data?.country_code}${data?.phone}` : '',
                },
              },
            }).then((res) => {
              if (res.ok === 1) {
                setConfirmModal(true);
                setStatus('serviceUserUpdated');
                setId(serviceUserId);
              } else {
                setConfirmModal(true);
                setStatus('serviceUserNotUpdated');
              }
            });
          }
        }}
        autoComplete="off"
      >
        <div className=" bg-white shadow rounded mb-4 border-b p-8">
          <Row gutter={[24, 12]}>
            <Col lg={4} xl={4} md={4} sm={24} xs={24}>
              <TextInput
                name="title"
                label="Title"
                placeholder="Title"
                rules={[
                  {
                    whitespace: true,
                    required: true,
                    message: 'Please enter the title of service user',
                  },
                ]}
              />
            </Col>
            <Col lg={10} xl={10} md={10} sm={24} xs={24}>
              <TextInput
                name="first_name"
                label="First Name"
                placeholder="First Name"
                rules={[
                  {
                    whitespace: true,
                    required: true,
                    message: 'Please enter the first name of service user',
                  },
                ]}
              />
            </Col>
            <Col lg={10} xl={10} md={10} sm={24} xs={24}>
              <TextInput
                name="last_name"
                label="Last Name"
                placeholder="Last Name"
                rules={[
                  {
                    whitespace: true,
                    required: true,
                    message: 'Please enter the last name of service user',
                  },
                ]}
              />
            </Col>
          </Row>

          <Row gutter={[24, 12]}>
            <Col lg={12} xl={12} md={24} sm={24} xs={24}>
              <Form.Item
                required
                label={<span className="FormLabel font-medium">Phone number</span>}
              >
                <PhoneNumber
                  countryCode="country_code"
                  rules={[
                    {
                      message: 'Please enter the contact number of service user',
                    },
                    () => ({
                      validator(_, value) {
                        if (value?.length === 0) return Promise.resolve();
                        if (getServiceUser?.phone?.split('+44')[1] === value) {
                          return Promise.resolve();
                        }
                        return callApi({
                          uriEndPoint: {
                            uri: '/service-user/checkunique/user',
                            method: 'GET',
                            version: '',
                          },
                          query: {
                            identifier: `+44${value}`,
                          },
                        })
                          .then((res) => {
                            if (!res?.exists) {
                              return Promise.resolve();
                            }
                            // eslint-disable-next-line prefer-promise-reject-errors
                            return Promise.reject('Phone number already exists. Try again!');
                          })
                          .catch((err) => Promise.reject(err));
                      },
                    }),
                    { max: 10, message: 'Please enter only 10 digits for phone number' },
                    { min: 10, message: 'Please enter atleast 10 digits for phone number' },
                  ]}
                  form={form}
                  name="phone"
                />
              </Form.Item>
            </Col>

            <Col lg={12} xl={12} md={24} sm={24} xs={24}>
              <TextInput
                name="email"
                label="Email"
                placeholder="Email"
                rules={[
                  {
                    message: 'Please enter the email of service user',
                  },
                  () => ({
                    validator(_, value) {
                      if (value?.length === 0) return Promise.resolve();
                      if (getServiceUser?.email === value) {
                        return Promise.resolve();
                      }
                      return callApi({
                        uriEndPoint: {
                          uri: '/service-user/checkunique/user',
                          method: 'GET',
                          version: '',
                        },
                        query: {
                          identifier: `${value}`,
                        },
                      })
                        .then((res) => {
                          if (!res?.exists) {
                            return Promise.resolve();
                          }
                          // eslint-disable-next-line prefer-promise-reject-errors
                          return Promise.reject('Email already exists. Try again!');
                        })
                        .catch((err) => Promise.reject(err));
                    },
                  }),
                  {
                    message: 'Please enter a valid email address!',
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  },
                ]}
              />
            </Col>
          </Row>
          <Row gutter={[24, 12]}>
            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="date_of_birth"
                label={<span className="formLabel">Date of Birth</span>}
              >
                <Input style={{ width: '100%' }} size="large" placeholder="Date of Birth" />
              </Form.Item>
            </Col>
            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
              <Form.Item name="gender" label={<span className="formLabel ">Gender</span>}>
                <Select size="large" placeholder="Gender" onChange={onGenderChange} allowClear>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[24, 12]}>
            <Col lg={12} xl={12} md={24} sm={24} xs={24}>
              <Form.Item
                label={<span className="formLabel ">Social Service Number (Reference no.)</span>}
              >
                <NumberInput
                  size="large"
                  style={{ width: '100%' }}
                  form={form}
                  name="social_service_number"
                  placeholder="Social Service Number"
                />
              </Form.Item>
            </Col>
            <Col lg={12} xl={12} md={24} sm={24} xs={24}>
              <Form.Item
                name="service_end_date"
                label={<span className="formLabel ">Service End Date</span>}
              >
                <DatePicker
                  size="large"
                  style={{ width: '100%' }}
                  format="DD MMMM YYYY"
                  placeholder="Service End Date"
                />
              </Form.Item>
            </Col>
          </Row>

          <Address form={form} />
          <Row gutter={[24, 12]}>
            <Col lg={12} xl={12} md={24} sm={24} xs={24}>
              <TextInput
                name="first_contact_person"
                label="First Contact Person (Nominee)"
                placeholder="First Contact Person"
              />
            </Col>
            <Col lg={12} xl={12} md={24} sm={24} xs={24}>
              <TextInput
                name="relation_to_person"
                label="Relation To Person"
                placeholder="Relation To Person"
              />
            </Col>
          </Row>
        </div>

        <div className="flex justify-end">
          <Button
            type="primary"
            size="large"
            loading={match.path === '/service-user/create' ? loading : loadUpdateServiceUser}
            onClick={() => form.submit()}
          >
            {match.path === '/service-user/create' ? 'Create' : 'Update'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default connect(({ serviceUser, loading }) => ({
  getServiceUser: serviceUser.getServiceUser,
  loading: loading.effects['serviceUser/registerServiceUser'],
  loadUpdateServiceUser: loading.effects['serviceUser/editServiceUser'],
}))(CreateServiceUser);
