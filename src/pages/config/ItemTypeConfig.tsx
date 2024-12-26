import { useState } from 'react';
import { Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { ConfigTable } from '../../components/config/ConfigTable';
import type { ItemType } from '../../types/masterConfig';

const dummyData: ItemType[] = [
  { id: 'ITM001', name: 'Drilling Equipment', code: 'DRL-EQ', unit: 'pcs', status: 'active' },
  { id: 'ITM002', name: 'Safety Gear', code: 'SFT-GR', unit: 'set', status: 'active' },
];

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Code', dataIndex: 'code', key: 'code' },
  { title: 'Unit', dataIndex: 'unit', key: 'unit' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

export const ItemTypeConfig = () => {
  return (
    <DashboardLayout>
      <Card 
        title="Item Types"
        extra={<Button type="primary" icon={<PlusOutlined />}>Add Item Type</Button>}
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