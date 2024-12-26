import { useState } from 'react';
import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { MobileLayout } from '../../components/layouts/MobileLayout';
import { YardMobileHeader } from '../../components/mobile/YardMobileHeader';
import { SortToggle } from '../../components/mobile/SortToggle';
import { WorkOrderCard } from '../../components/mobile/WorkOrderCard';

const dummyData = [
  { id: 'OR000081678', from: 'WHS01', to: 'YAR3456', items: 7, status: 'Pending' },
  { id: 'OR000098126', from: 'WHS01', to: 'YAR3456', items: 7, status: 'Loaded to CCU 01' },
];

export const YardMobileView = () => {
  const [activeSort, setActiveSort] = useState<'order' | 'ccu'>('order');

  return (
    <MobileLayout>
      <YardMobileHeader />
      
      <SortToggle 
        activeSort={activeSort}
        onSortChange={setActiveSort}
      />

      {dummyData.map((order) => (
        <WorkOrderCard
          key={order.id}
          {...order}
          onClick={() => console.log('Clicked order:', order.id)}
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
        onClick={() => console.log('Add new work order')}
      />
    </MobileLayout>
  );
};