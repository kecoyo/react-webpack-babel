import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Global from '@/common/Global';
import App from './modules/app';

/* 公共样式 */
import 'antd-mobile/es/global';
import './styles/index.less';

window.Global = Global;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
