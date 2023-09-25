import { NextRequest, NextResponse } from "next/server";
import { ITransactionCategory } from "../TransactionCategory";

export interface ITransactionCategoryController {
  show(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse<ITransactionCategory | null>>;
}