import { axiosInstance } from './axios';
import { AuthResponse, LoginCredentials } from '../types/auth';
import { dummyUsers } from '../data/dummyUsers';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // Simulate API call
  const user = dummyUsers.find(
    u => u.username === credentials.username && u.password === credentials.password
  );

  if (!user) {
    throw new Error('Invalid credentials');
  }

  return {
    user,
    token: 'dummy-jwt-token'
  };
};