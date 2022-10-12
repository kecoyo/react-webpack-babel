import React from 'react';
import PropTypes from 'prop-types';
import { withNativeProps } from 'ljmui2';
import './index.less';

const classPrefix = 'g-svg';

const SVG = React.forwardRef((props, ref) => {
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

SVG.propTypes = {
  src: PropTypes.object.isRequired,
};

export default SVG;
