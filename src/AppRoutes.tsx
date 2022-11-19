import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './core/components/PrivateRoute';

// Admin
const Admin = lazy(() => import('./admin/pages/Admin'));
const Dashboard = lazy(() => import('./admin/pages/Dashboard'));
const Faq = lazy(() => import('./admin/pages/Faq'));
const HelpCenter = lazy(() => import('./admin/pages/HelpCenter'));
const Home = lazy(() => import('./admin/pages/Home'));
const Profile = lazy(() => import('./admin/pages/Profile'));
const ProfileActivity = lazy(() => import('./admin/pages/ProfileActivity'));
const ProfileInformation = lazy(
  () => import('./admin/pages/ProfileInformation'),
);
const ProfilePassword = lazy(() => import('./admin/pages/ProfilePassword'));

// Auth
const ForgotPassword = lazy(() => import('./auth/pages/ForgotPassword'));
const ForgotPasswordSubmit = lazy(
  () => import('./auth/pages/ForgotPasswordSubmit'),
);
const Login = lazy(() => import('./auth/pages/Login'));
const Register = lazy(() => import('./auth/pages/Register'));

// Calendar
const CalendarApp = lazy(() => import('./calendar/pages/CalendarApp'));

// Core
const Forbidden = lazy(() => import('./core/pages/Forbidden'));
const NotFound = lazy(() => import('./core/pages/NotFound'));
const UnderConstructions = lazy(
  () => import('./core/pages/UnderConstructions'),
);

// Landing
// const Landing = lazy(() => import("./landing/pages/Landing"));

// Users
const UserManagement = lazy(() => import('./users/pages/UserManagement'));

// Products(Wallets)
const ProductManagement = lazy(
  () => import('./products/pages/ProductManagement'),
);
const login = 'login';

function AppRoutes() {
  return (
    <Routes location={process.env.PUBLIC_URL}>
      <Route path={`${login}/*`} element={<Login />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Routes>
              <Route path="admin" element={<Admin />}>
                <Route path="" element={<Home />} />
                <Route path="calendar" element={<CalendarApp />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="faq" element={<Faq />} />
                <Route path="help" element={<HelpCenter />} />
                <Route path="profile" element={<Profile />}>
                  <Route path="" element={<ProfileActivity />} />
                  <Route path="information" element={<ProfileInformation />} />
                  <Route path="password" element={<ProfilePassword />} />
                </Route>
                <Route
                  path="projects"
                  element={
                    <Navigate
                      to={`${process.env.PUBLIC_URL}/under-construction`}
                      replace
                    />
                  }
                />
                <Route
                  path="product-management"
                  element={<ProductManagement />}
                />
                <Route path="user-management" element={<UserManagement />} />
              </Route>
            </Routes>
          </PrivateRoute>
        }
      />

      <Route path="forgot-password/*" element={<ForgotPassword />} />
      <Route path="forgot-password-submit" element={<ForgotPasswordSubmit />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path="under-construction" element={<UnderConstructions />} />
      <Route path="403" element={<Forbidden />} />
      <Route path="404" element={<NotFound />} />
      <Route
        path="*"
        element={<Navigate to={`/${process.env.PUBLIC_URL}/404`} replace />}
      />
    </Routes>
  );
}

export default AppRoutes;
