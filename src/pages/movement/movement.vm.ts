export interface MovementVm {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}

export const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
