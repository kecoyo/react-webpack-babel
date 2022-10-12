import React from 'react';
import { HashRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import store from '@/store';
import generateRoutes from '@/common/generateRoutes';

const routes = [
  { path: '/login', component: React.lazy(() => import('./login')) },
  {
    path: '/',
    component: React.lazy(() => import('./main-layout')),
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', component: React.lazy(() => import('./dashboard')), auth: true },
      { path: '/about', component: React.lazy(() => import('./about')), auth: true },
      { path: '/swiper-demo', component: React.lazy(() => import('./swiper-demo')), auth: true },
    ],
  },
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
