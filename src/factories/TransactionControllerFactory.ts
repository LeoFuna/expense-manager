import TransactionController from "@/controllers/TransactionController";
import AccountRepoFirebase from "@/repositories/AccountRepoFirebase";
import TransactionCategoryRepoFirebase from "@/repositories/TransactionCategoryRepoFirebase";
import TransactionRepoFirebase from "@/repositories/TransactionRepoFirebase";
import AccountService from "@/services/AccountService";
import TransactionService from "@/services/TransactionService";

export class TransactionControllerFactory {
  createTransactionController() {
    const transactionRepo = new TransactionRepoFirebase(new TransactionCategoryRepoFirebase());
    const accountRepo = new AccountRepoFirebase();
    const transactionService = new TransactionService(
      transactionRepo,
      new AccountService(accountRepo)
    );
    return new TransactionController(transactionService);
  }
}