import { User } from '../types/auth';

export const dummyUsers: (User & { password: string })[] = [
  { 
    id: 'WH001',
    username: 'warehouse_user',
    password: 'password123',
    role: 'warehouse',
    fullName: 'John Warehouse',
    email: 'john@warehouse.com'
  },
  { 
    id: 'YD001',
    username: 'yard_user',
    password: 'password123',
    role: 'yard',
    fullName: 'Mike Yard',
    email: 'mike@yard.com'
  },
  { 
    id: 'QS001',
    username: 'quayside_user',
    password: 'password123',
    role: 'quayside',
    fullName: 'Sarah Quay',
    email: 'sarah@quayside.com'
  },
  { 
    id: 'VY001',
    username: 'voyage_user',
    password: 'password123',
    role: 'voyage',
    fullName: 'Tom Voyage',
    email: 'tom@voyage.com'
  },
  { 
    id: 'OF001',
    username: 'offshore_user',
    password: 'password123',
    role: 'offshore',
    fullName: 'Lisa Offshore',
    email: 'lisa@offshore.com'
  },
  { 
    id: 'AD001',
    username: 'admin_user',
    password: 'password123',
    role: 'admin',
    fullName: 'Admin User',
    email: 'admin@system.com'
  },
  { 
    id: 'GU001',
    username: 'guest_user',
    password: 'guest123',
    role: 'guest',
    fullName: 'Guest User',
    email: 'guest@system.com'
  }
];