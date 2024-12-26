import { Space, Typography, Row, Col, Card } from 'antd';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
import { ShipmentStats } from '../components/dashboard/ShipmentStats';
import { ShipmentTracker } from '../components/dashboard/ShipmentTracker';
import { useAuth } from '../contexts/AuthContext';

const { Title } = Typography;

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <Space direction="vertical" size={24} style={{ width: '100%' }}>
        <div className="dashboard-header">
          <div className="user-welcome">
            <Title level={3}>Hello {user?.fullName || user?.username} 👋</Title>
            <p>Check out latest update!</p>
          </div>
        </div>

        <div className="shipment-section">
          <div className="section-header">
            <Title level={4}>Shipment Tracks →</Title>
          </div>
          <ShipmentStats />
        </div>

        <div className="track-section">
          <ShipmentTracker />
        </div>
      </Space>
    </DashboardLayout>
  );
};