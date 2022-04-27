import React, { FormEvent, useState } from "react";
import { login } from "../redux/actions/authAction";
import { IUserData } from "../interfaces";
import { useAppDispatch } from "../hooks/useTypeDispatch";

export interface IAuthF {
  login: (data: object) => void;
}

const Signin: React.FC = () => {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<IUserData>({
    login: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(userData));
  };
  return (
    <div className="row m0a">
      <form className="col s12" onSubmit={handleLogin}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="last_name"
              type="text"
              name="login"
              className="validate"
              placeholder="login"
              value={userData.login}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="password"
              type="password"
              name="password"
              className="validate"
              placeholder="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="waves-effect waves-light btn" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Signin;
