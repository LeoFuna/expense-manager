import { TransactionControllerFactory } from "@/factories/TransactionControllerFactory";
import { authorized, handleJointAccounts } from "@/utils/middleware.utils";
import { NextRequest, NextResponse } from "next/server";

const transactionController = new TransactionControllerFactory().createTransactionController();

export async function POST(request: NextRequest, { params }: { params: { email: string } }) {
  if (!await authorized(request)) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }
  await handleJointAccounts(params);
  return transactionController.create(request, { params });
}

export async function GET(request: NextRequest, { params }: { query: any, params: { email: string } }) {
  if (!await authorized(request)) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }
  await handleJointAccounts(params);
  return transactionController.index(request, { params });
}