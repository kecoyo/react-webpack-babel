import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from 'antd-mobile';
import { withNativeProps } from 'ljmui';
import _ from 'lodash';

import './index.less';

import router from '@/common/router';

const classPrefix = 'g-page';

class Page extends React.PureComponent {
  onBack = () => {
    router.goBack();
  };

  render() {
    const { title, children } = this.props;
    const navBarProps = _.pick(this.props, ['back', 'backArrow', 'left', 'onBack', 'right']);
    return withNativeProps(
      this.props,
      <div className={classPrefix}>
        {title && (
          <NavBar className={`${classPrefix}-header`} onBack={this.onBack} {...navBarProps}>
            {title}
          </NavBar>
        )}
        <div className={`${classPrefix}-content`}>{children}</div>
      </div>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Page.defaultProps = {};

export default Page;
