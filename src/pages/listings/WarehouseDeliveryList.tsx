import { Table } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';

const columns = [
  { title: 'Delivery ID', dataIndex: 'id', key: 'id' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
];

const dummyData = [
  { id: 'DEL001', status: 'Pending', date: '2024-02-20' },
  { id: 'DEL002', status: 'Completed', date: '2024-02-19' },
];

export const WarehouseDeliveryList = () => (
  <DashboardLayout>
    <h1>Delivery Listing</h1>
    <Table columns={columns} dataSource={dummyData} />
  </DashboardLayout>
);