import React from "react";

import { AppLayout } from "@/layouts";
import { AccountVm, CreateAccountVm } from "./account.vm";
import { AccountFormComponent } from "./components";
import classes from "./account.page.module.css";
import { saveAccount } from "./api/account.api";
const accountMock: AccountVm[] = [
  { type: "1", name: "Cuenta principal" },
  { type: "2", name: "Cuenta ahorro" },
  { type: "3", name: "Cuenta nómina" },
];

export const AccountPage: React.FC = () => {
  const [account, setAccount] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    setAccount(accountMock);
  }, []);

  const handleCreateAccount = (accountInfo: AccountVm) => {
    const newAccount: CreateAccountVm = {
      type: accountInfo.type,
      name: accountInfo.name,
    };
    saveAccount(newAccount).then((result) => {
      if (result) {
        alert("Cuenta creada con éxito");
      } else {
        alert("Error al crear la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <br />
        <AccountFormComponent
          accountList={account}
          onAccount={handleCreateAccount}
        />
      </div>
    </AppLayout>
  );
};
