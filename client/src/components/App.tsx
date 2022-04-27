import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../hooks/useTypeDispatch";
import { useTypesSelector } from "../hooks/useTypeSelector";
import { getContacts } from "../redux/actions/contactsAction";
import About from "./About";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import Navbar from "./Navbar";
import Signin from "./Signin";

const App: React.FC = () => {
  const { token } = useTypesSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  if (token) {
    return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/add/contact" element={<ContactForm />} />
            <Route path="/signin" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/add/contact" element={<ContactForm />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
