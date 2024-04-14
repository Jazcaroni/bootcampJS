export interface MovementVm {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}
export interface MovementListPageProps {
  accountId: string;
}
