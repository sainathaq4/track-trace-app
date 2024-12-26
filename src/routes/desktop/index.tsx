import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { desktopRouteConfig } from './config';

export const DesktopRoutes = desktopRouteConfig.map(({ path, Component, roles }) => (
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