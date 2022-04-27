import { IUserSignin } from "../../interfaces";
import { AUTH, IAuth } from "../types/authTypes";

const initialState: IUserSignin = {
  token: localStorage.getItem("token"),
};

const authReducer = (state = initialState, action: IAuth): IUserSignin => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
