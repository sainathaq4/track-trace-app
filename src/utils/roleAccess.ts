import { MenuRole } from './menu/types';
import { ROUTES } from './routes';

// Define default landing pages for each role
export const getDefaultRoute = (role: MenuRole): string => {
  const defaultRoutes: Record<MenuRole, string> = {
    warehouse: ROUTES.warehouse.deliveries,
    yard: ROUTES.yard.ccuListing,
    quayside: ROUTES.quayside.shipments,
    voyage: ROUTES.voyage.listing,
    offshore: ROUTES.offshore.shipments,
    admin: ROUTES.admin.ccuTypes
  };
  
  return defaultRoutes[role] || ROUTES.auth.login;
};

// Define allowed routes for each role
export const getAllowedRoutes = (role: MenuRole): string[] => {
  const routeMap: Record<MenuRole, string[]> = {
    warehouse: [
      ROUTES.warehouse.deliveries,
      ROUTES.warehouse.workOrders,
      ROUTES.warehouse.ccuManagement,
      ROUTES.warehouse.mobile
    ],
    yard: [
      ROUTES.yard.ccuListing,
      ROUTES.yard.workOrders,
      ROUTES.yard.mobile
    ],
    quayside: [
      ROUTES.quayside.shipments,
      ROUTES.quayside.voyages,
      ROUTES.quayside.mobile
    ],
    voyage: [
      ROUTES.voyage.listing,
      ROUTES.voyage.shipments,
      ROUTES.voyage.mobile
    ],
    offshore: [
      ROUTES.offshore.shipments,
      ROUTES.offshore.returns,
      ROUTES.offshore.mobile
    ],
    admin: [
      ROUTES.admin.ccuTypes,
      ROUTES.admin.itemTypes,
      ROUTES.admin.locations,
      ROUTES.admin.vesselTypes
    ]
  };

  return routeMap[role] || [];
};