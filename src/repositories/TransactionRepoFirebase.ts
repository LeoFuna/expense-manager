
import { db } from "@/db/firebase";
import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionCategoryRepo } from "@/interfaces/repositories/TransactionCategoryRepository";
import { ITransactionRepository } from "@/interfaces/repositories/TransactionRepository";
import { addDoc, collection, orderBy, query, where, limit, getDocs } from "firebase/firestore";

export default class TransactionRepoFirebase implements ITransactionRepository {
    constructor(private transactionCategoryRepoFirebase: ITransactionCategoryRepo) {}
    async create(email: string, data: ITransaction): Promise<{ id: string }> {
      const year = new Date(data.createdAt).getFullYear();
      const transactionsRef = collection(db, 'transactions', email, `${year}`);
      const transaction = await addDoc(transactionsRef, data);

      return { id: transaction.id };
    }

    async index(email: string, { month, year, limit: limitValue = 100 }: { month: number; year: number, limit?: number }) {
      const queriedRef = query(
        collection(db, 'transactions', email, `${year}`),
        where('monthInNumber', '==', month),
        orderBy('createdAt', 'desc'),
        limit(limitValue)
      );
      const transactions = await getDocs(queriedRef);

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