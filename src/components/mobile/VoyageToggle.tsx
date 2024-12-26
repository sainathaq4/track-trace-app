import { Space } from 'antd';

interface VoyageToggleProps {
  activeView: 'upcoming' | 'ongoing';
  onViewChange: (view: 'upcoming' | 'ongoing') => void;
}

export const VoyageToggle = ({ activeView, onViewChange }: VoyageToggleProps) => {
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
        onClick={() => onViewChange('upcoming')}
        style={{
          padding: '8px 16px',
          borderRadius: 16,
          cursor: 'pointer',
          background: activeView === 'upcoming' ? '#fff' : 'transparent',
          color: activeView === 'upcoming' ? '#ee4d2d' : '#666',
          fontWeight: activeView === 'upcoming' ? 'bold' : 'normal',
          boxShadow: activeView === 'upcoming' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        Upcoming Voyages
      </div>
      <div
        onClick={() => onViewChange('ongoing')}
        style={{
          padding: '8px 16px',
          borderRadius: 16,
          cursor: 'pointer',
          background: activeView === 'ongoing' ? '#fff' : 'transparent',
          color: activeView === 'ongoing' ? '#ee4d2d' : '#666',
          fontWeight: activeView === 'ongoing' ? 'bold' : 'normal',
          boxShadow: activeView === 'ongoing' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        Ongoing Voyages
      </div>
    </Space>
  );
};