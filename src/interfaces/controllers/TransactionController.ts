import { NextResponse } from "next/server";
import { ITransaction } from "../Transaction";

export interface ITransactionController {
  index(request: any, { params }: { params: { email: string } }): Promise<NextResponse<ITransaction[]>>;
}