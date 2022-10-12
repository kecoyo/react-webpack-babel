import React from 'react';
import { connect } from 'react-redux';
import { Button, Space } from 'antd';

import './index.less';

import router from '@/common/router';
import Page from '@/components/page';
import { dispatch } from '@/store';

const classPrefix = 'g-login';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogin = () => {
    dispatch('actSetUserInfo', {
      id: 1,
      name: 'admin',
    });
    router.go('/');
  };

  render() {
    return (
      <Page className={classPrefix}>
        <Space direction="vertical">
          <img src={require('@/images/logo.png')} alt="" />
          <Button onClick={this.onLogin}>登录</Button>
        </Space>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
