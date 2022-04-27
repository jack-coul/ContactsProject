import { IContacts } from "./../interfaces";

export const EditData = (data: IContacts[], post: IContacts) => {
  const newData = data.map((item) => (item._id === post._id ? post : item));
  return newData;
};

export const DeleteData = (data: IContacts[], id: string) => {
  const newData = data.filter((item) => item._id !== id);
  return newData;
};
