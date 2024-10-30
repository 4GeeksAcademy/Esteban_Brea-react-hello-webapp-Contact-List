import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewContact = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (store.selectedContact) {
      setContact(store.selectedContact);
    }
  }, [store.selectedContact]); //Solo se ejecute cuando se selecciona el contacta

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.id]: event.target.value });
  };

  const handleSave = () => {
    contact.id ? actions.editContact(contact) : actions.addContact(contact);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="mb-3">
        <h1>
          <FontAwesomeIcon icon={faAddressCard} />
          {contact.id ? "Edit Contact" : "Add a new contact"}
        </h1>
        <form>
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            value={contact.name}
            onChange={handleChange}
          />
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            value={contact.email}
            onChange={handleChange}
          />
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
            value={contact.phone}
            onChange={handleChange}
          />
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address"
            value={contact.address}
            onChange={handleChange}
          />
          <button
            className="btn btn-dark mt-3 w-100"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
        <a href="/" className="d-block mt-3">
          or get back to contacts
        </a>
      </div>
    </div>
  );
};

export default NewContact;
