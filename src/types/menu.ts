import { ReactNode } from 'react';

export interface MenuItem {
  key: string;
  icon?: ReactNode;
  label: string;
  children?: MenuItem[];
}

export type MenuItems = MenuItem[];

export interface FilterOption {
  key: string;
  label: string;
}

export interface MenuConfig {
  routes: {
    auth: { [key: string]: string };
    warehouse: { [key: string]: string };
    yard: { [key: string]: string };
    quayside: { [key: string]: string };
    voyage: { [key: string]: string };
    offshore: { [key: string]: string };
    admin: { [key: string]: string };
    plan: { [key: string]: string };
    delivery: { [key: string]: string };
    chats: { [key: string]: string };
    notifications: { [key: string]: string };
    help: { [key: string]: string };
    profile: { [key: string]: string };
  };
  icons: Record<string, ReactNode>;
}