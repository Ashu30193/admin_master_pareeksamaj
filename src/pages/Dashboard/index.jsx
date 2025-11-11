import React, { useEffect } from 'react';
import { connect } from 'umi';
import AnalyticsCards from './AnalyticsCards';
import styles from './index.less';

const DashBoard = ({ dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'forms/getStats',
    });
  }, []);

  return (
    <div className="container mx-auto">
      <div className={styles.DashBoard}>
        <div className="mb-8">
          <AnalyticsCards />
        </div>
      </div>
    </div>
  );
};

export default connect(({ user }) => ({
  user: user.currentUser,
}))(DashBoard);
