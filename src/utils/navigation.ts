import type { MenuRole } from '../types/auth';

export const getDefaultRoute = (role: MenuRole): string => {
  const defaultRoutes: Record<MenuRole, string> = {
    warehouse: '/dashboard',
    yard: '/dashboard',
    quayside: '/dashboard',
    voyage: '/dashboard',
    offshore: '/dashboard',
    admin: '/admin/ccu-types',
    guest: '/dashboard'
  };
  
  return defaultRoutes[role] || '/login';
};