import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import auth from "./reducers/authReducer";
import contacts from "./reducers/contactsReducer";
import alert from "./reducers/alertReducer";
import { IAlertType } from "./types/alertTypes";
import { IAuth } from "./types/authTypes";

const combineRouter = combineReducers({
  auth,
  contacts,
  alert,
});

const store = legacy_createStore(
  combineRouter,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof combineRouter>;
export type AppDispatch = ThunkDispatch<RootState, void, IAuth | IAlertType>;

export default store;
