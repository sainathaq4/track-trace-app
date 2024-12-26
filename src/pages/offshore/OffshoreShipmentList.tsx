import { Card } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ListingTable } from '../../components/listings/ListingTable';
import { StatusTag } from '../../components/common/StatusTag';

interface OffshoreShipment {
  id: string;
  vesselName: string;
  arrivalDate: string;
  status: string;
  items: number;
}

const columns = [
  { title: 'Shipment ID', dataIndex: 'id', key: 'id' },
  { title: 'Vessel', dataIndex: 'vesselName', key: 'vesselName' },
  { title: 'Arrival Date', dataIndex: 'arrivalDate', key: 'arrivalDate' },
  { title: 'Items', dataIndex: 'items', key: 'items' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <StatusTag 
        status={status} 
        mapping={{
          'awaiting': 'warning',
          'offloading': 'processing',
          'completed': 'success'
        }}
      />
    )
  }
];

const dummyData: OffshoreShipment[] = [
  { 
    id: 'SHP001', 
    vesselName: 'Vessel A', 
    arrivalDate: '2024-02-25',
    items: 15,
    status: 'awaiting'
  },
  { 
    id: 'SHP002', 
    vesselName: 'Vessel B', 
    arrivalDate: '2024-02-26',
    items: 8,
    status: 'offloading'
  }
];

export const OffshoreShipmentList = () => (
  <DashboardLayout>
    <Card title="Offshore Shipments">
      <ListingTable data={dummyData} columns={columns} />
    </Card>
  </DashboardLayout>
);