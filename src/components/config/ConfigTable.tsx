import { Table, Tag, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface ConfigTableProps<T> {
  data: T[];
  columns: any[];
  loading?: boolean;
  onEdit?: (record: T) => void;
  onDelete?: (record: T) => void;
}

export const ConfigTable = <T extends { id: string }>({ 
  data, 
  columns, 
  loading,
  onEdit,
  onDelete 
}: ConfigTableProps<T>) => {
  const actionColumn = {
    title: 'Actions',
    key: 'actions',
    render: (record: T) => (
      <Space>
        <Button 
          type="text" 
          icon={<EditOutlined />} 
          onClick={() => onEdit?.(record)} 
        />
        <Button 
          type="text" 
          danger 
          icon={<DeleteOutlined />} 
          onClick={() => onDelete?.(record)} 
        />
      </Space>
    )
  };

  return (
    <Table
      dataSource={data}
      columns={[...columns, actionColumn]}
      loading={loading}
      rowKey="id"
    />
  );
};