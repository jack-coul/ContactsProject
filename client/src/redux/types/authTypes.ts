import { IAlertType } from "./alertTypes";
import { AppDispatch } from "./../store";
export const AUTH = "auth/fulfilled";

export interface IAuth {
  type: typeof AUTH;
  payload: string;
}

export type MyState = AppDispatch | IAuth | IAlertType;
