import { TransactionControllerFactory } from "@/factories/TransactionControllerFactory";
import { authorized } from "@/utils/middleware.utils";
import { NextRequest, NextResponse } from "next/server";

const transactionController = new TransactionControllerFactory().createTransactionController();

export async function GET(request: NextRequest, { params }: { params: { email: string } }) {
  if (!await authorized(request)) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }

  return transactionController.getBalance(request, { params });
}