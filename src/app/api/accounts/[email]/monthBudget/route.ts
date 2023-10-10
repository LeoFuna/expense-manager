import { AccountControllerFactory } from "@/factories/AccountControllerFactory";
import { NextRequest } from "next/server";

const accountController = new AccountControllerFactory().createAccountController();

export async function GET(request: NextRequest, { params }: { params: { email: string } }) {
  return accountController.show(request, { params: { email: params.email } });
}