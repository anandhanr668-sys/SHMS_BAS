export interface Bed {
  id: string;
  name: string;
  type: 'Regular' | 'ICU' | 'Ventilator';
  status: 'Available' | 'Occupied' | 'Maintenance' | 'Cleaning';
  wardId: string;
}

export interface Ward {
  id: string;
  name: string;
  type: 'Emergency' | 'General' | 'ICU' | 'Private';
  floor: string;
  totalBeds?: number;
  availableBeds?: number;
}

export interface Department {
  id: string;
  name: string;
  description?: string;
  head?: string;
}
