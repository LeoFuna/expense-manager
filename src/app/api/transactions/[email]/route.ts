import TransactionController from "@/controllers/TransactionController";
import TransactionRepoFirebase from "@/repositories/TransactionRepoFirebase";
import TransactionService from "@/services/TransactionService";
import { NextRequest } from "next/server";

const transactionController = new TransactionController(new TransactionService(new TransactionRepoFirebase()));

export async function POST(request: NextRequest, { params }: { params: { email: string } }) { return transactionController.create(request, { params }); }

export async function GET(request: NextRequest, { params, query }: { query: any, params: { email: string } }) {
  // const { searchParams } = new URL(request.url);
  // const month = searchParams.get('month');

  // if (month) {
  //   return transactionController.getTransactionBalance(request, { params: { email: params.email, month: Number(month) } })
  // }
  return transactionController.index(request, { params });
}