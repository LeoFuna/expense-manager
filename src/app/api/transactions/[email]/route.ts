import TransactionController from "@/controllers/TransactionController";
import TransactionRepoFirebase from "@/repositories/TransactionRepoFirebase";
import TransactionService from "@/services/TransactionService";
import { NextRequest } from "next/server";

const transactionController = new TransactionController(new TransactionService(new TransactionRepoFirebase()));

export async function GET(request: NextRequest, { params }: { params: { email: string } }) { return transactionController.index(request, { params }); }