import TransactionController from "@/controllers/TransactionController";
import AccountRepoFirebase from "@/repositories/AccountRepoFirebase";
import TransactionRepoFirebase from "@/repositories/TransactionRepoFirebase";
import AccountService from "@/services/AccountService";
import TransactionService from "@/services/TransactionService";

export class TransactionControllerFactory {
  createTransactionController() {
    const transactionRepo = new TransactionRepoFirebase();
    const accountRepo = new AccountRepoFirebase();
    const transactionService = new TransactionService(
      transactionRepo,
      new AccountService(accountRepo)
    );
    return new TransactionController(transactionService);
  }
}