import { useState } from "react";
import { PasswordType } from "../Types";

import '../styles/FormPassword.css'

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

  const [passwordRequirements, setPasswordRequirements] = useState({
    caracMax: false,
    caracMin: false,
    numberAndLetter: false,
    specialCarac: false,
  });

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    if (id === "password") {
      passwordVerification(value);
    }
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };


  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmitForm(formData);
    setFormData(INITIAL_STATE);
  };

  const handleClear = () => {
    setFormData(INITIAL_STATE);
  };

  const passwordVerification = (password: string) => {
    setPasswordRequirements({
      caracMax: password.length === 16,
      caracMin: password.length >= 8,
      numberAndLetter: /\d/.test(password) && /[a-zA-Z]/.test(password),
      specialCarac: /[^a-zA-Z0-9]/.test(password),
    });
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
              type="password"
              maxLength={16}
              onChange={handleChange}
              value={formData.password}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              required
            />

            <div className={`password-verification ${isPasswordFocused ? '' : 'hidden'}`}>
              <p>A senha deve atender aos seguintes requisitos:</p>
              <ul>
                <li className={passwordRequirements.caracMax ? 'met' : ''}>
                  Ter no máximo 16 caracteres.
                </li>
                <li className={passwordRequirements.caracMin ? 'met' : ''}>
                  Ter pelo menos 8 caracteres.
                </li>
                <li className={passwordRequirements.numberAndLetter ? 'met' : ''}>
                  Conter números e letras.
                </li>
                <li className={passwordRequirements.specialCarac ? 'met' : ''}>
                  Conter caracteres especiais.
                </li>
              </ul>
            </div>

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