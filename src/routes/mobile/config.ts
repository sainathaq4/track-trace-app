import { WarehouseYardMobile } from '../../pages/mobile/WarehouseYardMobile';
import { YardMobileView } from '../../pages/mobile/YardMobileView';
import { QuaysideMobileView } from '../../pages/mobile/QuaysideMobileView';
import { VoyageMobileView } from '../../pages/mobile/VoyageMobileView';
import { OffshoreMobileView } from '../../pages/mobile/OffshoreMobileView';
import type { MenuRole } from '../../types/auth';

interface RouteConfig {
  path: string;
  Component: () => JSX.Element;
  roles: MenuRole[];
}

export const mobileRouteConfig: RouteConfig[] = [
  {
    path: '/mobile/warehouse',
    Component: WarehouseYardMobile,
    roles: ['warehouse']
  },
  {
    path: '/mobile/yard',
    Component: YardMobileView,
    roles: ['yard']
  },
  {
    path: '/mobile/quayside',
    Component: QuaysideMobileView,
    roles: ['quayside']
  },
  {
    path: '/mobile/voyage',
    Component: VoyageMobileView,
    roles: ['voyage']
  },
  {
    path: '/mobile/offshore',
    Component: OffshoreMobileView,
    roles: ['offshore']
  }
];