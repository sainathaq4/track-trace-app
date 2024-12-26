import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { mobileRouteConfig } from './config';

export const MobileRoutes = mobileRouteConfig.map(({ path, Component, roles }) => (
  <Route
    key={path}
    path={path}
    element={
      <ProtectedRoute allowedRoles={roles}>
        <Component />
      </ProtectedRoute>
    }
  />
));