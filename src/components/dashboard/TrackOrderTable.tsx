import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TrackOrderData } from '../../types/dashboard';

const columns: ColumnsType<TrackOrderData> = [
  {
    title: 'CCU ID',
    dataIndex: 'ccuId',
    key: 'ccuId',
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: 'Stage',
    dataIndex: 'stage',
    key: 'stage',
    render: (stage: string, record) => (
      <div className="stage-progress">
        <span>{stage}</span>
        <div className="progress-bar" style={{ 
          '--progress': `${record.progress}%`,
          backgroundColor: '#f5f5f5',
          height: '4px',
          borderRadius: '2px',
          marginTop: '4px',
          position: 'relative',
          overflow: 'hidden',
        } as React.CSSProperties}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${record.progress}%`,
            backgroundColor: '#ee4d2d',
            borderRadius: '2px',
          }} />
        </div>
      </div>
    ),
  },
  {
    title: 'CCU Status',
    dataIndex: 'ccuStatus',
    key: 'ccuStatus',
    render: (status: string) => {
      const colors: Record<string, string> = {
        Picked: '#722ed1',
        Delivered: '#52c41a',
        'In-Transit': '#faad14',
        Full: '#1890ff',
        QC: '#ee4d2d',
      };
      return <Tag color={colors[status]}>{status}</Tag>;
    },
  },
  { title: 'Storage Location', dataIndex: 'storageLocation', key: 'storageLocation' },
  { title: '#WO', dataIndex: 'workOrders', key: 'workOrders' },
  { title: '#Deliveries', dataIndex: 'deliveries', key: 'deliveries' },
  { title: 'Origin Yard', dataIndex: 'originYard', key: 'originYard' },
  { title: 'Current Location', dataIndex: 'currentLocation', key: 'currentLocation' },
  { title: 'Required By', dataIndex: 'requiredBy', key: 'requiredBy' },
  { title: 'ROB', dataIndex: 'rob', key: 'rob' },
  { title: 'Bunker', dataIndex: 'bunker', key: 'bunker' },
];

// Updated dummy data to match the image
const data: TrackOrderData[] = [
  {
    key: '1',
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
    progress: 50
  },
  // Add more rows as needed
];

export const TrackOrderTable = () => (
  <Table 
    columns={columns} 
    dataSource={data}
    scroll={{ x: true }}
    pagination={false}
    className="track-order-table"
  />
);