export interface Account {
  id: string;
  name: string;
  iban: string;
  balance: string;
}

export const createDetailAccountEmpty = (): Account => ({
  id: "",
  name: "",
  iban: "",
  balance: "",
});
