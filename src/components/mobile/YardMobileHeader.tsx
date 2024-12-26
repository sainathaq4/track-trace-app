import { Space, Avatar } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { useAuth } from '../../contexts/AuthContext';

export const YardMobileHeader = () => {
  const { user } = useAuth();
  const today = new Date().toLocaleDateString('en-US', { 
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return (
    <Space className="mobile-header" style={{ width: '100%', justifyContent: 'space-between' }}>
      <Space>
        <CalendarOutlined />
        <span>Today, {today}</span>
      </Space>
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
    </Space>
  );
};