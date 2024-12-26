import { useState } from 'react';
import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { MobileLayout } from '../../components/layouts/MobileLayout';
import { YardMobileHeader } from '../../components/mobile/YardMobileHeader';
import { VoyageToggle } from '../../components/mobile/VoyageToggle';
import { VoyageCard } from '../../components/mobile/VoyageCard';

const upcomingVoyages = [
  { 
    voyageId: 'VOY001',
    vesselName: 'Nomura',
    departurePort: 'LOC001',
    status: 'Scheduled'
  },
  { 
    voyageId: 'VOY003',
    vesselName: 'Happy',
    departurePort: 'LOC001',
    status: 'Scheduled'
  },
  { 
    voyageId: 'VOY002',
    vesselName: 'Edith',
    departurePort: 'LOC001',
    status: 'Scheduled'
  }
];

const ongoingVoyages = [
  { 
    voyageId: 'VOY004',
    vesselName: 'Star',
    departurePort: 'LOC002',
    status: 'In Progress'
  }
];

export const VoyageMobileView = () => {
  const [activeView, setActiveView] = useState<'upcoming' | 'ongoing'>('upcoming');

  const voyages = activeView === 'upcoming' ? upcomingVoyages : ongoingVoyages;

  return (
    <MobileLayout>
      <YardMobileHeader />
      
      <VoyageToggle 
        activeView={activeView}
        onViewChange={setActiveView}
      />

      {voyages.map((voyage) => (
        <VoyageCard
          key={voyage.voyageId}
          {...voyage}
          onClick={() => console.log('Clicked voyage:', voyage.voyageId)}
        />
      ))}

      <FloatButton
        type="primary"
        icon={<PlusOutlined />}
        style={{ 
          width: 56,
          height: 56,
          backgroundColor: '#ee4d2d',
        }}
        onClick={() => console.log('Create new voyage')}
      />
    </MobileLayout>
  );
};