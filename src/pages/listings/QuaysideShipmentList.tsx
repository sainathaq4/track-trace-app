import { Table } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';

const columns = [
  { title: 'Shipment ID', dataIndex: 'id', key: 'id' },
  { title: 'Vessel', dataIndex: 'vessel', key: 'vessel' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const dummyData = [
  { id: 'SHP001', vessel: 'Vessel A', status: 'Loading' },
  { id: 'SHP002', vessel: 'Vessel B', status: 'Completed' },
];

export const QuaysideShipmentList = () => (
  <DashboardLayout>
    <h1>Shipment Listing</h1>
    <Table columns={columns} dataSource={dummyData} />
  </DashboardLayout>
);