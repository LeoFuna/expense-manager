import { IAccount } from "@/interfaces/Account";
import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionRepository } from "@/interfaces/repositories/TransactionRepository";
import { IAccountService } from "@/interfaces/services/AccountService";
import { ITransactionService, TransactionToCreate } from "@/interfaces/services/TransactionService";


export default class TransactionService implements ITransactionService {
  constructor(
    private readonly transactionRepository: ITransactionRepository,
    private readonly accountService: IAccountService,
  ) {}

  async create(email: string, transactionData: TransactionToCreate): Promise<{ id: string }> {
    // TO DO: validaçoes básicas...implementar validaçoes mais robustas.
    if (transactionData.amountInCents === 0) {
      throw new Error("Amount in cents can't be zero");
    }
    if (transactionData.categoryId === '0') {
      throw new Error("Transaction Category is required!");
    }
    const createdAtDate = new Date(transactionData.createdAt);
    const transaction: ITransaction = {
      ...transactionData,
      operationType: transactionData.amountInCents > 0 ? "income" : "outcome",
      monthInNumber: createdAtDate.getMonth(),
    }
    const transactionCreated = await this.transactionRepository.create(email, transaction);
    const dataToUpdate = { balanceInCents: transactionData.amountInCents } as IAccount;
    await this.accountService.update(
      email,
      dataToUpdate,
      createdAtDate.getFullYear(),
      createdAtDate.getMonth()
    );

    return transactionCreated;
  }

  async index(email: string, month: number, year: number, limit?: number): Promise<ITransaction[]> {
    const transactions = await this.transactionRepository.index(email, { month, year, limit });

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