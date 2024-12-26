import { Card, Tag } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ListingTable } from '../../components/listings/ListingTable';
import type { Shipment } from '../../types/listings';

const columns = [
  { title: 'Shipment ID', dataIndex: 'id', key: 'id' },
  { title: 'Vessel', dataIndex: 'vessel', key: 'vessel' },
  { title: 'Destination', dataIndex: 'destination', key: 'destination' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'Loading' ? 'processing' : 'success'}>
        {status}
      </Tag>
    )
  }
];

const dummyData: Shipment[] = [
  { id: 'SHP001', vessel: 'Vessel A', destination: 'Platform X', status: 'Loading' },
  { id: 'SHP002', vessel: 'Vessel B', destination: 'Platform Y', status: 'Completed' }
];

export const ShipmentList = () => (
  <DashboardLayout>
    <Card title="Shipment Listing">
      <ListingTable data={dummyData} columns={columns} />
    </Card>
  </DashboardLayout>
);