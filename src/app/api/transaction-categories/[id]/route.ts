import { TransactionCategoryControllerFactory } from "@/factories/TransactionCategoryControllerFactory";
import { authorized } from "@/utils/middleware.utils";
import { NextRequest, NextResponse } from "next/server";

const transactionCategoryController = new TransactionCategoryControllerFactory().createTransactionCategoryController();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  if (!await authorized(request)) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }

  return transactionCategoryController.show(request, { params });
}