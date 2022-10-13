import React from 'react';
import Page from '@/components/page';
import './index.less';

const classPrefix = 'g-dashboard';

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Page className={classPrefix} title="dashboard">
        <br />
      </Page>
    );
  }
}

export default Dashboard;
