import '@babel/polyfill';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Global from '@/common/Global';
import App from './modules/app';

/* 公共样式 */
import 'antd-mobile/es/global';
import './styles/index.less';

window.Global = Global;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

if (module.hot) {
  module.hot.accept();
}
