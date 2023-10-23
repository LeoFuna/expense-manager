import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { ITransactionCategoryRepo } from "@/interfaces/repositories/TransactionCategoryRepository";
import { ITransactionCategoryService } from "@/interfaces/services/TransactionCategoryService";

export default class TransactionCategoryService implements ITransactionCategoryService {
  constructor(private readonly transactionCategoryRepo: ITransactionCategoryRepo) {}
  async index(operationType: ITransactionCategory['operationType']): Promise<ITransactionCategory[]> {
    const categories = await this.transactionCategoryRepo.index(operationType);

    return categories;
  }

  async show(id: string): Promise<ITransactionCategory | null> {
    const category = await this.transactionCategoryRepo.show(id);

    return category;
  }
}