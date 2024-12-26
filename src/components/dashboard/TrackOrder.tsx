import { Table, Tag, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface TrackOrderData {
  ccuId: string;
  stage: string;
  ccuStatus: string;
  storageLocation: string;
  workOrders: number;
  deliveries: number;
  originYard: string;
  currentLocation: string;
  requiredBy: string;
  rob: string;
  bunker: string;
}

const columns: ColumnsType<TrackOrderData> = [
  {
    title: 'CCU ID',
    dataIndex: 'ccuId',
    key: 'ccuId',
  },
  {
    title: 'Stage',
    dataIndex: 'stage',
    key: 'stage',
    render: (stage: string) => (
      <div className="stage-progress">
        <span>{stage}</span>
        <div className="progress-bar" />
      </div>
    ),
  },
  {
    title: 'CCU Status',
    dataIndex: 'ccuStatus',
    key: 'ccuStatus',
    render: (status: string) => {
      const colors: Record<string, string> = {
        Picked: 'purple',
        Delivered: 'green',
        'In-Transit': 'gold',
        Full: 'blue',
        QC: 'orange',
      };
      return <Tag color={colors[status]}>{status}</Tag>;
    },
  },
  {
    title: 'Storage Location',
    dataIndex: 'storageLocation',
    key: 'storageLocation',
  },
  {
    title: '#WO',
    dataIndex: 'workOrders',
    key: 'workOrders',
  },
  {
    title: '#Deliveries',
    dataIndex: 'deliveries',
    key: 'deliveries',
  },
  {
    title: 'Origin Yard Location',
    dataIndex: 'originYard',
    key: 'originYard',
  },
  {
    title: 'Current Location',
    dataIndex: 'currentLocation',
    key: 'currentLocation',
  },
  {
    title: 'Required By',
    dataIndex: 'requiredBy',
    key: 'requiredBy',
  },
  {
    title: 'ROB',
    dataIndex: 'rob',
    key: 'rob',
  },
  {
    title: 'Bunker',
    dataIndex: 'bunker',
    key: 'bunker',
  },
];

const data: TrackOrderData[] = [
  {
    ccuId: 'CCU0001',
    stage: 'S2',
    ccuStatus: 'Picked',
    storageLocation: 'OPL1',
    workOrders: 2,
    deliveries: 2,
    originYard: 'WHS1',
    currentLocation: 'VOY001',
    requiredBy: 'Nomura',
    rob: '11/1/2024',
    bunker: 'SHIL',
  },
  // Add more data rows as needed
];

export const TrackOrder = () => {
  return (
    <div className="track-order">
      <div className="track-header">
        <h2>Track Order</h2>
        <Space>
          <Tag>Shipment</Tag>
          <Tag color="red">CCU</Tag>
          <Tag>Work Order</Tag>
        </Space>
      </div>
      <Table 
        columns={columns} 
        dataSource={data} 
        scroll={{ x: true }}
        pagination={false}
      />
    </div>
  );
};