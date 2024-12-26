import { useState } from 'react';
import { Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ConfigTable } from '../../components/config/ConfigTable';
import type { CCUType } from '../../types/masterConfig';

const dummyData: CCUType[] = [
  { id: 'CCU001', name: 'Standard Container', code: 'STD-CNT', capacity: 1000, status: 'active' },
  { id: 'CCU002', name: 'Mini Container', code: 'MINI-CNT', capacity: 500, status: 'active' },
];

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Code', dataIndex: 'code', key: 'code' },
  { title: 'Capacity', dataIndex: 'capacity', key: 'capacity' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

export const CCUTypeConfig = () => {
  return (
    <DashboardLayout>
      <Card 
        title="CCU Types"
        extra={<Button type="primary" icon={<PlusOutlined />}>Add CCU Type</Button>}
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