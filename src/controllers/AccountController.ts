import { IAccount } from "@/interfaces/Account";
import { IAccountController } from "@/interfaces/controllers/AccountController";
import { IAccountService } from "@/interfaces/services/AccountService";
import { NextRequest, NextResponse } from "next/server";

export default class AccountController implements IAccountController {
  constructor(private readonly accountService: IAccountService) {}
  async update(req: NextRequest, { params }: { params: { email: string; }; }): Promise<NextResponse<{ id: string; } | null>> {
    const { searchParams } = new URL(req.url);
    const month = searchParams.get('month');
    const fullYear = searchParams.get('fullYear');
    const { email } = params;
    const body: IAccount = await req.json();

    if (!fullYear || !month) {
      return NextResponse.json(null, { status: 400 });
    }
    const serviceResponse = await this.accountService.update(email, body,  Number(fullYear), Number(month));

    return NextResponse.json(serviceResponse, { status: 204 });
  }

  async create(req: NextRequest, res: NextResponse<unknown>): Promise<NextResponse<IAccount>> {
    const body: IAccount = await req.json();

    const serviceResponse = await this.accountService.create(body);

    return NextResponse.json(serviceResponse, { status: 201 });
  }

  async show(req: NextRequest, { params }: { params: { email: string } }): Promise<NextResponse<{balance: number} | null>> {
    const { searchParams } = new URL(req.url);
    const month = searchParams.get('month');
    const fullYear = searchParams.get('fullYear');
    const { email } = params;
    if (!fullYear || !month) {
      return NextResponse.json(null, { status: 400 });
    }
    const serviceResponse = await this.accountService.show(email, Number(fullYear), Number(month));

    return NextResponse.json(serviceResponse, { status: 200 });
  }

  async createAccountForNewMonth(req: NextRequest, { params }: { params: { email: string } }): Promise<NextResponse<IAccount | null>>{
    const { email } = params;
    const account = await this.accountService.createAccountForNewMonth(email);

    return NextResponse.json(account, { status: 200 });
  }
}