import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionRepository } from "@/interfaces/repositories/TransactionRepository";
import { ITransactionService } from "@/interfaces/services/TransactionService";


export default class TransactionService implements ITransactionService {
  constructor(private readonly transactionRepository: ITransactionRepository) {}

  async create(email: string, transaction: ITransaction): Promise<ITransaction> {
    const transactionCreated = await this.transactionRepository.create(email, transaction);

    return transactionCreated;
  }

  async index(email: string): Promise<ITransaction[]> {
    const transactions = await this.transactionRepository.index(email);

    return transactions;
  }

  async getTransactionBalance(email: string, month: number): Promise<{ totalIncomeInCents: number; totalOutcomeInCents: number; }> {
    const transactions = await this.index(email);
    const transactionsFromMonth = transactions.filter(transaction => new Date(transaction.createdAt).getMonth() === month);
    let totalIncomeInCents = 0;
    let totalOutcomeInCents = 0;

    transactionsFromMonth.map((transaction) => {
      if (transaction.amountInCents > 0) {
        totalIncomeInCents += transaction.amountInCents;
      } else {
        totalOutcomeInCents += transaction.amountInCents;
      }
    });

    return {
      totalIncomeInCents,
      totalOutcomeInCents,
    };
  }
  


}