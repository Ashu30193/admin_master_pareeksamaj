/* eslint-disable no-underscore-dangle */
import CardSection from '@/components/CardSection';
import { FooterToolbar, PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Checkbox, Col, Form, Input, notification, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { connect, history } from 'umi';
import { PlusOutlined, SmileOutlined } from '@ant-design/icons';

const CreatePackage = ({ dispatch, categoryList, labsList }) => {
  useEffect(() => {
    dispatch({
      type: 'labs/getCategoryList',
    });
    dispatch({
      type: 'labs/getAllLabs',
    });
  }, [dispatch]);

  const [testIncludes, setTestIncludes] = useState([]);
  const [overview, setOverview] = useState('');
  const [cbcResults, setCbcResults] = useState('');
  const [showNestedInput, setShowNestedInput] = useState({});
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();

  return (
    <PageHeaderWrapper>
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          const payload = {
            overview,
            cbc: cbcResults,
            ...values,
            tests: testIncludes,
          };
          dispatch({
            type: 'tests/createPackage',
            payload: { body: payload },
          }).then((res) => {
            if (res?.status === 'ok') {
              notification.open({
                message: 'Great Job!',
                description: (
                  <div>
                    You have successfully created the package <strong>{values.name}</strong>.
                  </div>
                ),
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
              });
              form.resetFields();
              history.push('/package/all');
            } else {
              notification.error({
                message: 'Oops! Something went wrong.',
                description: 'Unable to create the test, Please try again!',
              });
            }
          });
        }}
      >
        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Package details</div>
              <div className="text-gray-600">
                <p className="mt-4">Fill the basic details of the package</p>
              </div>
            </div>
          }
          rightContent={
            <div className="p-4 bg-white shadow rounded">
              <Form.Item
                rules={[
                  {
                    whitespace: true,
                    required: true,
                    message: 'Please enter the package name',
                  },
                ]}
                name="name"
                label={<span className="formLabel">Package name</span>}
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
                label={<span className="formLabel">This package is for</span>}
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
                label={<span className="formLabel">Package Category</span>}
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
            </div>
          }
        />
        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Package overview</div>
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
        <CardSection
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Interpreting CBC results</div>
              <div className="text-gray-600">
                <p className="mt-4">Enter interpreting CBC results</p>
              </div>
            </div>
          }
          rightContent={
            <div className="p-4 shadow bg-white rounded">
              <CKEditor
                editor={ClassicEditor}
                data="<p></p>"
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setCbcResults(data);
                }}
              />
            </div>
          }
        />
      </Form>

      <CardSection
        noPadding
        className="mt-4"
        leftContent={
          <div className="pr-8">
            <div className="text-blue-900 font-semibold text-xl">Package Test Includes</div>
            <div className="text-gray-600">
              <p className="mt-4">Enter the list of test includes in this particular test.</p>
            </div>
          </div>
        }
        rightContent={
          <div className="p-4 shadow bg-white rounded">
            <div className="pb-4">
              <div className="font-bold text-lg pb-1">Package Tests includes list</div>
              {testIncludes?.map((test, index) => (
                <div key={`${test?.name}${index + 1}`}>
                  <div className="font-semibold flex justify-between items-center bg-gray-100 px-4 py-2 text-gray-800 rounded shadow mb-2">
                    <div className="">
                      {index + 1}. {test?.name}
                    </div>
                    <div className="">
                      <a onClick={() => setShowNestedInput({ [test.name]: true })}>
                        <PlusOutlined /> Add Test
                      </a>
                    </div>
                  </div>
                  {test?.child?.map((nested, i) => (
                    <div
                      key={nested?.name}
                      className="font-semibold ml-4 flex justify-between items-center bg-gray-100 px-4 py-2 text-gray-800 rounded shadow mb-2"
                    >
                      <div className="">
                        {i + 1}. {nested?.name}
                      </div>
                    </div>
                  ))}

                  {showNestedInput[test.name] && (
                    <Form
                      form={form1}
                      name={`test_list${index + 1}`}
                      layout="vertical"
                      onFinish={(values) => {
                        if (testIncludes[index]?.child) {
                          testIncludes[index].child = [...testIncludes[index]?.child, values];
                        } else {
                          testIncludes[index].child = [values];
                        }
                        setTestIncludes([...testIncludes]);
                        form1.resetFields();
                      }}
                    >
                      <Form.Item
                        rules={[
                          {
                            whitespace: true,
                            required: true,
                            message: 'Please enter the nested test name',
                          },
                        ]}
                        name="name"
                        label={<span className="formLabel">Enter the name of test</span>}
                      >
                        <Input size="large" />
                      </Form.Item>
                      <div className="flex justify-end">
                        <Button htmlType="submit" type="primary">
                          Add
                        </Button>
                      </div>
                    </Form>
                  )}
                </div>
              ))}
            </div>
            <Form
              name="test_list"
              layout="vertical"
              form={form2}
              onFinish={(values) => {
                setTestIncludes([...testIncludes, values]);
                form2.resetFields();
              }}
            >
              <Form.Item
                rules={[
                  {
                    whitespace: true,
                    required: true,
                    message: 'Please enter the price',
                  },
                ]}
                name="name"
                label={<span className="formLabel">Enter the name of test</span>}
              >
                <Input size="large" />
              </Form.Item>
              <div className="flex justify-end">
                <Button htmlType="submit" onClick={() => {}} type="primary">
                  Add
                </Button>
              </div>
            </Form>
          </div>
        }
      />
      <FooterToolbar>
        <Button type="primary" onClick={() => form.submit()}>
          Create Package
        </Button>
      </FooterToolbar>
    </PageHeaderWrapper>
  );
};

export default connect(({ labs }) => ({
  categoryList: labs.categoryList,
  labsList: labs.labsList,
}))(CreatePackage);
