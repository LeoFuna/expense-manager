import { dbAdmin } from "@/db/firebase-admin";
import { IAccount } from "@/interfaces/Account";
import IAccountRepository from "@/interfaces/repositories/AccountRepository";

export default class AccountRepoFirebase implements IAccountRepository{
  async show(email: string): Promise<IAccount | null> {
    const account = await dbAdmin.collection('accounts')
      .doc(email)
      .collection('2023')
      .where('monthInNumber', '==', 9)
      .get();

    if (!account.docs.length) {
      return null;
    }
    const mainAccount = account.docs[0];

    return mainAccount.data() as IAccount;
  }
  async create(data: IAccount): Promise<IAccount> {
    await dbAdmin.collection('accounts').doc(data.email).set(data);

    return data;
  }
}