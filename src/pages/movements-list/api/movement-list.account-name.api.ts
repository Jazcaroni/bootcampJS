import { Account } from "./movement-list.account-name.api-model";

export const getAccountDetails = (accountId: string): Promise<Account> => {
  const urlAccount = `${
    import.meta.env.VITE_BASE_API_URL
  }/account-list/${accountId}`;

  return fetch(urlAccount).then((response) => response.json());
};
