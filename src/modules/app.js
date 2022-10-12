import React from 'react';
import { HashRouter as Router, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import store from '@/store';
import generateRoutes from '@/common/generateRoutes';

const routes = [
  { path: '/', component: React.lazy(() => import('./home')) },
  { path: '/about', component: React.lazy(() => import('./about')) },
  { path: '/sample', component: React.lazy(() => import('./sample')) },
];

const Routes = () => useRoutes(generateRoutes(routes));

const App = () => (
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <Routes />
      </Router>
    </ConfigProvider>
  </Provider>
);

export default App;
