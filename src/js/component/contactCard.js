import React, { useContext, useState } from "react";
import imgWorker from "../../img/worker.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrash,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Modal from "./modal";

const ContactCard = ({ contact }) => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => {
    actions.setSelectedContact(contact);
    navigate("/new-contact");
  };

  const handleDelete = () => setShowModal(true);

  const confirmDelete = () => {
    actions.deleteContact(contact.id);
    setShowModal(false);
  };

  return (
    <>
      <div
        className="card container my-3 position-relative"
        style={{
          maxWidth: "100%",
          padding: "15px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <div className="position-absolute top-0 end-0 mt-2 me-2 d-flex gap-2">
          <button type="button" className="btn" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button type="button" className="btn" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <div className="row g-0 align-items-center">
          <div className="col-md-3 d-flex justify-content-center">
            <img
              src={imgWorker}
              className="img-fluid rounded-circle"
              alt="cat worker"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-9 ps-3">
            <div className="card-body p-0">
              <h5 className="card-title mb-1">{contact.name}</h5>
              <p className="card-text mb-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                {contact.address}
              </p>
              <p className="card-text mb-1">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                {contact.phone}
              </p>
              <p className="card-text mb-0">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                {contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          title="Are you sure?"
          body="If you delete this thing the entire universe will go down!"
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ContactCard;
