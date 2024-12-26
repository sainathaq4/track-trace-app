import { Card, List, Badge, Space, Tag } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';

const dummyNotifications = [
  {
    id: '1',
    title: 'Delivery Update',
    message: 'Your delivery CCU001 has been picked up',
    time: '5 mins ago',
    type: 'info',
    read: false
  },
  {
    id: '2',
    title: 'Plan Update',
    message: 'Q1 Delivery Plan has been updated',
    time: '1 hour ago',
    type: 'success',
    read: true
  }
];

export const NotificationsList = () => (
  <DashboardLayout>
    <Card title="Notifications">
      <List
        itemLayout="horizontal"
        dataSource={dummyNotifications}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Space>
                  {!item.read && <Badge status="processing" />}
                  {item.title}
                  <Tag color={item.type === 'info' ? 'blue' : 'success'}>{item.type}</Tag>
                </Space>
              }
              description={item.message}
            />
            <div className="notification-time">{item.time}</div>
          </List.Item>
        )}
      />
    </Card>
  </DashboardLayout>
);