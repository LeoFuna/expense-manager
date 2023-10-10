import { TransactionControllerFactory } from "@/factories/TransactionControllerFactory";
import { NextRequest } from "next/server";

const transactionController = new TransactionControllerFactory().createTransactionController();

export async function GET(request: NextRequest, { params }: { params: { email: string } }) {
  return transactionController.getBalance(request, { params });
}