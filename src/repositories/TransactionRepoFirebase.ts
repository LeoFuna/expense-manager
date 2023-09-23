import { dbAdmin } from "@/db/firebase-admin";
import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionRepository } from "@/interfaces/repositories/TransactionRepository";

export default class TransactionRepoFirebase implements ITransactionRepository {
    async index(email: string) {
      const transactions = await dbAdmin.collection('transactions').doc(email).collection('userTransactions').get();
      if (transactions.empty) {
        return [];
      }
      return transactions.docs.map(docTransaction => docTransaction.data()) as ITransaction[];
    }
}