import { useState } from "react";
import FormPassword from "./components/FormPassword";
import ListOfPasswords from "./components/ListOfPasswords";
import { PasswordType, PasswordWithId } from "./Types";

import Swal from 'sweetalert2';

function App() {

  const [registerPasswords, setRegisterPasswords] = useState(true);
  const [savedPassword, setSavedPassword] = useState<PasswordWithId[]>([]);

  const handleShowFormPasswordComponent = () => {
    setRegisterPasswords(true);
  };


  const handleListOfPasswordsComponent = () => {
    setRegisterPasswords(false);
  };


  const handleCreateBoxOfPassword = (formData: PasswordType) => {
    const productWhitId = Object.assign({}, formData, { id: Date.now() });
    setSavedPassword([...savedPassword, productWhitId]);
    Swal.fire({
      text: 'Serviço cadastrado com sucesso',
      timer: 1200,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const handleDeleteBoxOfPassword = (id: string | number) => {
    const filteredPassword = savedPassword.filter((saved) => saved.id !== id);
    setSavedPassword(filteredPassword);
  };


  return (
    <header>
      <h1> Gerenciador de Senhas </h1>

      <button
        onClick={handleShowFormPasswordComponent}
      > cadastrar nova senha</button>

      <button
        onClick={handleListOfPasswordsComponent}
      > Ver senhas cadastradas</button>

      {registerPasswords
        ? <FormPassword
          handleSubmitForm={handleCreateBoxOfPassword}
        />
        : <ListOfPasswords
          products={savedPassword}
          handleDelete={handleDeleteBoxOfPassword}
        />
      }

    </header>
  )
}

export default App

