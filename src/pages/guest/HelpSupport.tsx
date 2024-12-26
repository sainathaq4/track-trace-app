import { Card, Collapse, Button, Space } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import type { CollapseProps } from 'antd';

const faqItems: CollapseProps['items'] = [
  {
    key: '1',
    label: 'How do I track my delivery?',
    children: 'You can track your delivery by going to the Dashboard and using the Track Order section. Enter your CCU ID or Shipment ID to get real-time updates.'
  },
  {
    key: '2',
    label: 'What do the different delivery statuses mean?',
    children: 'Delivery statuses include: Pending (awaiting processing), In Transit (on the way), Delivered (completed), and more. Each status is color-coded for easy identification.'
  }
];

export const HelpSupport = () => (
  <DashboardLayout>
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <Card title="Contact Support">
        <Space>
          <Button type="primary">Start Chat</Button>
          <Button>Email Support</Button>
        </Space>
      </Card>

      <Card title="Frequently Asked Questions">
        <Collapse items={faqItems} />
      </Card>
    </Space>
  </DashboardLayout>
);