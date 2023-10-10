import AccountController from "@/controllers/AccountController";
import AccountRepoFirebase from "@/repositories/AccountRepoFirebase";
import AccountService from "@/services/AccountService";

export class AccountControllerFactory {
  createAccountController() {
    const accountRepo = new AccountRepoFirebase();
    const accountService = new AccountService(accountRepo);
    return new AccountController(accountService);
  }
}