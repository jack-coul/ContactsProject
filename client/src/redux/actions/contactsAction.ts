import {
  DELETE_CONTACTS,
  GET_CONTACTS,
  POST_CONTACTS,
  EDIT_CONTACTS,
  IGetcontacts,
  IDeletecontacts,
  IEditContacts,
  IPostContacts,
  ICForm,
} from "../types/contactTypes";
import { ALERT, IAlertType } from "../types/alertTypes";
import { Dispatch } from "react";
import { API } from "../../api";
import { IContacts } from "../../interfaces";

export const getContacts =
  () =>
  async (dispatch: Dispatch<IGetcontacts | IAlertType>,) => {
    try {
      dispatch({
        type: ALERT,
        payload: {
          loading: true,
        },
      });

      const res = await API.get("contacts");
      dispatch({
        type: ALERT,
        payload: {
          loading: false,
        },
      });

      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: {
          errors: error.response.data.msg,
          loading: false,
        },
      });
    }
  };

export const postContact =
  (data: ICForm) => async (dispatch: Dispatch<IPostContacts | IAlertType>) => {
    try {
      dispatch({
        type: ALERT,
        payload: {
          loading: true,
        },
      });

      const res = await API.post("contact", data);
      dispatch({ type: POST_CONTACTS, payload: res.data });
      dispatch({
        type: ALERT,
        payload: {
          loading: false,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: {
          errors: error.response.data.msg,
          loading: false,
        },
      });
    }
  };

export const editContacts =
  (data: IContacts) =>
  async (dispatch: Dispatch<IEditContacts | IAlertType>) => {
    try {
      dispatch({
        type: ALERT,
        payload: {
          loading: true,
        },
      });
      const res = await API.patch(`contact/${data._id}`, data);
      dispatch({
        type: EDIT_CONTACTS,
        payload: res.data,
      });
      dispatch({
        type: ALERT,
        payload: {
          loading: false,
        },
      });
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: {
          errors: error.response.data.msg,
          loading: false,
        },
      });
    }
  };

export const deleteContact =
  (id: string) => async (dispatch: Dispatch<IDeletecontacts | IAlertType>) => {
    try {
      dispatch({ type: DELETE_CONTACTS, payload: id });
      await API.delete(`contact/${id}`);
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: {
          errors: error.response.data.msg,
        },
      });
    }
  };
