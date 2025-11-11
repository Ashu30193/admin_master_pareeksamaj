import { Button, Input, Form, Col, Row, message } from 'antd';

import React from 'react';
import { connect } from 'umi';
import NumberInput from '@/components/NumberInput';

const BasicDetailsForm = ({ dispatch, updateProfileLoading, currentUser }) => {
  const [form] = Form.useForm();

  return (
    <div className="bg-white rounded shadow">
      <Form
        form={form}
        layout="vertical"
        onFinish={(value) =>
          dispatch({
            type: 'user/updateCurrent',
            payload: {
              pathParams: {
                teacherId: currentUser?.id,
              },
              body: value,
            },
          }).then(() => message.success('Profile updated successfully!'))
        }
        hideRequiredMark
        colon={false}
      >
        <div className="w-full pb-4">
          <div className="flex items-center justify-between mb-4 px-4 border-b">
            <div className="py-2">
              <div className="text-gray-600 uppercase font-medium text-sm">Account Email</div>
              <div className="text-blue-900 text-lg font-semibold">{currentUser?.email}</div>
            </div>
          </div>
          <div className="px-4">
            <Form.Item
              name="first_name"
              initialValue={currentUser?.name}
              label={<span className="formLabel">Name</span>}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "First name can't be blank!",
                },
              ]}
            >
              <Input size="large" autoFocus />
            </Form.Item>
            <Row gutter={24}>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  name="aadhar_number"
                  initialValue={currentUser?.name}
                  label={<span className="formLabel ">Aadhar Number</span>}
                >
                  <NumberInput
                    rules={[
                      {
                        required: true,
                        message: 'Please check adhar number!',
                        min: 16,
                      },
                    ]}
                    size="large"
                    style={{ width: '100%' }}
                    form={form}
                    name="aadhar_number"
                    maxlength={16}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Button
              type="primary"
              size="large"
              className="Button"
              htmlType="submit"
              block
              loading={updateProfileLoading}
            >
              Update
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default connect(({ common, user, loading }) => ({
  stateCodes: common.stateCodes,
  currentUser: user.currentUser,
  updateProfileLoading: loading.effects['user/updateCurrent'],
}))(BasicDetailsForm);
