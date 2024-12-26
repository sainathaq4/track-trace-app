import { Card, List, Avatar, Space } from 'antd';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';

const dummyChats = [
  {
    id: '1',
    name: 'Support Team',
    lastMessage: 'Your delivery request has been processed',
    time: '2 mins ago',
    unread: 2
  },
  {
    id: '2',
    name: 'System Notifications',
    lastMessage: 'New delivery plan available',
    time: '1 hour ago',
    unread: 0
  }
];

export const ChatsList = () => (
  <DashboardLayout>
    <Card title="Chats">
      <List
        itemLayout="horizontal"
        dataSource={dummyChats}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{item.name[0]}</Avatar>}
              title={<Space>{item.name} {item.unread > 0 && <span className="unread-badge">{item.unread}</span>}</Space>}
              description={item.lastMessage}
            />
            <div className="chat-time">{item.time}</div>
          </List.Item>
        )}
      />
    </Card>
  </DashboardLayout>
);