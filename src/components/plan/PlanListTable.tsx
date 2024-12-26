import { Table, Space, Button } from 'antd';
import { StatusTag } from '../common/StatusTag';
import type { Plan } from '../../types/plan';

const columns = [
  { title: 'Plan ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Start Date', dataIndex: 'startDate', key: 'startDate' },
  { title: 'End Date', dataIndex: 'endDate', key: 'endDate' },
  { title: 'Items', dataIndex: 'items', key: 'items' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <StatusTag 
        status={status} 
        mapping={{
          'draft': 'default',
          'active': 'processing',
          'completed': 'success'
        }}
      />
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: Plan) => (
      <Space size="middle">
        <Button type="link" key="view">View</Button>
        <Button type="link" key="edit">Edit</Button>
      </Space>
    ),
  },
];

interface PlanListTableProps {
  data: Plan[];
  loading?: boolean;
}

export const PlanListTable = ({ data, loading }: PlanListTableProps) => (
  <Table 
    columns={columns} 
    dataSource={data}
    rowKey="id"
    loading={loading}
  />
);