import { AccountControllerFactory } from "@/factories/AccountControllerFactory";
import { authorized } from "@/utils/middleware.utils";
import { NextRequest, NextResponse } from "next/server";

const accountController = new AccountControllerFactory().createAccountController();

export async function POST(request: NextRequest, response: NextResponse) {
  if (!await authorized(request)) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }
  
  return accountController.create(request, response);
}