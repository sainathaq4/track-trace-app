import { Card, Space, Tag } from 'antd';
import { RightOutlined } from '@ant-design/icons';

interface QuaysideCardProps {
  id: string;
  totalOrder: string;
  offshoreLocation: string;
  status: string;
  onClick?: () => void;
}

export const QuaysideCard = ({ 
  id, 
  totalOrder, 
  offshoreLocation, 
  status, 
  onClick 
}: QuaysideCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'awaiting receipt':
        return 'error';
      case 'awaiting loading':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Card 
      style={{ marginBottom: 8 }}
      onClick={onClick}
      hoverable
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space justify="space-between" style={{ width: '100%' }}>
          <span>CCU ID</span>
          <Tag color={getStatusColor(status)}>
            {status}
          </Tag>
        </Space>
        <Space justify="space-between" style={{ width: '100%' }}>
          <span style={{ fontWeight: 'bold' }}>{id}</span>
          <RightOutlined />
        </Space>
        <Space justify="space-between" style={{ width: '100%' }}>
          <div>
            <div style={{ color: '#666' }}>Total Order</div>
            <div style={{ fontWeight: 'bold' }}>{totalOrder}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#666' }}>Offshore Location</div>
            <div style={{ fontWeight: 'bold' }}>{offshoreLocation}</div>
          </div>
        </Space>
      </Space>
    </Card>
  );
};