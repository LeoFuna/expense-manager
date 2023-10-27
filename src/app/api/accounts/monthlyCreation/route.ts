import { AccountControllerFactory } from "@/factories/AccountControllerFactory";
import { NextRequest } from "next/server";

const accountController = new AccountControllerFactory().createAccountController();

export async function GET(request: NextRequest) {
  return accountController.createMonthAccounts(request);
}