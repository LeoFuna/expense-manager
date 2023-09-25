import { ITransactionCategory } from "@/interfaces/TransactionCategory";
import { ITransactionCategoryController } from "@/interfaces/controllers/TransactionCategoryController";
import { ITransactionCategoryService } from "@/interfaces/services/TransactionCategoryService";
import { NextRequest, NextResponse } from "next/server";

export default class TransactionCategoryController implements ITransactionCategoryController {
  constructor(private readonly transactionCategoryService: ITransactionCategoryService) {}

  async show(request: NextRequest, { params }: { params: { id: string; }; }): Promise<NextResponse<ITransactionCategory | null>> {
    const category = await this.transactionCategoryService.show(params.id);

    return NextResponse.json(category);
  }
}