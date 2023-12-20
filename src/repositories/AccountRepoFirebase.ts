import { db } from "@/db/firebase";
import { coll } from 'firebase-admin/firestore';
import { IAccount, IAccountApi } from "@/interfaces/Account";
import IAccountRepository from "@/interfaces/repositories/AccountRepository";
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { dbAdmin } from "@/db/firebase-admin";

export default class AccountRepoFirebase implements IAccountRepository{
  async index(): Promise<{ email: string }[]> {
    const accountsRef = collection(db, 'accounts');
    const accounts = await getDocs(accountsRef);

    const accountsList: { email: string }[] = [];
    accounts.forEach((account) => {
      accountsList.push({ email: account.id });
    });

    return accountsList;
  }
  
  async update(email: string, data: IAccountApi, year: number): Promise<{ id: string }> {
    await updateDoc(doc(db, 'accounts', email, `${year}`, data.id), {
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
    const queryRef = query(
      collection(db, 'accounts', email, `${year}`),
      where('monthInNumber', '==', month)
    );
    const account = await getDocs(queryRef);

    if (!account.docs.length) {
      return null;
    }
    const monthBudget = account.docs[0];

    return { id: monthBudget.id, ...monthBudget.data() } as IAccountApi;
  }

  async create(data: IAccount): Promise<IAccount> {
    await addDoc(
      collection(
        db,
        'accounts',
        data.email,
        `${new Date().getFullYear()}`
      ), data)

    return data;
  }

  async getJointAccountOwner(email: string): Promise<string | null> {
    const docRef = doc(db, 'jointAccounts', email);
    const jointAcc = await getDoc(docRef);

    if (!jointAcc.exists()) {
      return null;
    }
    return jointAcc.data()?.ownerEmail;
  }
}