import React, { useEffect } from 'react';
import CardSection from '@/components/CardSection';
import { Button, Form, Input, Skeleton } from 'antd';
import { connect } from 'umi';
import { CloseOutlined } from '@ant-design/icons';

const AnnualIncome = ({ dispatch, siteConfig, getLoading }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch({
      type: 'siteConfig/getSiteConfig',
    });
  }, [dispatch]);

  const refreshTags = () => {
    dispatch({
      type: 'siteConfig/getSiteConfig',
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={(event) => {
        Promise.all([
          dispatch({
            type: 'siteConfig/updateSiteConfig',
            payload: {
              pathParams: { key: 'annual_income' },
              body: {
                annual_income: [
                  ...siteConfig.siteConfig.annual_income,
                  {
                    name:
                      event.name.split(' ')[0][0].toUpperCase() +
                      event.name.slice(1, event.name.length),
                    value: event.name.split(' ')[0],
                  },
                ],
              },
            },
          }),
        ])
          .then(() => refreshTags())
          .then(() => form.resetFields());
      }}
    >
      <CardSection
        className="mt-4"
        noPadding
        leftContent={
          <div className="pr-8 ">
            <div className="text-blue-900 font-semibold text-xl">Annual Income</div>
            <div className="text-gray-600">
              <p className="mt-4">Enter Annual Income Tags</p>
            </div>
          </div>
        }
        rightContent={
          <div className="p-4 bg-white shadow rounded">
            <div className="tags-input">
              <div className="flex flex-wrap mb-4">
                {siteConfig?.siteConfig?.annual_income.map((tag, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className="font-semibold bg-gray-200 rounded-full px-4 py-1 m-1">
                    {tag.name}
                    <CloseOutlined
                      onClick={() => {
                        const newArray = siteConfig.siteConfig.annual_income;

                        for (let i = 0; i < newArray.length; i += 1) {
                          if (newArray[i] === newArray[index]) {
                            newArray.splice(i, 1);
                          }
                        }

                        Promise.all([
                          dispatch({
                            type: 'siteConfig/updateSiteConfig',
                            payload: {
                              pathParams: { key: 'annual_income' },
                              body: {
                                annual_income: newArray,
                              },
                            },
                          }),
                        ]).then(() => refreshTags());
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Skeleton loading={getLoading}>
              <Form.Item
                rules={[
                  {
                    whitespace: true,
                    required: true,
                  },
                ]}
                name="name"
              >
                <Input autoFocus size="large" placeholder="Press Enter to add tags" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={() => form.submit()}>
                  Save
                </Button>
              </Form.Item>
            </Skeleton>
          </div>
        }
      />
    </Form>
  );
};

export default connect(({ loading, siteConfig }) => ({
  loading: loading.effects.getSiteConfig,
  siteConfig,
}))(AnnualIncome);
