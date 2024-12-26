import { Card, Space, Radio } from 'antd';
import { TrackOrderTable } from './TrackOrderTable';
import { ShipmentTrackerHeader } from './ShipmentTrackerHeader';

export const ShipmentTracker = () => {
  return (
    <Card className="shipment-tracker-card">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <ShipmentTrackerHeader />
        <TrackOrderTable />
      </Space>
    </Card>
  );
};