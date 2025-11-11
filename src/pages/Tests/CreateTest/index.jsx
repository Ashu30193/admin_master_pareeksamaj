/* eslint-disable no-underscore-dangle */
import CardSection from '@/components/CardSection';
import { FooterToolbar, PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Checkbox, Col, Form, Input, notification, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { connect, history } from 'umi';
import { SmileOutlined } from '@ant-design/icons';

const CreateTest = ({ dispatch, categoryList, labsList }) => {
  useEffect(() => {
    dispatch({
      type: 'labs/getCategoryList',
    });
    dispatch({
      type: 'labs/getAllLabs',
    });
  }, [dispatch]);
  const [overview, setOverview] = useState('');
  const [form] = Form.useForm();

  return (
    <PageHeaderWrapper>
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          const payload = {
            overview,
            ...values,
          };
          if (!values) {
            dispatch({
              type: 'labs/updateLab',
              payload: { body: values, pathParams: {} },
            }).then((res) => {
              if (res?.status === 'ok') {
                notification.open({
                  message: 'Great Job!',
                  description: (
                    <div>
                      You have successfully updated the lab <strong>{values.name}</strong>.
                    </div>
                  ),
                  icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                });
                form.resetFields();
                history.push('/labs/all');
              } else {
                notification.error({
                  message: 'Oops! Something went wrong.',
                  description: 'Unable to update the lab, Please try again!',
                });
              }
            });
          } else {
            dispatch({
              type: 'tests/createTest',
              payload,
            }).then((res) => {
              if (res?.status === 'ok') {
                notification.open({
                  message: 'Great Job!',
                  description: (
                    <div>
                      You have successfully created the test <strong>{values.name}</strong>.
                    </div>
                  ),
                  icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                });
                form.resetFields();
                history.push('/tests/all');
              } else {
                notification.error({
                  message: 'Oops! Something went wrong.',
                  description: 'Unable to create the test, Please try again!',
                });
              }
            });
          }
        }}
      >
        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Test details</div>
              <div className="text-gray-600">
                <p className="mt-4">Fill the basic details of the test</p>
              </div>
            </div>
          }
          rightContent={
            <div className="p-4 bg-white shadow rounded">
              <Form.Item
                extra="Test name should be unique, Verfiy with previously created test"
                rules={[
                  {
                    whitespace: true,
                    required: true,
                    message: 'Please enter the test name',
                  },
                ]}
                name="name"
                label={<span className="formLabel">Test name</span>}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                name="sample"
                rules={[
                  {
                    required: true,
                    message: 'Please select the samples',
                  },
                ]}
                label={<span className="formLabel">You need to provide</span>}
              >
                <Select mode="tags" size="large"></Select>
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please enter the price',
                  },
                ]}
                name="gender"
                initialValue={['Male', 'Female']}
                label={<span className="formLabel">This test is for</span>}
              >
                <Checkbox.Group>
                  <Checkbox value="Male">Male</Checkbox>
                  <Checkbox value="Female">Female</Checkbox>
                </Checkbox.Group>
              </Form.Item>
              <Row gutter={[24, 24]}>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                  <Form.Item
                    rules={[
                      {
                        whitespace: true,
                        required: true,
                        message: 'Please enter the price',
                      },
                    ]}
                    name="price"
                    label={<span className="formLabel">Price</span>}
                  >
                    <Input type="number" size="large" prefix="₹" />
                  </Form.Item>
                </Col>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                  <Form.Item
                    rules={[
                      {
                        whitespace: true,
                        required: true,
                        message: 'Please enter the price',
                      },
                    ]}
                    name="discount"
                    label={<span className="formLabel">Discount</span>}
                  >
                    <Input type="number" size="large" suffix="%" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please select the test category',
                  },
                ]}
                name="category"
                label={<span className="formLabel">Test Category</span>}
              >
                <Select size="large">
                  {categoryList?.categories.map((category) => (
                    <Select.Option key={category?._id} value={category?._id}>
                      {category.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please select the labs',
                  },
                ]}
                name="labs"
                label={<span className="formLabel">Test Labs</span>}
              >
                <Select mode="tags" size="large">
                  {labsList?.labs.map((lab) => (
                    <Select.Option key={lab?._id} value={lab?._id}>
                      {lab.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: 'Please select the labs',
                  },
                ]}
                name="prepration"
                label={<span className="formLabel">Test Preparation</span>}
              >
                <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
              </Form.Item>
            </div>
          }
        />
        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Test overview</div>
              <div className="text-gray-600">
                <p className="mt-4">Please add the overview of the test.</p>
              </div>
            </div>
          }
          rightContent={
            <div className="p-4 shadow bg-white rounded">
              <Form.Item style={{ maxHeight: 500 }}>
                <CKEditor
                  editor={ClassicEditor}
                  data="<p></p>"
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setOverview(data);
                  }}
                />
              </Form.Item>
            </div>
          }
        />
      </Form>
      <FooterToolbar>
        <Button type="primary" onClick={() => form.submit()}>
          Create Test
        </Button>
      </FooterToolbar>
    </PageHeaderWrapper>
  );
};

export default connect(({ labs, loading }) => ({
  categoryList: labs.categoryList,
  labsList: labs.labsList,
  loading: loading.effects['tests/createTest'],
}))(CreateTest);
