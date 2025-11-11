/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { connect } from 'dva';

const CreateCategory = ({
  showModal,
  setShowModal,
  selectedCategory,
  setSelectedCategory,
  loading,
  dispatch,
  reload,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedCategory) {
      form.setFieldsValue(selectedCategory);
    }
  }, [form, selectedCategory]);

  return (
    <Modal
      visible={showModal}
      onCancel={() => setShowModal(false)}
      title={selectedCategory ? 'Edit Category' : 'Create Category'}
      afterClose={() => {
        form.resetFields();
        setSelectedCategory(false);
      }}
      bodyStyle={{ padding: 20 }}
      footer={[
        <Button key="1" onClick={() => setShowModal(false)}>
          Cancel
        </Button>,
        <Button key="2" loading={loading} onClick={() => form?.submit()} type="primary">
          {selectedCategory ? 'Update Category' : 'Create Category'}
        </Button>,
      ]}
    >
      <Form
        form={form}
        name="product"
        layout="vertical"
        onFinish={async (e) => {
          if (selectedCategory) {
            dispatch({
              type: 'labs/updateCategory',
              payload: { body: e, pathParams: { categoryId: selectedCategory._id } },
            }).then(() => {
              reload();
              setShowModal(false);
            });
          } else {
            dispatch({
              type: 'labs/createCategory',
              payload: { body: e },
            }).then(() => {
              reload();
              setShowModal(false);
            });
          }
        }}
      >
        <Form.Item
          name="name"
          label={<span className="formLabel">Category name</span>}
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter category name!',
            },
          ]}
        >
          <Input autoFocus className="mx-4" size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default connect(({ user, loading }) => ({
  currentUser: user.currentUser,
  loading: loading.effects['drivers/updateCustomer'] || loading.effects['drivers/createCustomer'],
}))(CreateCategory);
