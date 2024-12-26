import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  title: string;
  count: number;
  unit: string;
  color: string;
  bgColor: string;
}

export const StatCard = ({ icon, title, count, unit, color, bgColor }: StatCardProps) => (
  <div className="stat-card">
    <div className="stat-icon-wrapper" style={{ backgroundColor: bgColor }}>
      <div className="stat-icon" style={{ color }}>{icon}</div>
    </div>
    <div className="stat-content">
      <h3 className="stat-title">{title}</h3>
      <div className="stat-value">
        <span className="stat-count">{count}</span>
        <span className="stat-unit">{unit}</span>
      </div>
    </div>
  </div>
);