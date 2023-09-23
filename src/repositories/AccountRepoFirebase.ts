import { dbAdmin } from "@/db/firebase-admin";
import { IAccount } from "@/interfaces/Account";
import IAccountRepository from "@/interfaces/repositories/AccountRepository";

export default class AccountRepoFirebase implements IAccountRepository{
  async show(email: string): Promise<IAccount | null> {
    const account = await dbAdmin.collection('accounts').doc(email).get();

    if (!account.exists) {
      return null;
    }
    return account.data() as IAccount;
  }
  async create(data: IAccount): Promise<IAccount> {
    await dbAdmin.collection('accounts').doc(data.email).set(data);

    return data;
  }
}