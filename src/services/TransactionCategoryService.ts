import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { ITransactionCategoryRepo } from "@/interfaces/repositories/TransactionCategoryRepository";
import { ITransactionCategoryService } from "@/interfaces/services/TransactionCategoryService";

export default class TransactionCategoryService implements ITransactionCategoryService {
  constructor(private readonly transactionCategoryRepo: ITransactionCategoryRepo) {}

  async show(id: string): Promise<ITransactionCategory | null> {
    const category = await this.transactionCategoryRepo.show(id);

    return category;
  }
}