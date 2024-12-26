import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface ListingTableProps<T> {
  data: T[];
  columns: ColumnsType<T>;
  loading?: boolean;
}

export const ListingTable = <T extends { id: string }>({ 
  data, 
  columns, 
  loading 
}: ListingTableProps<T>) => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      loading={loading}
      rowKey="id"
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
      }}
    />
  );
};