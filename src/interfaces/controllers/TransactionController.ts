import { NextResponse } from "next/server";
import { ITransaction } from "../Transaction";

export interface ITransactionController {
  index(request: any, { params }: { params: { email: string } }): Promise<NextResponse<ITransaction[]>>;
  create(request: any, { params }: { params: { email: string } }): Promise<NextResponse<ITransaction>>;
  getTransactionBalance(request: any, { params }: { params: { email: string; month: number; } }): Promise<NextResponse<{ totalIncomeInCents: number; totalOutcomeInCents: number; }>>;
}