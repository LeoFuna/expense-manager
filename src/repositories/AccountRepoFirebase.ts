import { IAccount, IAccountApi } from "@/interfaces/Account";
import IAccountRepository from "@/interfaces/repositories/AccountRepository";
import { addDoc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { dbAdmin } from "@/db/firebase-admin";
import { accountRef, accountRefByMonth, accountRefByYear, accountsRef } from "@/utils/converters/Account";
import { jointAccountsRef } from "@/utils/converters/JointAccount";

export default class AccountRepoFirebase implements IAccountRepository{
  async index(): Promise<{ email: string }[]> {
    const accounts = await getDocs(accountsRef());

    const accountsList: { email: string }[] = [];
    accounts.forEach((account) => {
      accountsList.push({ email: account.id });
    });

    return accountsList;
  }
  
  async update(email: string, data: IAccountApi, year: number): Promise<{ id: string }> {
    await updateDoc(accountRef(email, year, data.id), {
      balanceInCents: data.balanceInCents,
    });

    return { id: data.id };
  }
  async verifyIfAccountExists(email: string): Promise<boolean> {
    const accounts = await dbAdmin.collection('accounts')
    .doc(email)
    .listCollections()

    return !!accounts.length;
  }

  async show(email: string, year: number, month: number): Promise<IAccountApi | null> {
    const account = await getDocs(
      accountRefByMonth(email, year, month)
    );

    if (!account.docs.length) {
      return null;
    }
    const monthBudget = account.docs[0];

    return monthBudget.data();
  }

  async create(data: IAccount): Promise<IAccount> {
    await addDoc(
      accountRefByYear(data.email, new Date().getFullYear()),
      data
    );

    return data;
  }

  async getJointAccountOwner(email: string): Promise<string | null> {
    const jointAcc = await getDoc(jointAccountsRef(email));

    if (!jointAcc.exists()) {
      return null;
    }
    return jointAcc.data().ownerEmail;
  }
}