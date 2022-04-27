export interface IContacts {
  _id: string;
  name: string;
  phone: string;
}

export interface IContactsState {
  loading: boolean;
  contacts: IContacts[];
  error: null | string;
}

export interface IUserSignin {
  token: string | null;
}

export interface IUserData {
  login: string;
  password: string;
}
