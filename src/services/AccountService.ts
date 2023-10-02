import { IAccount } from "@/interfaces/Account";
import { IAccountService } from "@/interfaces/services/AccountService";
import IAccountRepository from "@/interfaces/repositories/AccountRepository";

export default class AccountService implements IAccountService {
  constructor(private readonly accountRepo: IAccountRepository) {}
  async checkIfIsANewUser(email: string): Promise<boolean> {
    const accountFound = await this.accountRepo.verifyIfAccountExists(email);
    return !accountFound;
  }

  async create(data: IAccount): Promise<IAccount> {
    // Aqui entram as validaçoes necessárias
    await this.accountRepo.create(data);
    
    return data;
  }

  async show(email: string, year: number, month: number): Promise<IAccount | null> {
    const repoResponse = await this.accountRepo.show(email, year, month);

    return repoResponse;
  }
}