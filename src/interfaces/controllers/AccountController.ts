import { NextRequest, NextResponse } from "next/server";
import { IAccount } from "../Account";

export interface IAccountController {
  show(req: NextRequest, { params }: { params: { email: string } }): Promise<NextResponse<IAccount>>;
  create(req: NextRequest, res: NextResponse): Promise<NextResponse<IAccount>>;
}