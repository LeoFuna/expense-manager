export interface IAccount {
  email: string;
  name?: string;
  balanceInCents: number;
  monthInNumber: number;
}

export interface IAccountApi extends IAccount {
  id: string;
}