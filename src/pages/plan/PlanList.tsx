import { Card, Button } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { PlanListTable } from '../../components/plan/PlanListTable';
import type { Plan } from '../../types/plan';

const dummyData: Plan[] = [
  { 
    id: 'PLN001', 
    name: 'Q1 Delivery Plan',
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    items: 150,
    status: 'active'
  },
  { 
    id: 'PLN002', 
    name: 'Q2 Delivery Plan',
    startDate: '2024-04-01',
    endDate: '2024-06-30',
    items: 200,
    status: 'draft'
  }
];

export const PlanList = () => (
  <DashboardLayout>
    <Card 
      title="Delivery Plans"
      extra={<Button type="primary">Create Plan</Button>}
    >
      <PlanListTable data={dummyData} />
    </Card>
  </DashboardLayout>
);