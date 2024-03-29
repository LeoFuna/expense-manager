import { db } from "@/db/firebase";
import { IAccount, IAccountApi } from "@/interfaces/Account";
import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  doc,
  query,
  where
} from "firebase/firestore";

const accountsConverter: FirestoreDataConverter<{ id?: string }> = {
  toFirestore(account: { id?: string }): DocumentData {
    return {
      id: account?.id,
    };
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
  ): { id?: string } {
    return {
      id: snapshot.id,
    };
  },
}

const accountConverter: FirestoreDataConverter<IAccountApi> = {
  toFirestore(account: IAccountApi): DocumentData {
    const dataToFirestore: IAccount = {
      balanceInCents: account.balanceInCents,
      monthInNumber: account.monthInNumber,
      email: account.email,
    }

    if (account?.name) dataToFirestore.name = account.name;

    return dataToFirestore;
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): IAccountApi {
    const data = snapshot.data(options)!;
    return {
      id: snapshot.id,
      balanceInCents: data.balanceInCents,
      email: data.email,
      monthInNumber: data.monthInNumber,
      name: data?.name || null,
    };
  },
}

export const accountsRef = () => query(
    collection(db, 'accounts'),
    where('active', '==', true)
  )
  .withConverter(accountsConverter);

export const accountRef = (email: string, year: number, id: string) => 
  doc(db, 'accounts', email, `${year}`, id)
  .withConverter(accountConverter);

export const accountRefByYear = (email: string, year: number) =>
  collection(db, 'accounts', email, `${year}`)
  .withConverter(accountConverter);

export const accountRefByMonth = (email: string, year: number, month: number) =>
  query(
    accountRefByYear(email, year),
    where('monthInNumber', '==', month)
  ).withConverter(accountConverter);

