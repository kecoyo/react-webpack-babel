import React from 'react';
import { Avatar } from 'antd-mobile';

import './index.less';

import Page from '@/components/page';
import SVG from '@/components/svg';
// import { ProgressModal } from 'ljmui2';

const classPrefix = 'g-about';

class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    // ProgressModal.start({ message: 'sdfafafsd' });
  };

  render() {
    return (
      <Page className={classPrefix} title="About">
        <Avatar src="" />
        <i className="fa fa-cogs fa-5x" onClick={this.onClick} />
        <div>
          <SVG src={require('@/images/arrow-up.svg')} style={{ width: 48 }} />
          <SVG src={require('@/images/arrow-down.svg')} style={{ width: 48 }} />
        </div>
      </Page>
    );
  }
}

export default About;
