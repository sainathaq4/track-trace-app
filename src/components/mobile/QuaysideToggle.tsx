import { Space } from 'antd';

interface QuaysideToggleProps {
  activeView: 'ccu' | 'shipment' | 'vessel';
  onViewChange: (view: 'ccu' | 'shipment' | 'vessel') => void;
}

export const QuaysideToggle = ({ activeView, onViewChange }: QuaysideToggleProps) => {
  return (
    <Space style={{ 
      background: '#f5f5f5', 
      padding: 4,
      borderRadius: 20,
      marginBottom: 16,
      width: '100%',
      justifyContent: 'space-around'
    }}>
      {['ccu', 'shipment', 'vessel'].map((view) => (
        <div
          key={view}
          onClick={() => onViewChange(view as 'ccu' | 'shipment' | 'vessel')}
          style={{
            padding: '8px 16px',
            borderRadius: 16,
            cursor: 'pointer',
            background: activeView === view ? '#fff' : 'transparent',
            color: activeView === view ? '#ee4d2d' : '#666',
            fontWeight: activeView === view ? 'bold' : 'normal',
            boxShadow: activeView === view ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
            textTransform: 'uppercase'
          }}
        >
          {view}
        </div>
      ))}
    </Space>
  );
};