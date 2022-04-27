import { IContacts } from "../../interfaces";

export const GET_CONTACTS = "get/contacts/fullfilled";
export const POST_CONTACTS = "post/contacts/fullfilled";
export const EDIT_CONTACTS = "edit/contacts/fullfilled";
export const DELETE_CONTACTS = "delete/contacts/fullfilled";

export type ICForm = Pick<IContacts, "name" | "phone">;

export interface IGetcontacts {
  type: typeof GET_CONTACTS;
  payload: IContacts[];
}

export interface IPostContacts {
  type: typeof POST_CONTACTS;
  payload: IContacts;
}

export interface IEditContacts {
  type: typeof EDIT_CONTACTS;
  payload: IContacts;
}

export interface IDeletecontacts {
  type: typeof DELETE_CONTACTS;
  payload: IContacts | string;
}

export type IContactsType =
  | IGetcontacts
  | IPostContacts
  | IEditContacts
  | IDeletecontacts;
