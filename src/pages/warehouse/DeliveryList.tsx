import { Card } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ListingTable } from '../../components/listings/ListingTable';
import { StatusTag } from '../../components/common/StatusTag';
import type { DeliveryOrder } from '../../types/listings';

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
          completed: 'success',
          pending: 'processing'
        }}
      />
    )
  }
];

const dummyData: DeliveryOrder[] = [
  { id: 'DEL001', date: '2024-02-20', items: 5, location: 'WHS01', status: 'Pending' },
  { id: 'DEL002', date: '2024-02-19', items: 3, location: 'WHS02', status: 'Completed' }
];

export const DeliveryList = () => (
  <DashboardLayout>
    <Card title="Delivery Orders">
      <ListingTable data={dummyData} columns={columns} />
    </Card>
  </DashboardLayout>
);