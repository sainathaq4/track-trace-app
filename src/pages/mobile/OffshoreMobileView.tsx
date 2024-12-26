import { useState } from 'react';
import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { MobileLayout } from '../../components/layouts/MobileLayout';
import { YardMobileHeader } from '../../components/mobile/YardMobileHeader';
import { OffshoreToggle } from '../../components/mobile/OffshoreToggle';
import { OffshoreVesselCard } from '../../components/mobile/OffshoreVesselCard';

const vesselData = [
  { 
    voyageId: 'VOY001',
    vesselName: 'Nomura',
    status: 'Awaiting'
  },
  { 
    voyageId: 'VOY001',
    vesselName: 'Nomura',
    status: 'Offloading'
  },
  { 
    voyageId: 'VOY001',
    vesselName: 'Nomura',
    status: 'Offloading'
  }
];

export const OffshoreMobileView = () => {
  const [activeView, setActiveView] = useState<'vessel' | 'return'>('vessel');

  return (
    <MobileLayout>
      <YardMobileHeader />
      
      <OffshoreToggle 
        activeView={activeView}
        onViewChange={setActiveView}
      />

      {activeView === 'vessel' && vesselData.map((vessel, index) => (
        <OffshoreVesselCard
          key={`${vessel.voyageId}-${index}`}
          {...vessel}
          onClick={() => console.log('Clicked vessel:', vessel.voyageId)}
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
        onClick={() => console.log('Add new vessel')}
      />
    </MobileLayout>
  );
};