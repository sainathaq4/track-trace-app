import { Card, Table, Space, Button } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { StatusTag } from '../../components/common/StatusTag';

interface Delivery {
  key: string; // Add key to interface
  id: string;
  date: string;
  items: number;
  location: string;
  status: string;
}

const columns = [
  { title: 'Delivery ID', dataIndex: 'id', key: 'id' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Items', dataIndex: 'items', key: 'items' },
  { title: 'Location', dataIndex: 'location', key: 'location' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <StatusTag 
        status={status} 
        mapping={{
          'pending': 'warning',
          'in-progress': 'processing',
          'completed': 'success'
        }}
      />
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: Delivery) => (
      <Space size="middle">
        <Button type="link">View Details</Button>
      </Space>
    ),
  }
];

const dummyData: Delivery[] = [
  { 
    key: 'DEL001', // Add key property
    id: 'DEL001', 
    date: '2024-02-25',
    items: 12,
    location: 'Warehouse A',
    status: 'pending'
  },
  { 
    key: 'DEL002', // Add key property
    id: 'DEL002', 
    date: '2024-02-26',
    items: 8,
    location: 'Warehouse B',
    status: 'in-progress'
  }
];

export const DeliveryListGuest = () => (
  <DashboardLayout>
    <Card title="Deliveries">
      <Table 
        columns={columns} 
        dataSource={dummyData}
        rowKey="key" // Specify rowKey
      />
    </Card>
  </DashboardLayout>
);