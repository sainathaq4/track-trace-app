import { Card } from 'antd';
import { ShipmentIcon } from './icons/ShipmentIcon';

interface ShipmentCardProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  unit: string;
  color: string;
  bgColor: string;
}

export const ShipmentCard = ({ 
  icon, 
  title, 
  count, 
  unit, 
  color, 
  bgColor 
}: ShipmentCardProps) => {
  return (
    <Card className="shipment-card">
      <div className="icon-wrapper" style={{ backgroundColor: bgColor }}>
        <div className="icon" style={{ color }}>{icon}</div>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <div className="stats">
          <span className="count">{count}</span>
          <span className="unit">{unit}</span>
        </div>
      </div>
    </Card>
  );
};