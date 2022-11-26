import React from 'react';
import { connect } from 'react-redux';
import { Button, Space, Swiper, Toast } from 'antd-mobile';
import './index.less';
import router from '@/common/router';
import { dispatch } from '@/store';
import Page from '@/components/page';
import Icon from '@/components/icon';
import { Icon as Icon2 } from 'ljmui2';

const classPrefix = 'g-home';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    const ai = require('@/images/ai.svg');
    console.log('🚀 ~ Home ~ constructor ~ ai', ai);
  }

  onClick = (path) => {
    // dispatch('actSetUserInfo', { name: path });
    // router.go(path);
    // Modal.alert('alert');
  };

  render() {
    const { userInfo } = this.props;

    const items = colors.map((color, index) => (
      <Swiper.Item key={index}>
        <div
          className={`${classPrefix}-content`}
          style={{ background: color }}
          onClick={() => {
            Toast.show(`你点击了卡片 ${index + 1}`);
          }}
        >
          {index + 1}
        </div>
      </Swiper.Item>
    ));

    return (
      <Page className={classPrefix} back={null} title="首页">
        <div>
          <img src={require('@/images/logo.png')} alt="" style={{ width: 48 }} />
          <b>{userInfo.name}</b>
          {/* <UserName userid={0} /> */}
        </div>
        <br />
        <Space wrap>
          <Button color="primary" fill="solid">
            Solid
          </Button>
          <Button color="primary" fill="outline">
            Outline
          </Button>
          <Button color="primary" fill="none">
            None
          </Button>
        </Space>
        <div>{process.env.CSS_PREFIX}</div>
        <div>
          <Swiper>{items}</Swiper>
        </div>

        <Space>
          <Icon className={`${classPrefix}-icon`} src={require('@/images/arrow-down.svg')} />
          <Icon className={`${classPrefix}-icon`} src={require('@/images/arrow-down.svg')} />
        </Space>

        <Space>
          <div className={`${classPrefix}-image`} />
          <div className={`${classPrefix}-image`} style={{ background: `url(${require('@/images/02.png')})` }} />
        </Space>
        <img className={`${classPrefix}-image`} src={require('@/images/02.png')} />
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
        <div>
          <Button onClick={() => this.onClick('/')}>home</Button>
          <Button onClick={() => this.onClick('/about')}>about</Button>
          <Button onClick={() => this.onClick('/sample')}>sample</Button>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
