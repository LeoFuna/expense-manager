import { dbAdmin } from "@/db/firebase-admin";
import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionCategoryRepo } from "@/interfaces/repositories/TransactionCategoryRepository";
import { ITransactionRepository } from "@/interfaces/repositories/TransactionRepository";

export default class TransactionRepoFirebase implements ITransactionRepository {
    constructor(private transactionCategoryRepoFirebase: ITransactionCategoryRepo) {}
    async create(email: string, data: ITransaction): Promise<{ id: string }> {
      const year = new Date(data.createdAt).getFullYear();
      const transaction = await dbAdmin.collection('transactions')
        .doc(email)
        .collection(String(year))
        .add(data);

      return { id: transaction.id };
    }

    async index(email: string, { month, year, limit = 100 }: { month: number; year: number, limit?: number }) {
      const transactions = await dbAdmin.collection('transactions')
        .doc(email)
        .collection(String(year))
        .where('monthInNumber', '==', month)
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();
      if (transactions.empty) {
        return [];
      }

      const categories = await this.transactionCategoryRepoFirebase.index();

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