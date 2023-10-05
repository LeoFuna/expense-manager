import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionRepository } from "@/interfaces/repositories/TransactionRepository";
import { ITransactionService, TransactionToCreate } from "@/interfaces/services/TransactionService";


export default class TransactionService implements ITransactionService {
  constructor(private readonly transactionRepository: ITransactionRepository) {}

  async create(email: string, transactionData: TransactionToCreate): Promise<{ id: string }> {
    const transaction: ITransaction = {
      ...transactionData,
      operationType: transactionData.amountInCents > 0 ? "income" : "outcome",
      monthInNumber: new Date(transactionData.createdAt).getMonth(),
    }
    const transactionCreated = await this.transactionRepository.create(email, transaction);

    return transactionCreated;
  }

  async index(email: string, month: number, year: number): Promise<ITransaction[]> {
    const transactions = await this.transactionRepository.index(email, { month, year });

    return transactions;
  }

  async getBalance(email: string, month: number, year: number): Promise<{ totalIncomeInCents: number; totalOutcomeInCents: number; }> {
    const transactions = await this.index(email, month, year);
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