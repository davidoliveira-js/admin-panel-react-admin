import { CoreLayoutProps, Layout } from 'react-admin';
import { MyMenu } from '../MyMenu';

export function MyLayout({ children }: CoreLayoutProps) {
  return <Layout menu={MyMenu} children={children} />;
}
