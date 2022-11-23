import '@babel/polyfill';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './modules/app';
import '@/common/inobounce';
import '@/common/AppUtils';

/* 公共样式 */
import './styles/index.less';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

if (module.hot) {
  module.hot.accept();
}
