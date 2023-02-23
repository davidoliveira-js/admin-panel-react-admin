import { Menu } from 'react-admin';

export function MyMenu() {
  return (
    <Menu>
      <Menu.DashboardItem />
      <Menu.ResourceItem name="users" />
      <Menu.ResourceItem name="posts" />
    </Menu>
  );
}
