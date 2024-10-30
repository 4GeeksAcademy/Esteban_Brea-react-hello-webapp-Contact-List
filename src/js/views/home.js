import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClickMe from "../component/clickMe";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getContacts();
  }, []);

  useEffect(() => {
    setContacts(store.contacts);
  }, [store.contacts]); //que solo se ejecute cuando sea necesario, es decir que haya el cambio en store.contacts

  return (
    <div className="container">
      <ClickMe/>
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-dark"
          onClick={() => {
            actions.setSelectedContact(null);
            navigate("/new-contact");
          }}
        >
          Add new contact
        </button>
      </div>
      {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
        store.contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))
      ) : (
        <p className="text-center">
          No contacts available
          <FontAwesomeIcon icon={faUserSlash} />
        </p>
      )}
    </div>
  );
};
