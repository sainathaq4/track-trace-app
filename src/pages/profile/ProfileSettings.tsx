import { Card, Form, Input, Button, Avatar, Upload, message } from 'antd';
import { UserOutlined, MailOutlined, UploadOutlined } from '@ant-design/icons';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import { useAuth } from '../../contexts/AuthContext';

export const ProfileSettings = () => {
  const { user } = useAuth();

  const onFinish = (values: any) => {
    message.success('Profile updated successfully');
    console.log('Updated values:', values);
  };

  return (
    <DashboardLayout>
      <Card title="Profile Settings">
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <Avatar 
              size={100} 
              src={user?.avatar}
              icon={<UserOutlined />}
            />
            <Upload showUploadList={false}>
              <Button icon={<UploadOutlined />} style={{ marginTop: 16 }}>
                Change Avatar
              </Button>
            </Upload>
          </div>

          <Form
            layout="vertical"
            initialValues={{
              fullName: user?.fullName,
              email: user?.email,
              username: user?.username
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: 'Please input your full name!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Full Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
            >
              <Input disabled />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Update Profile
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </DashboardLayout>
  );
};