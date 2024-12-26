import { Card } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ListingTable } from '../../components/listings/ListingTable';
import { StatusTag } from '../../components/common/StatusTag';
import type { Voyage } from '../../types/listings';

const columns = [
  { title: 'Voyage ID', dataIndex: 'id', key: 'id' },
  { title: 'Vessel', dataIndex: 'vessel', key: 'vessel' },
  { title: 'Departure Port', dataIndex: 'departurePort', key: 'departurePort' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <StatusTag 
        status={status}
        mapping={{
          'scheduled': 'warning',
          'in-progress': 'processing',
          'completed': 'success'
        }}
      />
    )
  }
];

const dummyData: Voyage[] = [
  { 
    id: 'VOY001', 
    vessel: 'Vessel A', 
    departurePort: 'Port X',
    date: '2024-02-25',
    status: 'scheduled' 
  },
  { 
    id: 'VOY002', 
    vessel: 'Vessel B', 
    departurePort: 'Port Y',
    date: '2024-02-26',
    status: 'in-progress' 
  }
];

export const VoyageList = () => (
  <DashboardLayout>
    <Card title="Voyage Planning">
      <ListingTable data={dummyData} columns={columns} />
    </Card>
  </DashboardLayout>
);