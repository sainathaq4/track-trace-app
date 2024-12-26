import { Space } from 'antd';

interface FilterOption {
  key: 'shipment' | 'ccu' | 'workOrder';
  label: string;
}

interface TrackOrderHeaderProps {
  selectedFilter: string;
  onFilterChange: (key: string) => void;
}

const filterOptions: FilterOption[] = [
  { key: 'shipment', label: 'Shipment' },
  { key: 'ccu', label: 'CCU' },
  { key: 'workOrder', label: 'Work Order' }
];

export const TrackOrderHeader = ({ selectedFilter, onFilterChange }: TrackOrderHeaderProps) => (
  <div className="track-order-header">
    <div className="header-content">
      <h2>Track Order →</h2>
      <Space>
        {filterOptions.map(option => (
          <button
            key={option.key}
            className={`filter-button ${selectedFilter === option.key ? 'active' : ''}`}
            onClick={() => onFilterChange(option.key)}
          >
            {option.label}
          </button>
        ))}
      </Space>
    </div>
  </div>
);