import { Tag } from 'antd';

type StatusType = 'success' | 'processing' | 'warning' | 'error';

interface StatusTagProps {
  status: string;
  mapping?: Record<string, StatusType>;
}

export const StatusTag = ({ status, mapping = {} }: StatusTagProps) => {
  const getStatusType = (status: string): StatusType => {
    const defaultMapping: Record<string, StatusType> = {
      completed: 'success',
      active: 'processing',
      pending: 'warning',
      error: 'error',
      ...mapping
    };

    return defaultMapping[status.toLowerCase()] || 'default';
  };

  return (
    <Tag color={getStatusType(status)}>
      {status}
    </Tag>
  );
};