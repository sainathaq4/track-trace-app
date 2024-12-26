// Define all route paths in a centralized location
export const ROUTES = {
  auth: {
    login: '/login'
  },
  warehouse: {
    deliveries: '/warehouse/deliveries',
    workOrders: '/warehouse/work-orders',
    ccuManagement: '/warehouse/ccu',
    mobile: '/mobile/warehouse'
  },
  yard: {
    ccuListing: '/yard/ccu-listing',
    workOrders: '/yard/work-orders',
    mobile: '/mobile/yard'
  },
  quayside: {
    shipments: '/quayside/shipments',
    voyages: '/quayside/voyages',
    mobile: '/mobile/quayside'
  },
  voyage: {
    listing: '/voyage/listing',
    shipments: '/voyage/shipments',
    mobile: '/mobile/voyage'
  },
  offshore: {
    shipments: '/offshore/shipments',
    returns: '/offshore/returns',
    mobile: '/mobile/offshore'
  },
  admin: {
    ccuTypes: '/admin/ccu-types',
    itemTypes: '/admin/item-types',
    locations: '/admin/locations',
    vesselTypes: '/admin/vessel-types'
  }
} as const;