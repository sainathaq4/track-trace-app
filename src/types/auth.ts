export type MenuRole = 'admin' | 'warehouse' | 'yard' | 'quayside' | 'voyage' | 'offshore' | 'guest';

export interface User {
  id: string;
  username: string;
  role: MenuRole;
  fullName?: string;
  email?: string;
  avatar?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}