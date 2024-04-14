import React from "react";
import {
  AccountError,
  AccountVm,
  CreateAccountVm,
  createEmptyAccountError,
  createEmptyCreateAccountVM,
} from "../account.vm";
import { GenericHTMLFormElement } from "axios";
import classes from "./account-form.component.module.css";
import { validateForm } from "../validations/account-form.validation";

interface Props {
  accountList: AccountVm[];
  onAccount: (accountInfo: CreateAccountVm) => void;
}
export const AccountFormComponent: React.FC<Props> = (props) => {
  const { accountList, onAccount } = props;
  const [account, setAccount] = React.useState<CreateAccountVm>(
    createEmptyCreateAccountVM()
  );
  const [errors, setErrors] = React.useState<AccountError>(
    createEmptyAccountError()
  );

  const handleSubmit = (e: React.FormEvent<GenericHTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onAccount(account);
    }
    onAccount(account);
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta: </label>
            <select
              name="type"
              onChange={handleFieldChange}
              value={account.type}
              className={classes.medium}
            >
              {accountList.map((account) => (
                <option key={account.type} value={account.type}>
                  {account.name}
                </option>
              ))}
              <option value="">Seleccione una cuenta</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              name="name"
              onChange={handleFieldChange}
              value={account.name}
              className={classes.medium}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button type="submit" className={classes.button}>
          GUARDAR
        </button>
      </form>
    </div>
  );
};
