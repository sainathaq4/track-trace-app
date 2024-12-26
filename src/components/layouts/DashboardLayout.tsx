import { Layout, Menu, Typography, Avatar, Space, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getDesktopMenuItems } from '../../utils/menu/desktopMenu';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const menuItems = user ? getDesktopMenuItems(user.role) : [];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        padding: '0 24px', 
        background: '#fff', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <Space>
          <img src="/vite.svg" alt="Logo" style={{ height: 32 }} />
          <Title level={4} style={{ margin: 0 }}>Track & Trace System</Title>
        </Space>
        <Space>
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          <Button 
            type="text" 
            icon={<LogoutOutlined />} 
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Space>
      </Header>
      <Layout>
        <Sider width={250} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={({ key }) => navigate(key)}
            style={{ 
              height: '100%', 
              borderRight: 0,
              padding: '16px 0'
            }}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content style={{ 
            padding: 24, 
            margin: 0, 
            background: '#fff', 
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};