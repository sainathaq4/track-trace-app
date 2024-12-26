export type MenuRole = 'warehouse' | 'yard' | 'quayside' | 'voyage' | 'offshore' | 'admin' | 'guest';

export interface MenuItem {
  key: string;
  icon?: React.ReactNode;
  label: string;
  children?: MenuItem[];
}

export type MenuItems = MenuItem[];