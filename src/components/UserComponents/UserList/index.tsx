import {
  List,
  Datagrid,
  EditButton,
  TextField,
  EmailField,
  DeleteWithConfirmButton,
  FilterList,
  FilterListItem,
  BooleanField,
  SearchInput,
} from 'react-admin';
import { Card, CardContent, Chip } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import Person from '@mui/icons-material/Person';

function UserFilter() {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 200 }}>
      <CardContent>
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
}

const userFilters = [<SearchInput source="email" alwaysOn />];

export function UserList() {
  return (
    <List aside={<UserFilter />} filters={userFilters}>
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
