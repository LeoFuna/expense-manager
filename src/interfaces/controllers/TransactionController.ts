import { NextResponse } from "next/server";
import { ITransaction } from "../Transaction";

export interface ITransactionController {
  index(request: any, { params }: { params: { email: string } }): Promise<NextResponse<ITransaction[]>>;
  create(request: any, { params }: { params: { email: string } }): Promise<NextResponse<{ id: string }>>;
  getBalance(request: any, { params }: { params: { email: string } }): Promise<NextResponse<{ totalIncomeInCents: number; totalOutcomeInCents: number; }>>;
}