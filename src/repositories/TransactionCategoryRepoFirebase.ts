
import { db } from "@/db/firebase";
import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { ITransactionCategoryRepo } from "@/interfaces/repositories/TransactionCategoryRepository";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

export default class TransactionCategoryRepoFirebase implements ITransactionCategoryRepo {
  async index(operationType?: ITransactionCategory['operationType']): Promise<ITransactionCategory[]> {
    let transactionCategories
    if (!operationType) {
      const transactionCategoryRef = collection(db, 'transactionCategory');
      transactionCategories = await getDocs(transactionCategoryRef)
    } else {
      const queriedRef = query(
        collection(db, 'transactionCategory'),
        where('operationType', '==', operationType)
      );
      transactionCategories = await getDocs(queriedRef);;
    }

    const categories: ITransactionCategory[] = [];
    transactionCategories.forEach(docCategory => {
      categories.push({
        ...docCategory.data() as ITransactionCategory,
        id: docCategory.id,
      });
    });

    return categories;
  }
  async show(id: string): Promise<ITransactionCategory | null> {
    const documentRef = doc(db, 'transactionCategories', id);
    const category = await getDoc(documentRef);

    if (!category.exists()) {
      return null;
    }
    return category.data() as ITransactionCategory;
  }
  
}