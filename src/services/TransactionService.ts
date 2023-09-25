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

}