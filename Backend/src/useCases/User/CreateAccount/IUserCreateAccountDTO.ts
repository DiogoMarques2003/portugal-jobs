interface IUserCreateAccountDTO {
  Body: {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    number: number;
  }
}

export default IUserCreateAccountDTO;
