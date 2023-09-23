import { IAccount } from "@/interfaces/Account";
import { IAccountService } from "@/interfaces/services/AccountService";
import IAccountRepository from "@/interfaces/repositories/AccountRepository";

export default class AccountService implements IAccountService {
  constructor(private readonly accountRepo: IAccountRepository) {}

  async create(data: IAccount): Promise<IAccount> {
    // Aqui entram as validaçoes necessárias
    await this.accountRepo.create(data);

    return data;
  }

  async show(email: string): Promise<IAccount> {
    const repoResponse = await this.accountRepo.show(email);
    if (!repoResponse) {
      throw new Error('Account not found');
    }
    return repoResponse;
  }
}