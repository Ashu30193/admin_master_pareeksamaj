import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@/components/BreadCrumbs';
import Page from '@/components/Page';
import { Tabs } from 'antd';
import { connect, history } from 'umi';
import DisplayFormTable from './DisplayFormTable';

const AllForms = ({ match, dispatch, formByType }) => {
  const { TabPane } = Tabs;

  const [limit, setLimit] = useState(10);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const val = {
      type: requestTab(),
      _limit: limit,
      _start: current,
      keyword: searchKeyword,
    };

    if (!searchKeyword) {
      delete val?.keyword;
    }

    dispatch({
      type: 'forms/getForms',
      payload: {
        query: val,
      },
    });
  }, [searchKeyword, current, limit, match.path]);

  const requestTitle = () => {
    switch (match.path) {
      case '/all-forms/clientReviewForm':
        return 'Client Review';
      case '/all-forms/mentalCapacityForm':
        return 'Mental Capacity';
      case '/all-forms/movingAndHandlingForm':
        return 'Moving And Handling';
      case '/all-forms/riskAssessmentForm':
        return 'Risk Assessment';
      case '/all-forms/riskAssessmentFormCoshh':
        return 'Risk Assessment- COSHH';
      case '/all-forms/supportPlanForm':
        return 'Support Plan';
      case '/all-forms/telephoneMonitoring':
        return 'Telephone Monitoring';
      default:
        return 'All Forms';
    }
  };

  const requestTab = () => {
    switch (match.path) {
      case '/all-forms/clientReviewForm':
        return 'clientReviewForm';
      case '/all-forms/mentalCapacityForm':
        return 'mentalCapacityForm';
      case '/all-forms/movingAndHandlingForm':
        return 'movingAndHandlingForm';
      case '/all-forms/riskAssessmentForm':
        return 'riskAssessmentForm';
      case '/all-forms/riskAssessmentFormCoshh':
        return 'riskAssessmentFormCoshh';
      case '/all-forms/supportPlanForm':
        return 'supportPlanForm';
      case '/all-forms/telephoneMonitoring':
        return 'telephoneMonitoring';
      default:
        return 'All Forms';
    }
  };

  return (
    <Page
      title={requestTitle()}
      breadcrumbs={
        <Breadcrumbs
          path={[
            {
              name: 'Dashboard',
              path: '/dashboard',
            },
            {
              name: requestTitle(),
              path: '#',
            },
          ]}
        />
      }
    >
      <div className="shadow bg-white mb-8">
        <Tabs
          defaultActiveKey={requestTab}
          onTabClick={(val) => {
            history.replace(`/all-forms/${val}`);
          }}
        >
          <TabPane tab={<span className="mx-3 pl-2">Client Review </span>} key="clientReviewForm">
            <DisplayFormTable
              setLimit={setLimit}
              setCurrent={setCurrent}
              setSearchKeyword={setSearchKeyword}
              current={current}
              formByType={formByType}
              limit={limit}
            />
          </TabPane>
          <TabPane tab={<span className="mx-3">Mental Capacity</span>} key="mentalCapacityForm">
            <DisplayFormTable
              setLimit={setLimit}
              setCurrent={setCurrent}
              setSearchKeyword={setSearchKeyword}
              formByType={formByType}
              current={current}
              limit={limit}
            />
          </TabPane>
          <TabPane
            tab={<span className="mx-3">Moving And Handling </span>}
            key="movingAndHandlingForm"
          >
            <DisplayFormTable
              setLimit={setLimit}
              setCurrent={setCurrent}
              setSearchKeyword={setSearchKeyword}
              formByType={formByType}
              current={current}
              limit={limit}
            />
          </TabPane>
          <TabPane tab={<span className="mx-3">Risk Assessment </span>} key="riskAssessmentForm">
            <DisplayFormTable
              setLimit={setLimit}
              setCurrent={setCurrent}
              setSearchKeyword={setSearchKeyword}
              formByType={formByType}
              current={current}
              limit={limit}
            />
          </TabPane>

          <TabPane
            tab={<span className="mx-3">Risk Assessment- COSHH</span>}
            key="riskAssessmentFormCoshh"
          >
            <DisplayFormTable
              setLimit={setLimit}
              setCurrent={setCurrent}
              setSearchKeyword={setSearchKeyword}
              formByType={formByType}
              current={current}
              limit={limit}
            />
          </TabPane>
          <TabPane tab={<span className="mx-3">Support Plan</span>} key="supportPlanForm">
            <DisplayFormTable
              setLimit={setLimit}
              setCurrent={setCurrent}
              setSearchKeyword={setSearchKeyword}
              formByType={formByType}
              current={current}
              limit={limit}
            />
          </TabPane>

          <TabPane
            tab={<span className="mx-3">Telephone Monitoring</span>}
            key="telephoneMonitoring"
          >
            <DisplayFormTable
              setLimit={setLimit}
              setCurrent={setCurrent}
              setSearchKeyword={setSearchKeyword}
              formByType={formByType}
              current={current}
              limit={limit}
            />
          </TabPane>
        </Tabs>
      </div>
    </Page>
  );
};

export default connect(({ forms }) => ({
  formByType: forms.formByType,
}))(AllForms);
