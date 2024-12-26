import type { MenuRole } from '../../types/auth';
import type { MenuItem } from '../../types/menu';
import { menuConfig } from './menuConfig';

const { routes, icons } = menuConfig;

export const getMobileMenuItems = (role: MenuRole): MenuItem[] => {
  const menuMap: Record<MenuRole, MenuItem[]> = {
    warehouse: [
      { key: routes.warehouse.mobile, icon: icons.warehouse, label: 'Work Orders' },
    ],
    yard: [
      { key: routes.yard.mobile, icon: icons.yard, label: 'Work Orders' },
    ],
    quayside: [
      { key: routes.quayside.mobile, icon: icons.quayside, label: 'Shipments' },
    ],
    voyage: [
      { key: routes.voyage.mobile, icon: icons.voyage, label: 'Voyage Planning' },
    ],
    offshore: [
      { key: routes.offshore.mobile, icon: icons.offshore, label: 'Receiving' },
    ],
    admin: [], // Admin uses desktop view
    guest: [
      { key: routes.auth.dashboard, icon: icons.dashboard, label: 'Dashboard' },
      { key: routes.plan.listing, icon: icons.plan, label: 'Plans' },
      { key: routes.delivery.listing, icon: icons.delivery, label: 'Deliveries' },
      { key: routes.chats.list, icon: icons.chat, label: 'Chats' },
      { key: routes.notifications.list, icon: icons.notification, label: 'Notifications' },
      { key: routes.help.support, icon: icons.help, label: 'Help & Support' },
    ]
  };

  return menuMap[role] || [];
};