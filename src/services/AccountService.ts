import { IAccount } from "@/interfaces/Account";
import { IAccountService } from "@/interfaces/services/AccountService";
import IAccountRepository from "@/interfaces/repositories/AccountRepository";
import { AccountCreateSchema, UpdateAccountBalanceSchema } from "@/utils/validation.utils";

export default class AccountService implements IAccountService {
  constructor(private readonly accountRepo: IAccountRepository) {}

  async update(email: string, data: IAccount, year: number, month: number): Promise<{ id: string; } | null> {
    await UpdateAccountBalanceSchema.parseAsync(data);
    
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
    await AccountCreateSchema.parseAsync(data);
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

  async createMonthAccounts(): Promise<{ message: string }> {
    const accounts = await this.accountRepo.index();

    const accountsCreatedPromises = accounts.map(async ({ email }: { email: string }) => {
      return this.create({
        email,
        balanceInCents: 0,
        monthInNumber: new Date().getMonth(),
      });
    });
    await Promise.all(accountsCreatedPromises);
    return { message: 'Created' }
  }

  async getJointAccountOwner(email: string): Promise<string | null> {
    const jointAcc = await this.accountRepo.getJointAccountOwner(email);

    return jointAcc;
  }
}