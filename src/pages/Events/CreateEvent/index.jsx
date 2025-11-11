import { Modal, Input, Form, DatePicker, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { connect } from 'umi';

const CreateEvent = ({ dispatch, refresh, setShowModal, showModal }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      bodyStyle={{ padding: 20 }}
      title="Create Event"
      visible={showModal}
      footer={[]}
      onCancel={() => setShowModal(false)}
    >
      <Form
        form={form}
        name="news-form"
        layout="vertical"
        onFinish={async (values) => {
          dispatch({ type: 'common/createEvent', payload: { body: values } }).then(() => {
            refresh();
            setShowModal(false);
          });
        }}
      >
        <Form.Item
          name="name"
          label={<span className="formLabel">Event name</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter event name!',
            },
          ]}
        >
          <Input placeholder="Please enter event name" className="mx-4" size="large" />
        </Form.Item>
        <Form.Item
          name="date"
          label={<span className="formLabel">Select event date</span>}
          rules={[
            {
              required: true,
              message: 'Please select event date!',
            },
          ]}
        >
          <DatePicker style={{ width: '100%' }} className="mx-4" size="large" />
        </Form.Item>
        <Form.Item
          name="description"
          label={<span className="formLabel">Description</span>}
          rules={[
            {
              required: true,
              message: 'Please enter description',
            },
          ]}
        >
          <TextArea style={{ width: '100%' }} className="mx-4" size="large" />
        </Form.Item>
        <Button onClick={() => form.submit()}>Submit</Button>
      </Form>
    </Modal>
  );
};

export default connect(({ loading }) => ({ loading: loading.effects['common/createEvent'] }))(
  CreateEvent,
);
