import React, { useContext } from "react";
import { Context } from "../store/appContext";

const ClickMe = () => {
  const { store, actions } = useContext(Context);
  const handleCreateUser = () => actions.createUserButton();

  return (
    <div className="text-center mt-3">
      <p className="mb-1">En caso de que el usuario se elimine</p>
      <button className="btn btn-sm btn-danger" onClick={handleCreateUser}>
        Click me!
      </button>
    </div>
  );
};

export default ClickMe;
