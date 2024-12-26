import { Space, Radio } from 'antd';
import { RightOutlined } from '@ant-design/icons';

export const ShipmentTrackerHeader = () => {
  return (
    <div className="tracker-header">
      <Space align="center" style={{ width: '100%', justifyContent: 'space-between' }}>
        <Space align="center">
          <h2>Track Order</h2>
          <RightOutlined />
        </Space>
        <Radio.Group defaultValue="ccu" buttonStyle="solid">
          <Radio.Button value="shipment">Shipment</Radio.Button>
          <Radio.Button value="ccu">CCU</Radio.Button>
          <Radio.Button value="workorder">Work Order</Radio.Button>
        </Radio.Group>
      </Space>
    </div>
  );
};