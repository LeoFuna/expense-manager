import TransactionController from "@/controllers/TransactionController";
import AccountRepoFirebase from "@/repositories/AccountRepoFirebase";
import TransactionRepoFirebase from "@/repositories/TransactionRepoFirebase";
import AccountService from "@/services/AccountService";
import TransactionService from "@/services/TransactionService";
import { NextRequest } from "next/server";

const transactionController = new TransactionController(new TransactionService(new TransactionRepoFirebase(), new AccountService(new AccountRepoFirebase())));

export async function POST(request: NextRequest, { params }: { params: { email: string } }) { return transactionController.create(request, { params }); }

export async function GET(request: NextRequest, { params }: { query: any, params: { email: string } }) {
  return transactionController.index(request, { params });
}