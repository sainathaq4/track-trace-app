import { Card, Tag } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ListingTable } from '../../components/listings/ListingTable';
import type { CCU } from '../../types/listings';

const columns = [
  { title: 'CCU ID', dataIndex: 'id', key: 'id' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Location', dataIndex: 'location', key: 'location' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'Available' ? 'success' : 'warning'}>
        {status}
      </Tag>
    )
  }
];

const dummyData: CCU[] = [
  { id: 'CCU001', type: 'Container', location: 'YAR01', status: 'Available' },
  { id: 'CCU002', type: 'Basket', location: 'YAR02', status: 'In-Use' }
];

export const CCUList = () => (
  <DashboardLayout>
    <Card title="CCU Listing">
      <ListingTable data={dummyData} columns={columns} />
    </Card>
  </DashboardLayout>
);