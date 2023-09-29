import { dbAdmin } from "@/db/firebase-admin";
import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionRepository } from "@/interfaces/repositories/TransactionRepository";

export default class TransactionRepoFirebase implements ITransactionRepository {
    async create(email: string, data: ITransaction): Promise<ITransaction> {
      const transaction = await dbAdmin.collection('transactions').doc(email).collection('userTransactions').add(data);
      
      return data;
    }
    async index(email: string) {
      const transactions = await dbAdmin.collection('transactions').doc(email).collection('userTransactions').get();
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