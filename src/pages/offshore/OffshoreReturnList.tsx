import { Card } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ListingTable } from '../../components/listings/ListingTable';
import { StatusTag } from '../../components/common/StatusTag';

interface ReturnOrder {
  id: string;
  ccuId: string;
  returnDate: string;
  destination: string;
  status: string;
}

const columns = [
  { title: 'Return ID', dataIndex: 'id', key: 'id' },
  { title: 'CCU ID', dataIndex: 'ccuId', key: 'ccuId' },
  { title: 'Return Date', dataIndex: 'returnDate', key: 'returnDate' },
  { title: 'Destination', dataIndex: 'destination', key: 'destination' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <StatusTag 
        status={status} 
        mapping={{
          'pending': 'warning',
          'in-transit': 'processing',
          'completed': 'success'
        }}
      />
    )
  }
];

const dummyData: ReturnOrder[] = [
  { 
    id: 'RET001', 
    ccuId: 'CCU001',
    returnDate: '2024-02-25',
    destination: 'Main Yard',
    status: 'pending'
  },
  { 
    id: 'RET002', 
    ccuId: 'CCU002',
    returnDate: '2024-02-26',
    destination: 'Warehouse A',
    status: 'in-transit'
  }
];

export const OffshoreReturnList = () => (
  <DashboardLayout>
    <Card title="Return Orders">
      <ListingTable data={dummyData} columns={columns} />
    </Card>
  </DashboardLayout>
);