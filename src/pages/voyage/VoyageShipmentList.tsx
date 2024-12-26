import { Card } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ListingTable } from '../../components/listings/ListingTable';
import { StatusTag } from '../../components/common/StatusTag';

interface VoyageShipment {
  id: string;
  voyageId: string;
  destination: string;
  status: string;
  items: number;
}

const columns = [
  { title: 'Shipment ID', dataIndex: 'id', key: 'id' },
  { title: 'Voyage ID', dataIndex: 'voyageId', key: 'voyageId' },
  { title: 'Destination', dataIndex: 'destination', key: 'destination' },
  { title: 'Items', dataIndex: 'items', key: 'items' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <StatusTag 
        status={status} 
        mapping={{
          'pending': 'warning',
          'loading': 'processing',
          'completed': 'success'
        }}
      />
    )
  }
];

const dummyData: VoyageShipment[] = [
  { 
    id: 'SHP001', 
    voyageId: 'VOY001',
    destination: 'Platform A',
    items: 12,
    status: 'pending'
  },
  { 
    id: 'SHP002', 
    voyageId: 'VOY001',
    destination: 'Platform B',
    items: 8,
    status: 'loading'
  }
];

export const VoyageShipmentList = () => (
  <DashboardLayout>
    <Card title="Voyage Shipments">
      <ListingTable data={dummyData} columns={columns} />
    </Card>
  </DashboardLayout>
);