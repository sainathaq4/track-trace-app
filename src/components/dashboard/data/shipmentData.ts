import { 
  DeliveredIcon, 
  TransitIcon, 
  PickupIcon, 
  ToDeliverIcon 
} from '../icons';

export const shipmentData = [
  {
    id: 1,
    icon: <DeliveredIcon />,
    title: 'Shipments - Delivered',
    count: 429,
    unit: 'CCU',
    color: '#ee4d2d',
    bgColor: 'rgba(238, 77, 45, 0.1)'
  },
  {
    id: 2,
    icon: <TransitIcon />,
    title: 'Shipments - in Transit',
    count: 213,
    unit: 'CCU',
    color: '#faad14',
    bgColor: 'rgba(250, 173, 20, 0.1)'
  },
  {
    id: 3,
    icon: <PickupIcon />,
    title: 'Shipments - to be picked',
    count: 127,
    unit: 'CCU',
    color: '#52c41a',
    bgColor: 'rgba(82, 196, 26, 0.1)'
  },
  {
    id: 4,
    icon: <ToDeliverIcon />,
    title: 'Shipments - to be delivered',
    count: 319,
    unit: 'CCU',
    color: '#1890ff',
    bgColor: 'rgba(24, 144, 255, 0.1)'
  }
];