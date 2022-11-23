import React from 'react';
import { connect } from 'react-redux';
import { Button, Space } from 'antd-mobile';

import './index.less';

import router from '@/common/router';
import Page from '@/components/page';
import { dispatch } from '@/store';

const classPrefix = 'g-home';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = (path) => {
    dispatch('actSetUserInfo', { name: path });
    router.go(path);
  };

  render() {
    const { userInfo } = this.props;
    return (
      <Page className={classPrefix} back={null} title="首页">
        <div>
          <img src={require('@/images/logo.png')} alt="" style={{ width: 48 }} />
          <b>{userInfo.name}</b>
        </div>
        <br />
        <Space>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </Space>
        <div>{process.env.CSS_PREFIX}</div>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
