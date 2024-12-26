import { useState } from 'react';
import { Space } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ShipmentStats } from '../../components/dashboard/ShipmentStats';
import { ShipmentTracksHeader } from '../../components/dashboard/ShipmentTracksHeader';
import { TrackOrderHeader } from '../../components/dashboard/TrackOrderHeader';
import { TrackOrderTable } from '../../components/dashboard/TrackOrderTable';
import { useAuth } from '../../contexts/AuthContext';

export const GuestDashboard = () => {
  const { user } = useAuth();
  const [timeFilter, setTimeFilter] = useState('today');
  const [trackFilter, setTrackFilter] = useState('ccu');

  return (
    <DashboardLayout>
      <Space direction="vertical" size={24} style={{ width: '100%' }}>
        <div className="dashboard-header">
          <div className="user-welcome">
            <h3>Hello {user?.fullName || user?.username} 👋</h3>
            <p>Check out latest update!</p>
          </div>
        </div>

        <div className="shipment-section">
          <ShipmentTracksHeader 
            selectedFilter={timeFilter}
            onFilterChange={setTimeFilter}
          />
          <ShipmentStats />
        </div>

        <div className="track-section">
          <TrackOrderHeader
            selectedFilter={trackFilter}
            onFilterChange={setTrackFilter}
          />
          <TrackOrderTable />
        </div>
      </Space>
    </DashboardLayout>
  );
};