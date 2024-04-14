export interface AccountVm {
  type: string;
  name: string;
}
export interface CreateAccountVm {
  type: string;
  name: string;
}

export const createEmptyCreateAccountVM = (): CreateAccountVm => ({
  type: "",
  name: "",
});

export interface AccountError {
  type: string;
  name: string;
}

export const createEmptyAccountError = (): AccountError => ({
  type: "",
  name: "",
});
