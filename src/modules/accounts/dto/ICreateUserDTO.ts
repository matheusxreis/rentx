export interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  id?: string; // para conseguir atualizar o avatar
  avatar: string;
}
