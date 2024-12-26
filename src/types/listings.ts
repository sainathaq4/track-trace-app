export interface DeliveryOrder {
  id: string;
  date: string;
  status: string;
  items: number;
  location: string;
}

export interface WorkOrder {
  id: string;
  from: string;
  to: string;
  items: number;
  status: string;
}

export interface CCU {
  id: string;
  type: string;
  status: string;
  location: string;
}

export interface Shipment {
  id: string;
  vessel: string;
  status: string;
  destination: string;
}

export interface Voyage {
  id: string;
  vessel: string;
  departurePort: string;
  status: string;
  date: string;
}