import { dbAdmin } from "@/db/firebase-admin";
import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { ITransactionCategoryRepo } from "@/interfaces/repositories/TransactionCategoryRepository";

export default class TransactionCategoryRepoFirebase implements ITransactionCategoryRepo {
  async index(operationType: ITransactionCategory['operationType']): Promise<ITransactionCategory[]> {
    const transactionCategories = await dbAdmin.collection('transactionCategory')
      .where('operationType', '==', operationType)
      .get();
    const categories = transactionCategories.docs.map(docCategory => {
      return {
        ...docCategory.data() as ITransactionCategory,
        id: docCategory.id,
      }
    });

    return categories;
  }
  async show(id: string): Promise<ITransactionCategory | null> {
    const category = await dbAdmin.collection("transactionCategories").doc(id).get();
    if (!category.exists) {
      return null;
    }
    return category.data() as ITransactionCategory;
  }
  
}