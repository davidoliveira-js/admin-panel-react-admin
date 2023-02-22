import {
  List,
  Datagrid,
  EditButton,
  DeleteButton,
  TextField,
  EmailField,
  DeleteWithConfirmButton,
} from 'react-admin';

export function UserList() {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <EmailField source="email" />
        <TextField source="role" />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
}
