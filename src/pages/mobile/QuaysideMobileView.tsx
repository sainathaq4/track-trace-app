import { useState } from 'react';
import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { MobileLayout } from '../../components/layouts/MobileLayout';
import { YardMobileHeader } from '../../components/mobile/YardMobileHeader';
import { QuaysideToggle } from '../../components/mobile/QuaysideToggle';
import { QuaysideCard } from '../../components/mobile/QuaysideCard';

const dummyData = [
  { 
    id: 'CCU000081678', 
    totalOrder: '03', 
    offshoreLocation: 'Offshore02', 
    status: 'Awaiting Receipt' 
  },
  { 
    id: 'CCU000081678', 
    totalOrder: '03', 
    offshoreLocation: 'Offshore02', 
    status: 'Awaiting Loading' 
  },
  { 
    id: 'CCU000081678', 
    totalOrder: '03', 
    offshoreLocation: 'Offshore02', 
    status: 'Awaiting Loading' 
  }
];

export const QuaysideMobileView = () => {
  const [activeView, setActiveView] = useState<'ccu' | 'shipment' | 'vessel'>('ccu');

  return (
    <MobileLayout>
      <YardMobileHeader />
      
      <QuaysideToggle 
        activeView={activeView}
        onViewChange={setActiveView}
      />

      {dummyData.map((item, index) => (
        <QuaysideCard
          key={`${item.id}-${index}`}
          {...item}
          onClick={() => console.log('Clicked CCU:', item.id)}
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
        onClick={() => console.log('Add new CCU')}
      />
    </MobileLayout>
  );
};