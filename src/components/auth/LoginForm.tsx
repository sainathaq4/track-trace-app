import { Form, Input, Button, Checkbox, Typography, Space } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { LoginCredentials } from '../../types/auth';

const { Text } = Typography;

interface LoginFormProps {
  onSubmit: (values: LoginCredentials) => void;
  loading: boolean;
}

export const LoginForm = ({ onSubmit, loading }: LoginFormProps) => {
  return (
    <Form
      name="login"
      onFinish={onSubmit}
      autoComplete="off"
      layout="vertical"
      requiredMark={false}
      className="login-form"
    >
      <Form.Item
        name="username"
        label={<Text strong>Username</Text>}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input 
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Enter your username"
          size="large"
          autoComplete="username"
        />
      </Form.Item>

      <Form.Item
        name="password"
        label={<Text strong>Password</Text>}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Enter your password"
          size="large"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          autoComplete="current-password"
        />
      </Form.Item>

      <Space direction="vertical" size={24} style={{ width: '100%' }}>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Button 
          type="primary" 
          htmlType="submit" 
          loading={loading} 
          block
          size="large"
          className="login-button"
        >
          Sign In
        </Button>
      </Space>

      <Text type="secondary" className="demo-credentials">
        Demo credentials: quayside_user / password123
      </Text>
    </Form>
  );
};