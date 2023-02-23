import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-json-server';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './themes/default';
import PeopleIcon from '@mui/icons-material/People';
import Book from '@mui/icons-material/Book';
import {
  MyLayout,
  PostCreate,
  PostEdit,
  PostList,
  UserCreate,
  UserEdit,
  UserList,
} from './components';

const dataProvider = simpleRestProvider('http://localhost:7888');

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
        <Admin dataProvider={dataProvider} layout={MyLayout}>
          <Resource
            name="users"
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
            icon={PeopleIcon}
          />
          <Resource
            name="posts"
            list={PostList}
            create={PostCreate}
            edit={PostEdit}
            icon={Book}
          />
        </Admin>
      </div>
    </ThemeProvider>
  );
}
