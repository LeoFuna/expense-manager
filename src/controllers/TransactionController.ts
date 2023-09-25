import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionController } from "@/interfaces/controllers/TransactionController";
import { ITransactionService } from "@/interfaces/services/TransactionService";
import { NextRequest, NextResponse } from "next/server";

export default class TransactionController implements ITransactionController {
  constructor(private readonly transactionService: ITransactionService) {}

  async create(request: any, { params }: { params: { email: string; }; }): Promise<NextResponse<ITransaction>> {
    const body: ITransaction = await request.json();
    const transaction = await this.transactionService.create(params.email, body);

    return NextResponse.json(transaction, { status: 201 })
  }

  async index(request: NextRequest, { params }: { params: { email: string; }; }): Promise<NextResponse<ITransaction[]>> {
    const transactions = await this.transactionService.index(params.email);

    return NextResponse.json(transactions, { status: 200 })
  }
  
}