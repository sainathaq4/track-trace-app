import { Drawer, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getMobileMenuItems } from '../../utils/menu';

interface MobileMenuProps {
  visible: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ visible, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleMenuClick = (path: string) => {
    navigate(path);
    onClose();
  };

  const menuItems = user ? getMobileMenuItems(user.role) : [];

  return (
    <Drawer
      title="Menu"
      placement="left"
      onClose={onClose}
      open={visible}
    >
      <Menu
        mode="inline"
        items={menuItems}
        onClick={({ key }) => handleMenuClick(key)}
      />
    </Drawer>
  );
};