import { Card, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';

interface OffshoreVesselCardProps {
  voyageId: string;
  vesselName: string;
  status: string;
  onClick?: () => void;
}

export const OffshoreVesselCard = ({ 
  voyageId, 
  vesselName, 
  status, 
  onClick 
}: OffshoreVesselCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'awaiting':
        return '#ee4d2d';
      case 'offloading':
        return '#52c41a';
      default:
        return '#666';
    }
  };

  return (
    <Card 
      style={{ marginBottom: 8 }}
      onClick={onClick}
      hoverable
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space align="start" style={{ width: '100%' }}>
          <div style={{ 
            background: '#ffe4e0', 
            padding: 12,
            borderRadius: 8,
            marginRight: 12
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ee4d2d">
              <path d="M20 21C20 21.6 19.6 22 19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H19C19.6 2 20 2.4 20 3V21Z M6 12H18 M6 16H18"/>
            </svg>
          </div>
          <Space direction="vertical" style={{ flex: 1 }}>
            <Space justify="space-between" style={{ width: '100%' }}>
              <span>Vessel</span>
              <span style={{ 
                color: getStatusColor(status),
                fontWeight: 'bold'
              }}>
                {status}
              </span>
            </Space>
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{vesselName}</span>
          </Space>
        </Space>

        <Space justify="space-between" style={{ width: '100%', paddingLeft: 48 }}>
          <div>
            <div style={{ color: '#666' }}>Voyage ID</div>
            <div style={{ fontWeight: 'bold' }}>{voyageId}</div>
          </div>
          <RightOutlined style={{ color: '#666' }} />
        </Space>
      </Space>
    </Card>
  );
};