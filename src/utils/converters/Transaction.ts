import { db } from "@/db/firebase";
import { ITransaction } from "@/interfaces/Transaction";
import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  limit,
  orderBy,
  query,
  where
} from "firebase/firestore";

const transactionConverter: FirestoreDataConverter<ITransaction> = {
  toFirestore(transaction: ITransaction): DocumentData {
    return {
      amountInCents: transaction.amountInCents,
      categoryId: transaction.categoryId,
      createdAt: transaction.createdAt,
      monthInNumber: transaction.monthInNumber,
      operationType: transaction.operationType,
      attachment: transaction?.attachment || null,
      description: transaction?.description || '',
    }
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): ITransaction {
    const data = snapshot.data(options)!;

    return {
      id: snapshot.id,
      amountInCents: data.amountInCents,
      categoryId: data.categoryId,
      createdAt: data.createdAt,
      monthInNumber: data.monthInNumber,
      operationType: data.operationType,
      attachment: data?.attachment,
      description: data?.description,
    }
  }
}

export const transactionsRef = (email: string, year: number) =>
  collection(db, 'transactions', email, `${year}`)
  .withConverter(transactionConverter);

export const transactionsRefByMonthLimited = (email: string, year: number, month: number, limitValue = 100) =>
  query(
    transactionsRef(email, year),
    where('monthInNumber', '==', month),
    orderBy('createdAt', 'desc'),
    limit(limitValue)
  ).withConverter(transactionConverter);
