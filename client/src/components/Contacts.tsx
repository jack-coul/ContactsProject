import React, { useState } from "react";
import { useAppDispatch } from "../hooks/useTypeDispatch";
import { useTypesSelector } from "../hooks/useTypeSelector";
import { deleteContact, editContacts } from "../redux/actions/contactsAction";
import { ICForm } from "../redux/types/contactTypes";

const Contacts: React.FC = () => {
  const { contacts } = useTypesSelector((state) => state.contacts);
  const { loading } = useTypesSelector((state) => state.alert);
  const dispatch = useAppDispatch();
  const [editContactData, setEditContactData] = useState<ICForm>({
    name: "",
    phone: "",
  });
  const [id, setId] = useState<string>("");

  const [editContact, setEditContact] = useState<boolean>(false);

  const handleSwitchModal = (id: string) => {
    setEditContact(true);
    setId(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditContactData({ ...editContactData, [name]: value });
  };

  const handleEditContact = async () => {
    const newData = {
      ...editContactData,
      _id: id,
    };
    await dispatch(editContacts(newData));
    setEditContact(false);
  };

  const handleDeleteContact = (id: string) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className="divContainer">
      {loading ? (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      ) : (
        <ul className="collection">
          {contacts.map((contact) => {
            return (
              <li className="collection-item avatar" key={contact._id}>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="circle"
                />
                <span className="title">
                  <i className="material-icons">person </i>{" "}
                  <span>{contact.name}</span>
                </span>
                <p className="phone">
                  <i className="material-icons">phone </i>{" "}
                  <span>{contact.phone}</span>
                </p>
                <a href="#!" className="secondary-content">
                  <i
                    className="material-icons"
                    onClick={() => {
                      handleSwitchModal(contact._id);
                      setEditContactData({
                        name: contact.name,
                        phone: contact.phone,
                      });
                    }}
                  >
                    edit
                  </i>
                  <i
                    onClick={() => handleDeleteContact(contact._id)}
                    className="material-icons"
                  >
                    delete
                  </i>
                </a>
              </li>
            );
          })}
        </ul>
      )}
      {editContact && (
        <div className="modalContact">
          <div className="input-field col s6">
            <input
              placeholder="Введите имя"
              id="first_name"
              name="name"
              type="text"
              className="validate"
              onChange={handleChange}
              value={editContactData.name}
            />
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              type="text"
              name="phone"
              className="validate"
              placeholder="Введите номер"
              onChange={handleChange}
              value={String(editContactData.phone)}
            />
          </div>
          <button
            className="waves-effect waves-light btn"
            onClick={handleEditContact}
          >
            Изменить
          </button>
          <span className="close" onClick={() => setEditContact(false)}>
            закрыть
          </span>
        </div>
      )}
    </div>
  );
};

export default Contacts;
