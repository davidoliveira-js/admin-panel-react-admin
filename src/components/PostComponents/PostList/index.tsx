import {
  List,
  Datagrid,
  EditButton,
  TextField,
  DeleteWithConfirmButton,
  SavedQueriesList,
  FilterLiveSearch,
  FilterList,
  FilterListItem,
} from 'react-admin';
import { Card, CardContent } from '@mui/material';
import Person from '@mui/icons-material/Person';

const PostFilter = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 200 }}>
      <CardContent>
        <SavedQueriesList />
        <FilterLiveSearch />
        <FilterList label="Usuário" icon={<Person />}>
          <FilterListItem label="1" value={{ userId: 1 }} />
          <FilterListItem label="2" value={{ userId: 2 }} />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export function PostList() {
  return (
    <List aside={<PostFilter />}>
      <Datagrid>
        <TextField source="title" />
        <TextField source="body" />
        <TextField source="userId" />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
}
