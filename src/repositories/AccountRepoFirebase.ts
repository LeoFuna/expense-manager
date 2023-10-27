import { dbAdmin } from "@/db/firebase-admin";
import { IAccount, IAccountApi } from "@/interfaces/Account";
import IAccountRepository from "@/interfaces/repositories/AccountRepository";

export default class AccountRepoFirebase implements IAccountRepository{
  async index(): Promise<{ email: string }[]> {
    const accounts = await dbAdmin.collection('accounts').get();
    return accounts.docs.map(account => ({ email: account.id }));
  }
  
  async update(email: string, data: IAccountApi, year: number): Promise<{ id: string }> {
    await dbAdmin.collection('accounts')
      .doc(email)
      .collection(`${year}`)
      .doc(data.id)
      .update({ balanceInCents: data.balanceInCents });

    return { id: data.id };
  }
  async verifyIfAccountExists(email: string): Promise<boolean> {
    const accounts = await dbAdmin.collection('accounts')
    .doc(email)
    .listCollections()

    return !!accounts.length;
  }

  async show(email: string, year: number, month: number): Promise<IAccountApi | null> {
    const account = await dbAdmin.collection('accounts')
      .doc(email)
      .collection(`${year}`)
      .where('monthInNumber', '==', month)
      .get();

    if (!account.docs.length) {
      return null;
    }
    const monthBudget = account.docs[0];

    return { id: monthBudget.id, ...monthBudget.data() } as IAccountApi;
  }

  async create(data: IAccount): Promise<IAccount> {
    await dbAdmin.collection('accounts').doc(data.email)
      .collection(`${new Date().getFullYear()}`).add(data);

    return data;
  }
}