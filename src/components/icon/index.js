import React from 'react';
import PropTypes from 'prop-types';
import { withNativeProps } from 'ljmui2';
import './index.less';

const classPrefix = 'ljmui2-icon';

const Icon = React.forwardRef((props, ref) => {
  console.log("🚀 ~ Icon ~ props", props);
  let element = props.src.default || props.src; // esModule: true

  if (!element) {
    return null;
  }

  return withNativeProps(
    props,
    <svg ref={ref} className={classPrefix} viewBox={element.viewBox}>
      <use xlinkHref={`#${element.id}`} />
    </svg>
  );
});

Icon.propTypes = {
  src: PropTypes.object.isRequired,
};

export default Icon;
