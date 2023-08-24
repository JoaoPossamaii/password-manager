export type PasswordType ={
  name: string;
  login: string;
  password: string ;
  url: string ;
};

export type PasswordWithId = PasswordType & { id: string | number };