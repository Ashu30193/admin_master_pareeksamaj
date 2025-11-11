/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, DatePicker, InputNumber, Select } from 'antd';
// import { connect } from 'dva';

const CreateUpdateUser = ({
  showModal,
  setShowModal,
  selectedUser,
  setSelectedUser,
  loading,
  dispatch,
  reload,
}) => {
  const [form] = Form.useForm();

  const { Option } = Select;

  useEffect(() => {}, []);

  return (
    <Modal
      visible={showModal}
      onCancel={() => setShowModal(false)}
      title={selectedUser ? 'Edit User' : 'Create User'}
      afterClose={() => {
        form.resetFields();
        setSelectedUser(false);
      }}
      bodyStyle={{ padding: 20 }}
      footer={[
        <Button key="1" onClick={() => setShowModal(false)}>
          Cancel
        </Button>,
        <Button key="2" loading={loading} onClick={() => form?.submit()} type="primary">
          {selectedUser ? 'Update User' : 'Create User'}
        </Button>,
      ]}
    >
      <Form
        form={form}
        name="user-form"
        layout="vertical"
        onFinish={async (values) => {
          if (selectedUser) {
            dispatch({
              type: 'user/updateUser',
              payload: { body: values, pathParams: { userId: selectedUser._id } },
            }).then(() => {
              reload();
              setShowModal(false);
            });
          } else {
            dispatch({
              type: 'user/createUser',
              payload: { body: values },
            }).then(() => {
              reload();
              setShowModal(false);
            });
          }
        }}
      >
        <Form.Item
          name="name"
          label={<span className="formLabel">Name</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Name!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="dob"
          label={<span className="formLabel">DOB</span>}
          rules={[
            {
              required: true,
              message: 'Please pick Date of Birth',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="father"
          label={<span className="formLabel">Father Name</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Father Name!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="grandfather"
          label={<span className="formLabel">Grand Father Name</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Grand Father Name!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="spouse"
          label={<span className="formLabel">Spouse Name</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Spouse Name!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="marriage_date"
          label={<span className="formLabel">Marriage Date</span>}
          rules={[
            {
              required: true,
              message: 'Please pick marriage date',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item name="children" label={<span className="formLabel">No of Children</span>}>
          <InputNumber />
        </Form.Item>

        <Form.Item name="marital_status" label={<span className="formLabel">Marital Status</span>}>
          <Select placeholder="select your gender">
            <Option value="single">Single</Option>
            <Option value="married">Married</Option>
            <Option value="divorced">Divorced</Option>
          </Select>
        </Form.Item>

        <Form.Item name="address_line_1" label={<span className="formLabel">Address Line 1</span>}>
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item name="address_line_2" label={<span className="formLabel">Address Line 2</span>}>
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item name="city" label={<span className="formLabel">City</span>}>
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item name="state" label={<span className="formLabel">State</span>}>
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item name="country" label={<span className="formLabel">Country</span>}>
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="community"
          label={<span className="formLabel">Community</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Community!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="clan"
          label={<span className="formLabel">Clan</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Clan!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="highest_qualification"
          label={<span className="formLabel">Highest Qualification</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Highest Qualification!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="occupation"
          label={<span className="formLabel">Occupation</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Occupation!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="business"
          label={<span className="formLabel">Business</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Business!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="annual_income"
          label={<span className="formLabel">Annual Income</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Annual Income!',
            },
          ]}
        >
          <InputNumber className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="aadhar_number"
          label={<span className="formLabel">Aadhar Number</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Aadhar Number!',
            },
          ]}
        >
          <InputNumber className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="pan_number"
          label={<span className="formLabel">Pan Number</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Pan Number!',
            },
          ]}
        >
          <InputNumber className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="role"
          label={<span className="formLabel">Role</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Role!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="user">User</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label={<span className="formLabel">Phone Number</span>}
          rules={[
            {
              required: true,
              message: 'Please enter Phone Number!',
            },
          ]}
        >
          <InputNumber className="mx-4" size="large" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="email"
          label={<span className="formLabel">Email</span>}
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please enter Email!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="gender"
          label={<span className="formLabel">Gender</span>}
          rules={[
            {
              required: true,
              message: 'Please select Gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateUpdateUser;
