import { IAccount } from "@/interfaces/Account";
import { IAccountController } from "@/interfaces/controllers/AccountController";
import { IAccountService } from "@/interfaces/services/AccountService";
import { NextRequest, NextResponse } from "next/server";

export default class AccountController implements IAccountController {
  constructor(private readonly accountService: IAccountService) {}

  async create(req: NextRequest, res: NextResponse<unknown>): Promise<NextResponse<IAccount>> {
    const body: IAccount = await req.json();
    const serviceResponse = await this.accountService.create(body);

    return NextResponse.json(serviceResponse, { status: 201 });
  }

  async show(req: NextRequest, { params }: { params: { email: string } }): Promise<NextResponse<IAccount>> {
    const { email } = params;

    const serviceResponse = await this.accountService.show(email);

    return NextResponse.json(serviceResponse, { status: 200 });
  }  
}