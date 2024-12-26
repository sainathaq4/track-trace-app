import { Table } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';

const columns = [
  { title: 'CCU ID', dataIndex: 'id', key: 'id' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const dummyData = [
  { id: 'CCU001', type: 'Container', status: 'Available' },
  { id: 'CCU002', type: 'Basket', status: 'In-Use' },
];

export const YardCCUList = () => (
  <DashboardLayout>
    <h1>CCU Listing</h1>
    <Table columns={columns} dataSource={dummyData} />
  </DashboardLayout>
);