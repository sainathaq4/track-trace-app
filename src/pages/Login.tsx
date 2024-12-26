import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Typography, Space, message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';
import { useAuth } from '../contexts/AuthContext';
import { LoginForm } from '../components/auth/LoginForm';
import { LoginCredentials } from '../types/auth';
import { getDefaultRoute } from '../utils/navigation';
import '../styles/login.scss';

const { Title, Text } = Typography;

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user);
      localStorage.setItem('token', data.token);
      const from = location.state?.from?.pathname || getDefaultRoute(data.user.role);
      navigate(from, { replace: true });
      message.success('Welcome back!');
    },
    onError: (error: Error) => {
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
    <div className="login-container">
      <div className="login-content">
        <Card className="login-card">
          <Space direction="vertical" size="large" className="login-header">
            <div className="logo-container">
              <img src="/vite.svg" alt="Logo" className="login-logo" />
            </div>
            <div className="login-titles">
              <Title level={2}>Track & Trace System</Title>
              <Text type="secondary">Sign in to your account</Text>
            </div>
          </Space>
          
          <LoginForm 
            onSubmit={handleLogin}
            loading={loading}
          />
        </Card>
      </div>
    </div>
  );
};