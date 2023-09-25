import TransactionCategoryController from "@/controllers/TransactionCategoryController";
import TransactionCategoryRepoFirebase from "@/repositories/TransactionCategoryRepoFirebase";
import TransactionCategoryService from "@/services/TransactionCategoryService";
import { NextRequest } from "next/server";

const transactionCategoryController = new TransactionCategoryController(new TransactionCategoryService(new TransactionCategoryRepoFirebase()));

export async function GET(request: NextRequest, { params }: { params: { id: string } }) { return transactionCategoryController.show(request, { params }); }