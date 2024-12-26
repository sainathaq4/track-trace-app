import { Space } from 'antd';

interface OffshoreToggleProps {
  activeView: 'vessel' | 'return';
  onViewChange: (view: 'vessel' | 'return') => void;
}

export const OffshoreToggle = ({ activeView, onViewChange }: OffshoreToggleProps) => {
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
        onClick={() => onViewChange('vessel')}
        style={{
          padding: '8px 16px',
          borderRadius: 16,
          cursor: 'pointer',
          background: activeView === 'vessel' ? '#fff' : 'transparent',
          color: activeView === 'vessel' ? '#ee4d2d' : '#666',
          fontWeight: activeView === 'vessel' ? 'bold' : 'normal',
          boxShadow: activeView === 'vessel' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        Vessel Offloading
      </div>
      <div
        onClick={() => onViewChange('return')}
        style={{
          padding: '8px 16px',
          borderRadius: 16,
          cursor: 'pointer',
          background: activeView === 'return' ? '#fff' : 'transparent',
          color: activeView === 'return' ? '#ee4d2d' : '#666',
          fontWeight: activeView === 'return' ? 'bold' : 'normal',
          boxShadow: activeView === 'return' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        Return Order
      </div>
    </Space>
  );
};