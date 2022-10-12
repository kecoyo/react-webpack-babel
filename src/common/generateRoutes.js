import React, { Suspense } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import router from '@/common/router';

// 路由处理方式
// eslint-disable-next-line no-shadow
const generateRoutes = (routes) => {
  const navigate = useNavigate(); // navigate(to, {replace, state})
  const location = useLocation();
  const params = useParams(); // <Route path="/:path" />
  Object.assign(router, { navigate, location, params });

  return routes.map((item) => {
    if (item.children) {
      item.children = generateRoutes(item.children);
    }
    if (item.component) {
      item.element = (
        <Suspense fallback={null}>
          <item.component />
        </Suspense>
      );
    }
    return item;
  });
};

export default generateRoutes;
