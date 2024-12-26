import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { MenuRole } from '../types/auth';
import { getDefaultRoute } from '../utils/navigation';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: MenuRole[];
}

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Use the getDefaultRoute function to determine where to redirect
    return <Navigate to={getDefaultRoute(user.role)} replace />;
  }

  return <>{children}</>;
};