import { DeleteData, EditData } from "../../helpers";
import { IContactsState } from "../../interfaces";
import {
  GET_CONTACTS,
  POST_CONTACTS,
  EDIT_CONTACTS,
  DELETE_CONTACTS,
  IContactsType,
} from "../types/contactTypes";
const initialState: IContactsState = {
  loading: false,
  contacts: [],
  error: null,
};

const contactReducer = (
  state = initialState,
  action: IContactsType
): IContactsState => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: [...action.payload],
      };

    case POST_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case EDIT_CONTACTS:
      return {
        ...state,
        contacts: EditData(state.contacts, action.payload),
      };
    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: DeleteData(state.contacts, String(action.payload)),
      };

    default:
      return state;
  }
};

export default contactReducer;
