import React from "react";
import { appRoutes } from "@/core/router";
import { Link } from "react-router-dom";

export const CreateAccountPage: React.FC = () => {
  return (
    <div>
      Add Account
      <br />
      <Link to={appRoutes.createAccount}>Agregar Cuenta Laboratorio</Link>
    </div>
  );
};
