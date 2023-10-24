import { ITransaction } from "@/interfaces/Transaction";
import { ITransactionController } from "@/interfaces/controllers/TransactionController";
import { ITransactionService, TransactionToCreate } from "@/interfaces/services/TransactionService";
import { NextRequest, NextResponse } from "next/server";

export default class TransactionController implements ITransactionController {
  constructor(private readonly transactionService: ITransactionService) {}

  async create(request: any, { params }: { params: { email: string; }; }): Promise<NextResponse<{ id: string }>> {
    const body: TransactionToCreate = await request.json();
    const transaction = await this.transactionService.create(params.email, body);

    return NextResponse.json(transaction, { status: 201 })
  }
  
  async index(request: NextRequest, { params }: { params: { email: string; }; }): Promise<NextResponse<ITransaction[]>> {
    const { searchParams } = new URL(request.url);
    const month = searchParams.get('month');
    const fullYear = searchParams.get('fullYear');
    const limit = searchParams.get('limit');

    const transactions = await this.transactionService.index(
      params.email,
      Number(month),
      Number(fullYear),
      limit ? Number(limit) : undefined
    );
    
    return NextResponse.json(transactions, { status: 200 })
  }
  
  async getBalance(request: any, { params }: { params: { email: string; }; }): Promise<NextResponse<{ totalIncomeInCents: number; totalOutcomeInCents: number; }>> {
    const { searchParams } = new URL(request.url);
    const month = searchParams.get('month');
    const fullYear = searchParams.get('fullYear');

    const transactions = await this.transactionService.getBalance(params.email, Number(month), Number(fullYear));
    
    return NextResponse.json(transactions, { status: 200 })
  }
}