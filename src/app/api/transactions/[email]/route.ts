import { TransactionControllerFactory } from "@/factories/TransactionControllerFactory";
import { NextRequest } from "next/server";

const transactionController = new TransactionControllerFactory().createTransactionController();

export async function POST(request: NextRequest, { params }: { params: { email: string } }) { return transactionController.create(request, { params }); }

export async function GET(request: NextRequest, { params }: { query: any, params: { email: string } }) {
  return transactionController.index(request, { params });
}