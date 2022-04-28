import { Dispatch } from "react";
import { API } from "../../api";
import { IUserData } from "../../interfaces";
import { ALERT, IAlertType } from "../types/alertTypes";
import { AUTH, IAuth } from "../types/authTypes";

export const login =
  (data: IUserData) => async (dispatch: Dispatch<IAuth | IAlertType>) => {
    try {
      dispatch({
        type: ALERT,
        payload: {
          loading: true,
        },
      });
      const res = await API.post("login", data);
      dispatch({ type: AUTH, payload: res.data.token });
      dispatch({
        type: ALERT,
        payload: {
          loading: false,
        },
      });
      localStorage.setItem("token", res.data.token);
    } catch (err: any) {
      dispatch({
        type: ALERT,
        payload: {
          loading: false,
          errors: err.response.data.msg,
        },
      });
    }
  };

export const logout = () => {
  return async (dispatch: Dispatch<IAuth>) => {
    dispatch({ type: AUTH, payload: "" });
    localStorage.removeItem("token");
  };
};
