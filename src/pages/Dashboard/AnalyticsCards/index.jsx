/* eslint-disable no-underscore-dangle */
import { Col, Row, Avatar, Button } from 'antd';
import { connect, Link } from 'umi';
import React from 'react';
import { getInitials } from '@/utils/common';
import Icon0 from '@/assets/icons/roundIcon.svg';
import Icon1 from '@/assets/icons/round1.svg';
import Icon2 from '@/assets/icons/round2.svg';
import { PlusSquareOutlined } from '@ant-design/icons';

const AnalyticsCards = ({ currentUser, stats }) => {
  const cards = [
    { name: 'Client Review Form', key: 'clientReviewForm', icon: Icon0 },
    { name: 'Mental Capacity Form', key: 'mentalCapacityForm', icon: Icon1 },
    { name: 'Moving And Handling Form', key: 'movingAndHandlingForm', icon: Icon2 },
    { name: 'Risk Assessment Form', key: 'riskAssessmentForm', icon: Icon0 },
    { name: 'Risk Assessment Form Coshh', key: 'riskAssessmentFormCoshh', icon: Icon1 },
    { name: 'Support Plan Form', key: 'supportPlanForm', icon: Icon2 },
    { name: 'Telephone Monitoring Form', key: 'telephoneMonitoring', icon: Icon0 },
  ];

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold text-gray-700 mb-4">
          <Avatar
            size="large"
            className="bg-blue-800 w-8 uppercase"
            style={{
              backgroundColor: '#FC8019',
            }}
          >
            <div className="text-lg">{getInitials(currentUser?.name)}</div>
          </Avatar>
          <span className="text-gray-900 ml-2"> Hi {currentUser?.name}, Welcome Back!</span>
        </div>
        <div className="mt-1">
          <Link to="/service-user/create">
            <Button type="primary" size="medium">
              Create Service User <PlusSquareOutlined />
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <Row gutter={[24, 24]} className="">
          {cards.map((card) => (
            <Col key={card} xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="shadow rounded-lg bg-white py-4  px-4 flex items-center justify-between">
                <div className="">
                  <div className="text-3xl font-bold">
                    {(stats && stats.find((stat) => stat?._id === card.key)?.count) || 0}
                  </div>
                  <div className="text-sm text-gray-900 font-semibold">{card.name}</div>
                </div>
                <div className="">
                  <img src={card.icon} alt="icon" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default connect(({ user, forms }) => ({
  currentUser: user.currentUser,
  stats: forms.stats,
}))(AnalyticsCards);
