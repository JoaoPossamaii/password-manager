// import { useState } from "react";
import { useState } from "react";
import { PasswordWithId } from "../Types";
import Passwords from "./Passwords";


type Props = {
  products: PasswordWithId[]
  handleDelete: ((id: string | number) => void)
};

function ListOfPasswords({ products, handleDelete }: Props) {

  const [checkbox, setCheckbox] = useState(false);



  return (
    <main>
      <h1> Senhas Cadastradas</h1>

      <label htmlFor="checkbox">
      Esconder senhas
      <input
      type="checkbox"
      id="checkbox"
      onChange={ () => setCheckbox(!checkbox) }
      />
      </label>


      <div>
        {products.length === 0 && <h2> Nenhuma Senha Cadastrada</h2>}
        {products.map((product) => (
          <Passwords
            key={product.name}
            savedPassword={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </main>
  )
}

export default ListOfPasswords