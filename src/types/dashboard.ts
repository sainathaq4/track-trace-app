import { ReactNode } from 'react';

export interface ShipmentStat {
  icon: ReactNode;
  title: string;
  count: number;
  unit: string;
  color: string;
  bgColor: string;
}