import { useState } from "react";
import { PasswordType } from "../Types";

type Props = {
  handleSubmitForm: (formData: PasswordType) => void
};

const INITIAL_STATE = {
  name: '',
  login: '',
  password: '',
  url: '',
} as PasswordType

function FormPassword(props: Props) {

  const { handleSubmitForm } = props;

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmitForm(formData);
    setFormData(INITIAL_STATE);
  };

  const handleClear = () => {
    setFormData(INITIAL_STATE);
  };

  return (
    <main>
      <h1> Cadastrar Novo Produto</h1>
      <div>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">
            Nome do Serviço
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </label>

          <label htmlFor="login">
            Login
            <input
              type="text"
              id="login"
              onChange={handleChange}
              value={formData.login}
              required
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              id="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </label>

          <label htmlFor="url">
            URL
            <input
              type="text"
              id="url"
              onChange={handleChange}
              value={formData.url}
              required
            />
          </label>

          <button type="reset" onClick={handleClear}>
            Cancelar
          </button>

          <button type="submit">
            Cadastrar
          </button>

        </form>
      </div>
    </main>
  )
}

export default FormPassword