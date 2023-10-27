import { AccountControllerFactory } from "@/factories/AccountControllerFactory";
import { NextRequest } from "next/server";

const accountController = new AccountControllerFactory().createAccountController();

export async function POST(request: NextRequest, { params }: { params: { email: string } }) {
  return accountController.createAccountForNewMonth(request, { params: { email: params.email } });
}