import { Routes, Route, Navigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { Login } from '../pages/Login';
import { MobileLogin } from '../pages/mobile/auth/MobileLogin';
import { MobileRoutes } from './mobile';
import { DesktopRoutes } from './desktop';
import { useAuth } from '../contexts/AuthContext';
import { getMobileRoute, getDesktopRoute } from '../utils/routes/routeHelpers';

export function AppRoutes() {
  const isMobile = useIsMobile();
  const { user } = useAuth();

  const getDefaultRoute = () => {
    if (!user) return '/login';
    return isMobile ? getMobileRoute(user.role) : getDesktopRoute(user.role);
  };

  return (
    <Routes>
      <Route path="/login" element={isMobile ? <MobileLogin /> : <Login />} />
      {isMobile ? <Route>{MobileRoutes}</Route> : <Route>{DesktopRoutes}</Route>}
      <Route path="/" element={<Navigate to={getDefaultRoute()} replace />} />
      <Route path="*" element={<Navigate to={getDefaultRoute()} replace />} />
    </Routes>
  );
}