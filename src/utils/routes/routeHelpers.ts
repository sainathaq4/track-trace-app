import { MenuRole } from '../../types/auth';
import { ROUTES } from '../menu/routes';

export const getMobileRoute = (role: MenuRole): string => {
  const mobileRoutes: Record<MenuRole, string> = {
    warehouse: ROUTES.warehouse.mobile,
    yard: ROUTES.yard.mobile,
    quayside: ROUTES.quayside.mobile,
    voyage: ROUTES.voyage.mobile,
    offshore: ROUTES.offshore.mobile,
    admin: ROUTES.admin.ccuTypes,
    guest: ROUTES.auth.dashboard
  };
  
  return mobileRoutes[role] || ROUTES.auth.login;
};

export const getDesktopRoute = (role: MenuRole): string => {
  const desktopRoutes: Record<MenuRole, string> = {
    warehouse: ROUTES.warehouse.deliveries,
    yard: ROUTES.yard.ccuListing,
    quayside: ROUTES.quayside.shipments,
    voyage: ROUTES.voyage.listing,
    offshore: ROUTES.offshore.shipments,
    admin: ROUTES.admin.ccuTypes,
    guest: ROUTES.auth.dashboard
  };
  
  return desktopRoutes[role] || ROUTES.auth.login;
};