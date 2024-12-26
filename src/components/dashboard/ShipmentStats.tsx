import { Row, Col } from 'antd';
import { DeliveredIcon, TransitIcon, PickupIcon, ToDeliverIcon } from '../icons';
import { StatCard } from './StatCard';
import type { ShipmentStat } from '../../types/dashboard';

const stats: ShipmentStat[] = [
  { 
    icon: <DeliveredIcon />, 
    title: 'Shipments - Delivered', 
    count: 429, 
    unit: 'CCU', 
    color: '#ee4d2d',
    bgColor: 'rgba(238, 77, 45, 0.1)'
  },
  { 
    icon: <TransitIcon />, 
    title: 'Shipments - in Transit', 
    count: 213, 
    unit: 'CCU', 
    color: '#faad14',
    bgColor: 'rgba(250, 173, 20, 0.1)'
  },
  { 
    icon: <PickupIcon />, 
    title: 'Shipments - to be picked', 
    count: 127, 
    unit: 'CCU', 
    color: '#52c41a',
    bgColor: 'rgba(82, 196, 26, 0.1)'
  },
  { 
    icon: <ToDeliverIcon />, 
    title: 'Shipments - to be delivered', 
    count: 319, 
    unit: 'CCU', 
    color: '#1890ff',
    bgColor: 'rgba(24, 144, 255, 0.1)'
  }
];

export const ShipmentStats = () => (
  <Row gutter={[24, 24]}>
    {stats.map((stat, index) => (
      <Col xs={24} sm={12} lg={6} key={index}>
        <StatCard {...stat} />
      </Col>
    ))}
  </Row>
);