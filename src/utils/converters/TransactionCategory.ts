import { db } from "@/db/firebase";
import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import {
  FirestoreDataConverter,
  collection,
  doc,
  query,
  where,
  QueryDocumentSnapshot,
  SnapshotOptions,
  DocumentData
} from "firebase/firestore";

const transactionCategoryConverter: FirestoreDataConverter<ITransactionCategory> = {
  toFirestore(transactionCategory: ITransactionCategory): DocumentData {
    return transactionCategory;
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): ITransactionCategory {
    const data = snapshot.data(options)!;
    return {
      id: snapshot.id,
      iconName: data.iconName,
      name: data.name,
      operationType: data.operationType,
    };
  }
}

export const transactionCategoryRef = () => collection(db, 'transactionCategory')
  .withConverter(transactionCategoryConverter);

export const transactionCategoryRefByOperationType = (operationType: ITransactionCategory['operationType']) =>
  query(
    transactionCategoryRef(),
    where('operationType', '==', operationType)
  ).withConverter(transactionCategoryConverter);

export const transactionCategoryRefById = (id: string) => 
    doc(transactionCategoryRef(), id)
    .withConverter(transactionCategoryConverter);