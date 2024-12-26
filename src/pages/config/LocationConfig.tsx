import { useState } from 'react';
import { Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ConfigTable } from '../../components/config/ConfigTable';
import type { Location } from '../../types/masterConfig';

const dummyData: Location[] = [
  { id: 'LOC001', name: 'Main Warehouse', type: 'warehouse', status: 'active' },
  { id: 'LOC002', name: 'North Yard', type: 'yard', status: 'active' },
];

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

export const LocationConfig = () => {
  return (
    <DashboardLayout>
      <Card 
        title="Locations"
        extra={<Button type="primary" icon={<PlusOutlined />}>Add Location</Button>}
      >
        <ConfigTable 
          data={dummyData}
          columns={columns}
          onEdit={(record) => console.log('Edit:', record)}
          onDelete={(record) => console.log('Delete:', record)}
        />
      </Card>
    </DashboardLayout>
  );
};