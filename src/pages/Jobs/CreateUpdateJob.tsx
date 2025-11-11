/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, InputNumber, Select, DatePicker } from 'antd';

const CreateUpdateJob = ({
  showModal,
  setShowModal,
  selectedJob,
  setSelectedJob,
  loading,
  dispatch,
  reload,
}) => {
  const [form] = Form.useForm();

  const { TextArea } = Input;
  const { Option } = Select;

  useEffect(() => {}, []);

  return (
    <Modal
      visible={showModal}
      onCancel={() => setShowModal(false)}
      title={selectedJob ? 'Edit Job' : 'Create Job'}
      afterClose={() => {
        form.resetFields();
        setSelectedJob(false);
      }}
      bodyStyle={{ padding: 20 }}
      footer={[
        <Button key="1" onClick={() => setShowModal(false)}>
          Cancel
        </Button>,
        <Button key="2" loading={loading} onClick={() => form?.submit()} type="primary">
          {selectedJob ? 'Update Job' : 'Create Job'}
        </Button>,
      ]}
    >
      <Form
        form={form}
        name="job-form"
        layout="vertical"
        onFinish={async (values) => {
          console.log('value: ', values);
          if (selectedJob) {
            dispatch({
              type: 'job/updateJob',
              payload: { body: values, pathParams: { JobId: selectedJob._id } },
            }).then(() => {
              reload();
              setShowModal(false);
            });
          } else {
            dispatch({
              type: 'job/createJob',
              payload: { body: values },
            }).then(() => {
              reload();
              setShowModal(false);
            });
          }
        }}
      >
        <Form.Item
          name="title"
          label={<span className="formLabel">Title</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Title!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="company_name"
          label={<span className="formLabel">Company Name</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Company Name!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="company_state"
          label={<span className="formLabel">Company State</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Company State!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="company_city"
          label={<span className="formLabel">Company City</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Company City!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="company_locality"
          label={<span className="formLabel">Company Locality</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Company Locality!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>

        <Form.Item
          name="vacancies"
          label={<span className="formLabel">Vacancies</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Vacancies!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="description"
          label={<span className="formLabel">Description</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Description!',
            },
          ]}
        >
          <TextArea rows={4} className="mx-4" size="large" />
        </Form.Item>

        <Form.Item name="jobType" label={<span className="formLabel">Job Type</span>}>
          <Select placeholder="Select Job Type">
            <Option value="full-time">Full-time</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="startDate"
          label={<span className="formLabel">Start Date</span>}
          rules={[
            {
              required: true,
              message: 'Please pick Start Date of Job',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="endDate"
          label={<span className="formLabel">End Date</span>}
          rules={[
            {
              required: true,
              message: 'Please pick End Date of Job',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="pay"
          label={<span className="formLabel">Pay</span>}
          rules={[{ required: true, message: 'Please enter Pay' }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="payPerType"
          label={<span className="formLabel">Pay Per Type</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter Pay Per Type!',
            },
          ]}
        >
          <Input className="mx-4" size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateUpdateJob;
