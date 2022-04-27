import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useTypeDispatch";
import { postContact } from "../redux/actions/contactsAction";
import { ICForm } from "../redux/types/contactTypes";

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [addContactData, setAddContactData] = useState<ICForm>({
    name: "",
    phone: "",
  });
  const { name, phone } = addContactData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddContactData({ ...addContactData, [name]: value });
  };

  const handleAddContact = async () => {
    if (!name && !phone) return;
    await dispatch(postContact(addContactData));
    navigate("/");
  };

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s4">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="icon_prefix"
              name="name"
              type="text"
              className="validate"
              placeholder="First Name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="input-field col s4">
            <i className="material-icons prefix">phone</i>
            <input
              id="icon_telephone"
              type="tel"
              name="phone"
              className="validate"
              placeholder="Telephone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <a
              className="waves-effect waves-light btn modal-trigger mt15"
              href="#modal1"
              onClick={handleAddContact}
            >
              Добавить
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
