import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
} from 'react-admin';

export function UserEdit() {
  return (
    <Edit title="Editar usuário">
      <SimpleForm>
        <TextInput source="email" label="E-mail" />
        <TextInput source="password" label="Senha" />
        <SelectInput
          label="Cargo"
          source="role"
          optionText="id"
          optionValue="id"
          validate={required()}
          defaultValue={'user'}
          disabled={true}
          choices={[
            { id: 'admin', name: 'admin' },
            { id: 'user', name: 'user' },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
}
