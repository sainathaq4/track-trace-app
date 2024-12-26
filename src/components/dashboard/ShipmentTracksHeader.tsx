import { Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';

export const ShipmentTracksHeader = () => {
  return (
    <div className="shipment-tracks-header">
      <Space align="center">
        <h2>Shipment Tracks</h2>
        <RightOutlined />
      </Space>
      <Space className="filter-buttons">
        <button className="filter-button active">Today</button>
        <button className="filter-button">This Week</button>
        <button className="filter-button">This Month</button>
        <button className="filter-button">All</button>
      </Space>
    </div>
  );
};