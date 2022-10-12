import React from 'react';
import { Toast } from 'antd-mobile';
import { AntOutline } from 'antd-mobile-icons';

import './index.less';

import Page from '@/components/page';

const classPrefix = 'g-sample';

class Sample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  onClick = () => {
    Toast.show('onClick');
  };

  render() {
    return (
      <Page className={classPrefix} title="Sample">
        <AntOutline fontSize={24} onClick={this.onClick} />
      </Page>
    );
  }
}

export default Sample;
