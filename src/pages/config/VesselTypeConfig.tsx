import { useState } from 'react';
import { Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ConfigTable } from '../../components/config/ConfigTable';
import type { VesselType } from '../../types/masterConfig';

const dummyData: VesselType[] = [
  { id: 'VSL001', name: 'Supply Vessel', code: 'SUP-VS', capacity: 5000, status: 'active' },
  { id: 'VSL002', name: 'Cargo Ship', code: 'CRG-SH', capacity: 10000, status: 'active' },
];

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Code', dataIndex: 'code', key: 'code' },
  { title: 'Capacity', dataIndex: 'capacity', key: 'capacity' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

export const VesselTypeConfig = () => {
  return (
    <DashboardLayout>
      <Card 
        title="Vessel Types"
        extra={<Button type="primary" icon={<PlusOutlined />}>Add Vessel Type</Button>}
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