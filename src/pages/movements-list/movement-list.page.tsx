import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import {
  Account,
  createDetailAccountEmpty,
  getAccountDetails,
  getMovementList,
} from "./api";

import { mapMovementListFromApiToVm } from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const [movementsList, setMovementList] = useState<MovementVm[]>([]);
  const [detailAccount, setDetailAccount] = React.useState<Account>(
    createDetailAccountEmpty()
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getMovementList(id).then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );
    }
  }, [id]);

  React.useEffect(() => {
    if (id) {
      getAccountDetails(id).then(setDetailAccount);
    }
  }, [id]);

  return (
    <div>
      <AppLayout>
        <div className={classes.root}>
          <div className={classes.headerContainer}>
            <h1>Saldo y útimos Movimientos</h1>
            {detailAccount && (
              <span className={classes.titleBalance}>
                SALDO DISPONIBLE:{" "}
                <span className={classes.textBalance}>
                  {detailAccount.balance}€
                </span>
              </span>
            )}
          </div>
          <div className={classes.aliasContainer}>
            <span>Alias: {detailAccount.name}</span>
            <span>IBAN: {detailAccount.iban}</span>
          </div>

          <MovementListTableComponent movementList={movementsList} />
        </div>
      </AppLayout>
    </div>
  );
};
