import { Card, Space, Tag } from 'antd';
import { RightOutlined } from '@ant-design/icons';

interface WorkOrderCardProps {
  id: string;
  from: string;
  to: string;
  items: number;
  status: string;
  onClick?: () => void;
}

export const WorkOrderCard = ({ id, from, to, items, status, onClick }: WorkOrderCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'warning';
      case 'loaded to ccu 01':
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
          <span>Work Order ID</span>
          <Tag color={getStatusColor(status)}>
            {status}
          </Tag>
        </Space>
        <Space justify="space-between" style={{ width: '100%' }}>
          <span style={{ fontWeight: 'bold' }}>{id}</span>
          <RightOutlined />
        </Space>
        <Space>
          <span>{from} → {to}</span>
        </Space>
        <span>Items: {String(items).padStart(2, '0')}</span>
      </Space>
    </Card>
  );
};