import type { MenuRole } from '../../types/auth';
import type { MenuItem } from '../../types/menu';
import { menuConfig } from './menuConfig';

const { routes, icons } = menuConfig;

const getCommonMenuItems = (): MenuItem[] => [
  { key: routes.chats.list, icon: icons.chat, label: 'Chats' },
  { key: routes.notifications.list, icon: icons.notification, label: 'Notifications' },
  { key: routes.help.support, icon: icons.help, label: 'Help & Support' },
];

export const getDesktopMenuItems = (role: MenuRole): MenuItem[] => {
  const commonItems = getCommonMenuItems();
  
  const menuMap: Record<MenuRole, MenuItem[]> = {
    warehouse: [
      { key: routes.auth.dashboard, icon: icons.dashboard, label: 'Dashboard' },
      { key: routes.warehouse.deliveries, icon: icons.warehouse, label: 'Delivery Listing' },
      { key: routes.plan.listing, icon: icons.plan, label: 'Plans' },
      ...commonItems,
      { key: routes.profile.settings, icon: icons.profile, label: 'Profile Settings' },
    ],
    yard: [
      { key: routes.auth.dashboard, icon: icons.dashboard, label: 'Dashboard' },
      { key: routes.yard.ccuListing, icon: icons.yard, label: 'CCU Listing' },
      { key: routes.plan.listing, icon: icons.plan, label: 'Plans' },
      ...commonItems,
      { key: routes.profile.settings, icon: icons.profile, label: 'Profile Settings' },
    ],
    quayside: [
      { key: routes.auth.dashboard, icon: icons.dashboard, label: 'Dashboard' },
      { key: routes.quayside.shipments, icon: icons.quayside, label: 'Shipment Listing' },
      { key: routes.plan.listing, icon: icons.plan, label: 'Plans' },
      ...commonItems,
      { key: routes.profile.settings, icon: icons.profile, label: 'Profile Settings' },
    ],
    voyage: [
      { key: routes.auth.dashboard, icon: icons.dashboard, label: 'Dashboard' },
      { key: routes.voyage.listing, icon: icons.voyage, label: 'Voyage Planning' },
      { key: routes.voyage.shipments, icon: icons.voyage, label: 'Shipments' },
      { key: routes.plan.listing, icon: icons.plan, label: 'Plans' },
      ...commonItems,
      { key: routes.profile.settings, icon: icons.profile, label: 'Profile Settings' },
    ],
    offshore: [
      { key: routes.auth.dashboard, icon: icons.dashboard, label: 'Dashboard' },
      { key: routes.offshore.shipments, icon: icons.offshore, label: 'Shipment Listing' },
      { key: routes.offshore.returns, icon: icons.offshore, label: 'Returns' },
      { key: routes.plan.listing, icon: icons.plan, label: 'Plans' },
      ...commonItems,
      { key: routes.profile.settings, icon: icons.profile, label: 'Profile Settings' },
    ],
    admin: [
      { key: routes.auth.dashboard, icon: icons.dashboard, label: 'Dashboard' },
      { key: routes.admin.ccuTypes, icon: icons.config, label: 'CCU Types' },
      { key: routes.admin.itemTypes, icon: icons.config, label: 'Item Types' },
      { key: routes.admin.locations, icon: icons.config, label: 'Locations' },
      { key: routes.admin.vesselTypes, icon: icons.config, label: 'Vessel Types' },
      { key: routes.profile.settings, icon: icons.profile, label: 'Profile Settings' },
    ],
    guest: [
      { key: routes.auth.dashboard, icon: icons.dashboard, label: 'Dashboard' },
      { key: routes.plan.listing, icon: icons.plan, label: 'Plans' },
      { key: routes.delivery.listing, icon: icons.delivery, label: 'Deliveries' },
      ...commonItems,
      { key: routes.profile.settings, icon: icons.profile, label: 'Profile Settings' },
    ]
  };

  return menuMap[role] || [];
};