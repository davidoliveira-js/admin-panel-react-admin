import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
} from 'react-admin';

export function PostEdit() {
  return (
    <Edit title="Editar post">
      <SimpleForm>
        <TextInput
          source="title"
          label="Titulo"
          validate={required()}
        />
        <TextInput
          source="body"
          label="Conteúdo"
          validate={required()}
        />
        <SelectInput
          label="Usuário"
          source="userId"
          optionText="id"
          optionValue="id"
          validate={required()}
          defaultValue={1}
          choices={[{ id: 1 }, { id: 2 }]}
        />
      </SimpleForm>
    </Edit>
  );
}
