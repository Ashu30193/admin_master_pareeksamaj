/**
 *@BaseView - The Purpose of this component is that user can update its general  account information here
 *
 */
import React from 'react';
import { connect } from 'umi';
import CardSection from '@/components/CardSection';
import Breadcrumbs from '@/components/BreadCrumbs';
import Page from '@/components/Page';
import BasicDetailsForm from './BasicDetailsForm';

const UserProfile = () => {
  return (
    <div className="container mx-auto">
      <Page
        title="Profile"
        breadcrumbs={
          <Breadcrumbs
            path={[
              {
                name: 'Dashboard',
                path: '/dashboard',
              },
              {
                name: 'Profile',
                path: '/user-profile',
              },
            ]}
          />
        }
      >
        <CardSection
          noPadding
          className="mt-4"
          leftContent={
            <div className="pr-8 ">
              <div className="text-blue-900 font-semibold text-xl">Your details</div>
              <div className="text-gray-600">
                <p className="mt-4">Fill your details like name and password.</p>
              </div>
            </div>
          }
          rightContent={<BasicDetailsForm />}
        />
      </Page>
    </div>
  );
};

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(UserProfile);
