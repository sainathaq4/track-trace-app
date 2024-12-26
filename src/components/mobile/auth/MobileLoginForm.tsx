import { Form, Input, Button, Typography, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginCredentials } from '../../../types/auth';

const { Text } = Typography;

interface MobileLoginFormProps {
  onSubmit: (values: LoginCredentials) => void;
  loading: boolean;
}

export const MobileLoginForm = ({ onSubmit, loading }: MobileLoginFormProps) => {
  return (
    <Form
      name="mobile-login"
      onFinish={onSubmit}
      layout="vertical"
      className="mobile-login-form"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input 
          prefix={<UserOutlined />}
          placeholder="Username"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Password"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          loading={loading} 
          block
          size="large"
        >
          Sign In
        </Button>
      </Form.Item>

      <Text type="secondary" className="demo-credentials">
        Demo credentials: quayside_user / password123
      </Text>
    </Form>
  );
}