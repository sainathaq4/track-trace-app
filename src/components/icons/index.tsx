import { createFromIconfontCN } from '@ant-design/icons';
import { ReactComponent as DeliveredSvg } from './delivered.svg';
import { ReactComponent as TransitSvg } from './transit.svg';
import { ReactComponent as PickupSvg } from './pickup.svg';
import { ReactComponent as ToDeliverSvg } from './to-deliver.svg';

export const DeliveredIcon = () => <DeliveredSvg className="stat-icon delivered" />;
export const TransitIcon = () => <TransitSvg className="stat-icon transit" />;
export const PickupIcon = () => <PickupSvg className="stat-icon pickup" />;
export const ToDeliverIcon = () => <ToDeliverSvg className="stat-icon to-deliver" />;