import { TransactionCategoryControllerFactory } from "@/factories/TransactionCategoryControllerFactory";
import { NextRequest } from "next/server";

const transactionCategoryController = new TransactionCategoryControllerFactory().createTransactionCategoryController();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) { return transactionCategoryController.show(request, { params }); }