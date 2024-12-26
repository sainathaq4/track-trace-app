import { Space } from 'antd';

interface SortToggleProps {
  activeSort: 'order' | 'ccu';
  onSortChange: (sort: 'order' | 'ccu') => void;
}

export const SortToggle = ({ activeSort, onSortChange }: SortToggleProps) => {
  return (
    <Space style={{ 
      background: '#f5f5f5', 
      padding: 4,
      borderRadius: 20,
      marginBottom: 16,
      width: '100%',
      justifyContent: 'space-around'
    }}>
      <div
        onClick={() => onSortChange('order')}
        style={{
          padding: '8px 16px',
          borderRadius: 16,
          cursor: 'pointer',
          background: activeSort === 'order' ? '#fff' : 'transparent',
          color: activeSort === 'order' ? '#ee4d2d' : '#666',
          fontWeight: activeSort === 'order' ? 'bold' : 'normal',
          boxShadow: activeSort === 'order' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        Sort by Order
      </div>
      <div
        onClick={() => onSortChange('ccu')}
        style={{
          padding: '8px 16px',
          borderRadius: 16,
          cursor: 'pointer',
          background: activeSort === 'ccu' ? '#fff' : 'transparent',
          color: activeSort === 'ccu' ? '#ee4d2d' : '#666',
          fontWeight: activeSort === 'ccu' ? 'bold' : 'normal',
          boxShadow: activeSort === 'ccu' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        Sort by CCU
      </div>
    </Space>
  );
};