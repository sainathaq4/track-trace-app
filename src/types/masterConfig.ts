export interface Location {
  id: string;
  name: string;
  type: 'warehouse' | 'yard' | 'quayside' | 'offshore';
  status: 'active' | 'inactive';
}

export interface CCUType {
  id: string;
  name: string;
  code: string;
  capacity: number;
  status: 'active' | 'inactive';
}

export interface VesselType {
  id: string;
  name: string;
  code: string;
  capacity: number;
  status: 'active' | 'inactive';
}

export interface ItemType {
  id: string;
  name: string;
  code: string;
  unit: string;
  status: 'active' | 'inactive';
}