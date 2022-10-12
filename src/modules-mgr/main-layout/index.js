import React from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { HomeOutlined, UserOutlined, AppstoreOutlined, DownOutlined } from '@ant-design/icons';
import _ from 'lodash';

import router from '@/common/router';

import './index.less';
import { dispatch } from '@/store';

const { Header, Sider, Content } = Layout;

const classPrefix = 'g-main-layout';

class MainLayout extends React.PureComponent {
  sliderMenus = [
    { key: '/dashboard', label: '首页', icon: <HomeOutlined /> }, //
    { key: '/about', label: '关于我们', icon: <AppstoreOutlined /> },
    { key: '/swiper-demo', label: 'Swiper测试', icon: <AppstoreOutlined /> },
  ];

  constructor(props) {
    super(props);
    this.state = {
      activeKey: window.location.hash.substr(1),
    };
  }

  onMenuSelect = (e) => {
    const activeKey = e.key;
    router.go(`${activeKey}?id=1`, {
      state: {
        type: 2,
      },
    });
  };

  onLogoff = () => {
    dispatch('actClearUserInfo');
    router.go('/login');
  };

  renderUserMenu = () => {
    const items = [{ key: 'quit', label: '退出', onClick: this.onLogoff }];
    return <Menu items={items} />;
  };

  render() {
    const { activeKey } = this.state;
    const { userInfo } = this.props;
    return (
      <Layout className={classPrefix}>
        <Header className={`${classPrefix}-header`}>
          <div className={`${classPrefix}-logo`}>react-webpack-babel</div>
          <div className={`${classPrefix}-user-info`}>
            <Avatar icon={<UserOutlined />} />
            <Dropdown overlay={this.renderUserMenu()} trigger={['click']}>
              <div className={`${classPrefix}-user-name`}>
                <span>{_.get(userInfo, 'name')}</span>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Layout className={`${classPrefix}-sider-layout`}>
          <Sider theme="light" trigger={null}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={[activeKey]} items={this.sliderMenus} onSelect={this.onMenuSelect} />
          </Sider>
          <Content className={`${classPrefix}-content`}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
