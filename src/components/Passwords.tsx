// import { useState } from "react";
import { PasswordType, PasswordWithId } from "../Types";

type Props = {
  savedPassword: PasswordType
  handleDelete: ((id: string | number) => void) | undefined
  showPassword: boolean;
};

function Passwords({ savedPassword, handleDelete, showPassword }: Props) {
  const { name, login, password, url, id } = savedPassword as PasswordWithId;


  return (
    <>
      
      <div>
        {handleDelete && <button onClick={() => handleDelete(id)}> X </button>}
        <ul>
          <li key={id}>
            <a href={url} target="_blank">{name}</a>
            <p>Login</p>
            <p>{login}</p>
            <p>Senha</p>
             <p>{showPassword ? password : "********"}</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Passwords