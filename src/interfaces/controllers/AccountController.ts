import { NextRequest, NextResponse } from "next/server";
import { IAccount } from "../Account";

export interface IAccountController {
  show(req: NextRequest, { params }: { params: { email: string, year: string | null, month: string | null } }): Promise<NextResponse<IAccount | null>>;
  create(req: NextRequest, res: NextResponse): Promise<NextResponse<IAccount>>;
}