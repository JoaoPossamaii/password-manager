// import { useState } from "react";
import { PasswordType, PasswordWithId } from "../Types";

type Props = {
  savedPassword: PasswordType
  handleDelete: ((id: string | number) => void) | undefined
};

function Passwords({ savedPassword, handleDelete }: Props) {
  const { name, login, password, url, id } = savedPassword as PasswordWithId;

  // const [checkbox, setCheckbox] = useState(false);

  return (
    <>
       {/* <label htmlFor="checkbox"> */}
        {/* Esconder senhas */}
        {/* <input */}
          {/* // type="checkbox" */}
          {/* // id="checkbox" */}
          {/* // onChange={ () => setCheckbox(!checkbox) } */}
        {/* // /> */}
      {/* </label> */}
      
      <div>
        {handleDelete && <button onClick={() => handleDelete(id)}> X </button>}
        <ul>
          <li key={id}>
            <a href={url} target="_blank">{name}</a>
            <p>Login</p>
            <p>{login}</p>
            <p>Senha</p>
            <p>{password}</p>
            {/* <p>{ checkbox ? '******' : password }</p> */}
          </li>
        </ul>
      </div>
    </>
  )
}

export default Passwords