import CardSection from '@/components/CardSection';
import { FooterToolbar, PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Form, Input, notification, Rate, Skeleton } from 'antd';
import { connect, history, useParams } from 'umi';
import React, { useEffect } from 'react';
import { SmileOutlined } from '@ant-design/icons';

const CreateLabs = ({ dispatch, loading, getLoading }) => {
  const [form] = Form.useForm();
  const { labId } = useParams();

  useEffect(() => {
    if (labId) {
      dispatch({
        type: 'labs/getOneLab',
        payload: { pathParams: { labId } },
      }).then((res) => form.setFieldsValue(res));
    }
  }, [labId, dispatch, form]);

  return (
    <PageHeaderWrapper>
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          if (labId) {
            dispatch({
              type: 'labs/updateLab',
              payload: { body: values, pathParams: { labId } },
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
              type: 'labs/createLabs',
              payload: values,
            }).then((res) => {
              if (res?.status === 'ok') {
                notification.open({
                  message: 'Great Job!',
                  description: (
                    <div>
                      You have successfully created the lab <strong>{values.name}</strong>.
                    </div>
                  ),
                  icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                });
                form.resetFields();
                history.push('/labs/all');
              } else {
                notification.error({
                  message: 'Oops! Something went wrong.',
                  description: 'Unable to create the lab, Please try again!',
                });
              }
            });
          }
        }}
      >
        <CardSection
          className="mt-4"
          noPadding
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Lab details</div>
              <div className="text-gray-600">
                <p className="mt-4">Fill the basic details of the lab</p>
              </div>
            </div>
          }
          rightContent={
            <div className="p-4 bg-white shadow rounded">
              <Skeleton loading={getLoading}>
                <Form.Item
                  rules={[
                    {
                      whitespace: true,
                      required: true,
                      message: 'Please enter the Lab name',
                    },
                  ]}
                  name="name"
                  label={<span className="formLabel">Lab name</span>}
                >
                  <Input autoFocus size="large" />
                </Form.Item>
                <Form.Item
                  name="location"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: 'Please enter the location',
                    },
                  ]}
                  label={<span className="formLabel">Lab location</span>}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  name="manager"
                  rules={[
                    {
                      whitespace: true,
                      message: 'Please enter proper lab manager',
                    },
                  ]}
                  label={<span className="formLabel">Lab Manager</span>}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item name="ratings" label={<span className="formLabel">Lab Ratings</span>}>
                  <Rate allowHalf />
                </Form.Item>
              </Skeleton>
            </div>
          }
        />
      </Form>
      <FooterToolbar>
        <Button loading={loading} type="primary" onClick={() => form.submit()}>
          {labId ? 'Update' : 'Create'} Lab
        </Button>
      </FooterToolbar>
    </PageHeaderWrapper>
  );
};

export default connect(({ loading }) => ({
  loading: loading.effects['labs/createLabs'] || loading.effects['labs/updateLab'],
  getLoading: loading.effects['labs/getOneLab'],
}))(CreateLabs);
