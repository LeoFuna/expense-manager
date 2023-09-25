import { dbAdmin } from "@/db/firebase-admin";
import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { ITransactionCategoryRepo } from "@/interfaces/repositories/TransactionCategoryRepository";

export default class TransactionCategoryRepoFirebase implements ITransactionCategoryRepo {
  async show(id: string): Promise<ITransactionCategory | null> {
    const category = await dbAdmin.collection("transactionCategories").doc(id).get();
    if (!category.exists) {
      return null;
    }
    return category.data() as ITransactionCategory;
  }

}