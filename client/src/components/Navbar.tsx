import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/useTypeDispatch";
import { useTypesSelector } from "../hooks/useTypeSelector";
import { logout } from "../redux/actions/authAction";

const Navbar: React.FC = () => {
  const { token } = useTypesSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav>
      <div className="nav-wrapper teal darken-2 px1">
        <Link to="/" className="brand-logo">
          React + Typescript
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/about">О нас</Link>
          </li>
          {token && (
            <>
              <li>
                <Link to="/">Список контактов</Link>
              </li>
              <li>
                <Link to="/add/contact">Добавить контакт</Link>
              </li>
              <li>
                <button className="exit" onClick={handleLogout}>
                  Выйти
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
