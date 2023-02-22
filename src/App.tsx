import { Admin, Resource } from 'react-admin';

import simpleRestProvider from 'ra-data-json-server';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './themes/default';
import { UserList } from './components/UserList';
import { UserCreate } from './components/UserCreate';
import { UserEdit } from './components/UserEdit';
const dataProvider = simpleRestProvider('http://localhost:7888');

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
        <Admin dataProvider={dataProvider}>
          <Resource
            name="users"
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
          />
        </Admin>
      </div>
    </ThemeProvider>
  );
}
