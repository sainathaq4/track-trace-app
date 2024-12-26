import { DeliveryList } from '../../pages/warehouse/DeliveryList';
import { CCUList } from '../../pages/yard/CCUList';
import { ShipmentList } from '../../pages/quayside/ShipmentList';
import { VoyageList } from '../../pages/voyage/VoyageList';
import { VoyageShipmentList } from '../../pages/voyage/VoyageShipmentList';
import { OffshoreShipmentList } from '../../pages/offshore/OffshoreShipmentList';
import { OffshoreReturnList } from '../../pages/offshore/OffshoreReturnList';
import { CCUTypeConfig } from '../../pages/config/CCUTypeConfig';
import { ItemTypeConfig } from '../../pages/config/ItemTypeConfig';
import { LocationConfig } from '../../pages/config/LocationConfig';
import { VesselTypeConfig } from '../../pages/config/VesselTypeConfig';
import { PlanList } from '../../pages/plan/PlanList';
import { ProfileSettings } from '../../pages/profile/ProfileSettings';
import { Dashboard } from '../../pages/Dashboard';
import { ChatsList } from '../../pages/guest/ChatsList';
import { NotificationsList } from '../../pages/guest/NotificationsList';
import { HelpSupport } from '../../pages/guest/HelpSupport';
import { DeliveryListGuest } from '../../pages/guest/DeliveryListGuest';
import type { MenuRole } from '../../types/auth';

interface RouteConfig {
  path: string;
  Component: () => JSX.Element;
  roles: MenuRole[];
}

const nonAdminRoles: MenuRole[] = ['warehouse', 'yard', 'quayside', 'voyage', 'offshore', 'guest'];

export const desktopRouteConfig: RouteConfig[] = [
  // Dashboard route for all users
  {
    path: '/dashboard',
    Component: Dashboard,
    roles: [...nonAdminRoles, 'admin']
  },
  // Guest routes
  {
    path: '/delivery/listing',
    Component: DeliveryListGuest,
    roles: ['guest']
  },
  // Rest of the routes...
  {
    path: '/yard/ccu-listing',
    Component: CCUList,
    roles: ['yard']
  },
  {
    path: '/quayside/shipments',
    Component: ShipmentList,
    roles: ['quayside']
  },
  {
    path: '/voyage/listing',
    Component: VoyageList,
    roles: ['voyage']
  },
  {
    path: '/voyage/shipments',
    Component: VoyageShipmentList,
    roles: ['voyage']
  },
  {
    path: '/chats',
    Component: ChatsList,
    roles: nonAdminRoles
  },
  {
    path: '/notifications',
    Component: NotificationsList,
    roles: nonAdminRoles
  },
  {
    path: '/help',
    Component: HelpSupport,
    roles: nonAdminRoles
  },
  {
    path: '/plan/listing',
    Component: PlanList,
    roles: nonAdminRoles
  },
  {
    path: '/profile/settings',
    Component: ProfileSettings,
    roles: [...nonAdminRoles, 'admin']
  },
  {
    path: '/admin/ccu-types',
    Component: CCUTypeConfig,
    roles: ['admin']
  },
  {
    path: '/admin/item-types',
    Component: ItemTypeConfig,
    roles: ['admin']
  },
  {
    path: '/admin/locations',
    Component: LocationConfig,
    roles: ['admin']
  },
  {
    path: '/admin/vessel-types',
    Component: VesselTypeConfig,
    roles: ['admin']
  }
];