import { dbAdmin } from "@/db/firebase-admin";
import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionRepository } from "@/interfaces/repositories/TransactionRepository";

export default class TransactionRepoFirebase implements ITransactionRepository {
    async create(email: string, data: ITransaction): Promise<{ id: string }> {
      const year = new Date(data.createdAt).getFullYear();
      const transaction = await dbAdmin.collection('transactions')
        .doc(email)
        .collection(String(year))
        .add(data);

      return { id: transaction.id };
    }

    async index(email: string, { month, year }: { month: number; year: number }) {
      const transactions = await dbAdmin.collection('transactions')
        .doc(email)
        .collection(String(year))
        .where('monthInNumber', '==', month).get();
      if (transactions.empty) {
        return [];
      }
      const transactionCategories = await dbAdmin.collection('transactionCategory').get();
      const categories = transactionCategories.docs.map(docCategory => {
        return {
          ...docCategory.data(),
          id: docCategory.id,
        }
      });

      return transactions.docs.map(docTransaction => {
        const transaction = docTransaction.data() as ITransaction;
        const categoryFromTransaction = categories.find(category => category.id === transaction.categoryId);
        return {
          ...transaction,
          id: docTransaction.id,
          category: categoryFromTransaction
        }
      });
    }
}