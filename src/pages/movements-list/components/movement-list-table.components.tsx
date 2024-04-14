import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component.module";

interface Props {
  movementList: MovementVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;
  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>FECHA</span>
            <span className={classes.headerCell}>FECHA VALOR</span>
            <span className={classes.headerCell}>DESCRIPTION</span>
            <span className={classes.headerCell}>IMPORTE</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          </div>
          {movementList.map((movements) => (
            <MovementListItemComponent
              key={movements.id}
              movementItem={movements}
            />
          ))}
        </div>
      </div>
    </>
  );
};
