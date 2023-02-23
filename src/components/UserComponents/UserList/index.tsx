import {
  List,
  Datagrid,
  EditButton,
  TextField,
  EmailField,
  DeleteWithConfirmButton,
  SavedQueriesList,
  FilterLiveSearch,
  FilterList,
  FilterListItem,
  BooleanField,
  Menu,
} from 'react-admin';
import { Card, CardContent } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import LabelIcon from '@mui/icons-material/label';
import Person from '@mui/icons-material/Person';

const UserFilter = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 200 }}>
      <CardContent>
        <SavedQueriesList />
        <FilterLiveSearch />
        <FilterList label="Cargo" icon={<Person />}>
          <FilterListItem label="admin" value={{ role: 'admin' }} />
          <FilterListItem label="user" value={{ role: 'user' }} />
        </FilterList>
        <FilterList label="Email verificado" icon={<MailIcon />}>
          <FilterListItem
            label="Sim"
            value={{ isEmailVerified: true }}
          />
          <FilterListItem
            label="Não"
            value={{ isEmailVerified: false }}
          />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export function UserList() {
  return (
    <List aside={<UserFilter />}>
      <Datagrid>
        <TextField source="id" />
        <EmailField source="email" />
        <TextField source="role" />
        <BooleanField source="isEmailVerified" />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
}
