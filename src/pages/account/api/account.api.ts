import Axios from "axios";
import { Account, CreateAccount } from "./account.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (
  account: CreateAccount
): Promise<Account> => // ver si tiene que ser boolean?
  Axios.post<Account>(urlAccount, account)
    .then(({ data }) => data)
    .catch((error) => {
      console.error("Error al guardar la cuenta:", error);
      throw error;
    });
