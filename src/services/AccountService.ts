import { IAccount } from "@/interfaces/Account";
import { IAccountService } from "@/interfaces/services/AccountService";
import IAccountRepository from "@/interfaces/repositories/AccountRepository";

export default class AccountService implements IAccountService {
  constructor(private readonly accountRepo: IAccountRepository) {}
  async update(email: string, data: IAccount, year: number, month: number): Promise<{ id: string; } | null> {
    const account = await this.show(email, year, month);
    if (!account) {
      return null;
    }
    const newBalanceInCents = account.balance * 100 + data.balanceInCents;
    await this.accountRepo.update(email, { id: account.id, balanceInCents: newBalanceInCents }, year);
    
    return { id: account.id };
  }
  async checkIfIsANewUser(email: string): Promise<boolean> {
    const accountFound = await this.accountRepo.verifyIfAccountExists(email);
    return !accountFound;
  }

  async create(data: IAccount): Promise<IAccount> {
    // Aqui entram as validaçoes necessárias
    await this.accountRepo.create(data);
    
    return data;
  }

  async show(email: string, year: number, month: number): Promise<{ id: string, balance: number } | null> {
    const repoResponse = await this.accountRepo.show(email, year, month);
    if (!repoResponse) {
      return null;
    }

    return { id: repoResponse.id, balance: repoResponse.balanceInCents / 100 };
  }
}