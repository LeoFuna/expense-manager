import TransactionCategoryController from "@/controllers/TransactionCategoryController";
import TransactionCategoryRepoFirebase from "@/repositories/TransactionCategoryRepoFirebase";
import TransactionCategoryService from "@/services/TransactionCategoryService";

export class TransactionCategoryControllerFactory {
  createTransactionCategoryController() {
    const transactionCategoryRepo = new TransactionCategoryRepoFirebase();
    const transactionCategoryService = new TransactionCategoryService(transactionCategoryRepo);
    return new TransactionCategoryController(transactionCategoryService);
  }
}