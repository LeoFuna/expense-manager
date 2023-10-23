import { NextRequest, NextResponse } from "next/server";
import { ITransactionCategory } from "../TransactionCategory";

export interface ITransactionCategoryController {
  index(request: NextRequest): Promise<NextResponse<ITransactionCategory[]>>;
  show(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse<ITransactionCategory | null>>;
}