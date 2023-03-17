import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import Brands from './pages/Brands/Brands';
import Categories from './pages/categories/Categories';
import Employees from './pages/employees/Employees';
import Home from './pages/home/Home';
import MyShop from './pages/myShop/MyShop';
import Products from './pages/products/Products';
import Services from './pages/services/Services';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    // children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes],
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/brands', element: <Brands /> },
      { path: '/employees', element: <Employees /> },
      { path: '/categories', element: <Categories /> },
      { path: '/services', element: <Services /> },
      { path: '/myShop', element: <MyShop /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  // ...sessionRoutes,
  // { path: '/', element: <Navigate to="dashboard/default" /> },
  // { path: '/', element: <Home /> },
  // { path: '/products', element: <Products /> },
  // { path: '/brands', element: <Brands /> },
  // { path: '/employees', element: <Employees /> },
  // { path: '/categories', element: <Categories /> },
  // { path: '/services', element: <Services /> },
  // { path: '/myShop', element: <MyShop /> },
  // { path: '*', element: <NotFound /> },
];

export default routes;
