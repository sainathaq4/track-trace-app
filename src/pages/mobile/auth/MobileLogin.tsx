import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Space, message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../../api/auth';
import { useAuth } from '../../../contexts/AuthContext';
import { MobileLoginForm } from '../../../components/mobile/auth/MobileLoginForm';
import { LoginCredentials } from '../../../types/auth';
import { getMobileRoute } from '../../../utils/routes/routeHelpers';
import '../../../styles/mobile/login.scss';

const { Title, Text } = Typography;

export const MobileLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user);
      localStorage.setItem('token', data.token);
      const mobileRoute = getMobileRoute(data.user.role);
      navigate(mobileRoute, { replace: true });
      message.success('Welcome back!');
    },
    onError: () => {
      message.error('Invalid username or password');
    },
    onSettled: () => {
      setLoading(false);
    }
  });

  const handleLogin = (values: LoginCredentials) => {
    setLoading(true);
    loginMutation.mutate(values);
  };

  return (
    <div className="mobile-login-container">
      <Space direction="vertical" size="large" className="mobile-login-content">
        <div className="logo-container">
          <img src="/vite.svg" alt="Logo" className="mobile-login-logo" />
        </div>
        <div className="login-titles">
          <Title level={3}>Track & Trace System</Title>
          <Text type="secondary">Sign in to continue</Text>
        </div>
        
        <MobileLoginForm 
          onSubmit={handleLogin}
          loading={loading}
        />
      </Space>
    </div>
  );
}