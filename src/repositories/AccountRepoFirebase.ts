import { dbAdmin } from "@/db/firebase-admin";
import { IAccount } from "@/interfaces/Account";
import IAccountRepository from "@/interfaces/repositories/AccountRepository";

export default class AccountRepoFirebase implements IAccountRepository{
  async verifyIfAccountExists(email: string): Promise<boolean> {
    const account = await dbAdmin.collection('accounts')
    .doc(email)
    .get();

    return account.exists;
  }

  async show(email: string, year: number, month: number): Promise<IAccount | null> {
    const account = await dbAdmin.collection('accounts')
      .doc(email)
      .collection(`${year}`)
      .where('monthInNumber', '==', month)
      .get();

    if (!account.docs.length) {
      return null;
    }
    const monthBudget = account.docs[0];
    
    return monthBudget.data() as IAccount;
  }

  async create(data: IAccount): Promise<IAccount> {
    await dbAdmin.collection('accounts').doc(data.email)
      .collection(`${new Date().getFullYear()}`).add(data);

    return data;
  }
}