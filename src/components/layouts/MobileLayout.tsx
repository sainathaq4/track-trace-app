import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MenuOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { MobileMenu } from '../mobile/MobileMenu';
import { useAuth } from '../../contexts/AuthContext';

const { Header, Content } = Layout;

export const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Layout>
      <Header style={{ 
        padding: '0 16px', 
        background: '#fff', 
        position: 'fixed', 
        width: '100%', 
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div className="header-left">
          <MenuOutlined onClick={() => setMenuVisible(true)} />
          <span style={{ marginLeft: 12 }}>Track & Trace</span>
        </div>
        <LogoutOutlined 
          onClick={handleLogout}
          style={{ fontSize: '18px', color: '#ff4d4f' }}
        />
      </Header>
      <Content style={{ marginTop: 64, padding: '16px', minHeight: 'calc(100vh - 64px)' }}>
        {children}
      </Content>
      <MobileMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </Layout>
  );
};