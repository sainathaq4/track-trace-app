import { 
  MenuOutlined,
  InboxOutlined, 
  CarOutlined,
  ContainerOutlined,
  CompassOutlined,
  BuildOutlined,
  SettingOutlined,
  CalendarOutlined,
  UserOutlined,
  DeliveredProcedureOutlined,
  DashboardOutlined,
  MessageOutlined,
  BellOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';

export const MENU_ICONS = {
  dashboard: <DashboardOutlined />,
  warehouse: <InboxOutlined />,
  yard: <CarOutlined />,
  quayside: <ContainerOutlined />,
  voyage: <CompassOutlined />,
  offshore: <BuildOutlined />,
  menu: <MenuOutlined />,
  config: <SettingOutlined />,
  plan: <CalendarOutlined />,
  profile: <UserOutlined />,
  delivery: <DeliveredProcedureOutlined />,
  chat: <MessageOutlined />,
  notification: <BellOutlined />,
  help: <QuestionCircleOutlined />
} as const;