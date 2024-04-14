import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavbarComponent: React.FC = () => {
  const { pathname } = useLocation();

  const isMovementSelectionPage = pathname === routesPrefixes.movements;

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={
            pathname.startsWith(routesPrefixes.accountList)
              ? classes.selected
              : ""
          }
        >
          <Link to={appRoutes.accountList}>Mis cuentas</Link>
        </li>

        {isMovementSelectionPage && (
          <li className={classes.selected}>Movimientos</li>
        )}

        <li
          className={
            pathname.startsWith(routesPrefixes.transfer) ? classes.selected : ""
          } // si el pathname empieza con routePrefixes aplica classes seletec si no no
        >
          <Link to={appRoutes.transfer}>Transferencia</Link>
        </li>
      </ul>
    </nav>
  );
};
