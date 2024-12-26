import { Card, List, Tag, Space } from 'antd';
import { MobileLayout } from '../../components/layouts/MobileLayout';
import { RightOutlined } from '@ant-design/icons';

interface WorkOrder {
  id: string;
  from: string;
  to: string;
  items: number;
  status: string;
}

const dummyData: WorkOrder[] = [
  { id: 'OR000081678', from: 'WHS01', to: 'YAR3456', items: 7, status: 'Pending' },
  { id: 'OR000098126', from: 'WHS01', to: 'YAR3456', items: 7, status: 'Loaded to CCU 01' },
];

export const WarehouseYardMobile = () => {
  return (
    <MobileLayout>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card>
          <Space>
            <span className="active">Sort by Order</span>
            <span>Sort by CCU</span>
          </Space>
        </Card>
        
        <List
          dataSource={dummyData}
          renderItem={(item) => (
            <Card style={{ marginBottom: 8 }}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Space justify="space-between" style={{ width: '100%' }}>
                  <span>Work Order ID</span>
                  <Tag color={item.status === 'Pending' ? 'warning' : 'success'}>
                    {item.status}
                  </Tag>
                </Space>
                <Space justify="space-between" style={{ width: '100%' }}>
                  <span>{item.id}</span>
                  <RightOutlined />
                </Space>
                <Space>
                  <span>{item.from} → {item.to}</span>
                </Space>
                <span>Items: {item.items}</span>
              </Space>
            </Card>
          )}
        />
      </Space>
    </MobileLayout>
  );
};