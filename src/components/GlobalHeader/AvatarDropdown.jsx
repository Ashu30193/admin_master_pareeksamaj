import { getIntials } from '@/utils/utils';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import React from 'react';
import { connect } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

class AvatarDropdown extends React.Component {
  onMenuClick = (event) => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }
      return false;
    }
    return false;
  };

  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
    } = this.props;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="user-profile">
          <div className="flex justify-center">
            <Avatar size={80} className="text-center uppercase" style={{ background: '#FC8019' }}>
              {currentUser?.name && getIntials(currentUser?.name)}
            </Avatar>
          </div>
          <div className="mt-2 text-center">
            <div className="font-medium text-blue-900 text-lg capitalize">{currentUser?.name}</div>
            <div className="text-xs text-gray-700">{currentUser?.email}</div>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <LogoutOutlined />
          Logout
        </Menu.Item>
      </Menu>
    );

    return currentUser && currentUser?.name ? (
      <HeaderDropdown trigger="click" overlay={menuHeaderDropdown}>
        <div className="flex items-center cursor-pointer uppercase">
          <Avatar style={{ background: '#FC8019' }}>
            {currentUser?.name && getIntials(currentUser?.name)}
          </Avatar>
          <div className="ml-2">
            <div className="font-medium text-blue-900 text-base capitalize">
              {currentUser?.name} <DownOutlined />
            </div>
          </div>
        </div>
      </HeaderDropdown>
    ) : (
      <span className={`${styles.action} ${styles.account}`}>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);
