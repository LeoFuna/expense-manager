import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { ITransactionCategoryRepo } from "@/interfaces/repositories/TransactionCategoryRepository";
import {
  transactionCategoryRef,
  transactionCategoryRefById,
  transactionCategoryRefByOperationType
} from "@/utils/converters/TransactionCategory";
import { getDoc, getDocs } from "firebase/firestore";

export default class TransactionCategoryRepoFirebase implements ITransactionCategoryRepo {
  async index(operationType?: ITransactionCategory['operationType']): Promise<ITransactionCategory[]> {
    const ref = operationType
      ? transactionCategoryRefByOperationType(operationType)
      : transactionCategoryRef();
    const transactionCategories = await getDocs(ref);;

    const categories: ITransactionCategory[] = [];
    transactionCategories.forEach(docCategory => {
      categories.push({
        ...docCategory.data(),
        id: docCategory.id,
      });
    });

    return categories;
  }
  async show(id: string): Promise<ITransactionCategory | null> {
    const documentRef = transactionCategoryRefById(id);
    const category = await getDoc(documentRef);

    if (!category.exists()) {
      return null;
    }
    return category.data();
  }
}