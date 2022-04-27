export const ALERT = "global/alert";

export interface IAlert {
  loading?: boolean;
  success?: string | string[];
  errors?: string | string[];
}

export interface IAlertType {
  type: typeof ALERT;
  payload: IAlert;
}
