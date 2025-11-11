import React, { useState } from 'react';
import { Modal, Form, Input, Button, Upload, Select } from 'antd';
import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { CKEditor } from 'ckeditor4-react';
import { connect } from 'umi';

const { Option } = Select;

const states = [
  'Andaman and Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Ladakh',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

const CreateUpdateNews = ({
  showModal,
  setShowModal,
  selectedNews,
  setSelectedNews,
  loading,
  dispatch,
  refresh,
}) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState<any>();

  return (
    <Modal
      visible={showModal}
      onCancel={() => setShowModal(false)}
      width={700}
      title={selectedNews ? 'Edit News' : 'Create News'}
      afterClose={() => {
        form.resetFields();
        setSelectedNews(false);
      }}
      bodyStyle={{ padding: 20 }}
      footer={[
        <Button key="1" onClick={() => setShowModal(false)}>
          Cancel
        </Button>,
        <Button key="2" loading={loading} onClick={() => form?.submit()} type="primary">
          {selectedNews ? 'Update News' : 'Create News'}
        </Button>,
      ]}
    >
      <Form
        form={form}
        name="news-form"
        layout="vertical"
        onFinish={async (values) => {
          if (file) {
            const formData = new FormData();
            formData.append('name', values?.title);
            formData.append('state', values?.state);
            formData.append('description', values?.description);
            formData.append('file', file);
            dispatch({ type: 'common/createNews', payload: { body: formData } }).then(() => {
              refresh();
              setShowModal(false);
            });
          } else {
            alert('Please add file ');
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
          name="state"
          label={<span className="formLabel">State</span>}
          rules={[
            {
              required: true,
              message: 'Please select state!',
            },
          ]}
        >
          <Select
            allowClear
            showSearch
            size="large"
            placeholder="Select your state"
            notFoundContent="No States Found"
          >
            {states.map((state) => (
              <Option key={state} value={state}>
                {state}
              </Option>
            ))}
          </Select>
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
          <CKEditor
            onChange={(data) => {
              form.setFieldsValue({ description: data.editor.getData() });
            }}
            initData={<p></p>}
          />
        </Form.Item>

        {!file && (
          <Upload
            accept=".png,.jpg,.jpeg"
            name="avatar"
            multiple={false}
            showUploadList={false}
            beforeUpload={(res) => {
              setFile(res);
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        )}
        {file && (
          <div className="border bg-gray-100 border-gray-200 font-medium p-2 flex justify-between">
            <p className="text-gray-700">{file?.name}</p>
            <DeleteOutlined onClick={() => setFile(undefined)} className="text-red-600" />
          </div>
        )}
      </Form>
    </Modal>
  );
};

export default connect()(CreateUpdateNews);
