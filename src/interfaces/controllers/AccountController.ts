import { NextRequest, NextResponse } from "next/server";
import { IAccount } from "../Account";

export interface IAccountController {
  show(req: NextRequest, { params }: { params: { email: string } }): Promise<NextResponse<{ balance: number } | null>>;
  create(req: NextRequest, res: NextResponse): Promise<NextResponse<IAccount>>;
  update(req: NextRequest, { params }: { params: { email: string }}): Promise<NextResponse<{ id: string } | null>>;
  createMonthAccounts(req: NextRequest): Promise<NextResponse<{ message: string }>>;
  getJointAccountOwner(req: NextRequest, { params }: { params: { email: string }}): Promise<NextResponse<string | null>>;
}