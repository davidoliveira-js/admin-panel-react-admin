import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
} from 'react-admin';

export function UserCreate() {
  return (
    <Create title="Criar usuário">
      <SimpleForm>
        <TextInput
          source="email"
          label="E-mail"
          validate={required()}
        />
        <TextInput
          source="password"
          label="Senha"
          validate={required()}
        />
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
    </Create>
  );
}
