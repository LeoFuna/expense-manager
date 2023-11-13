import { AccountControllerFactory } from "@/factories/AccountControllerFactory";
import { authorized, handleJointAccounts } from "@/utils/middleware.utils";
import { NextRequest, NextResponse } from "next/server";

const accountController = new AccountControllerFactory().createAccountController();

export async function GET(request: NextRequest, { params }: { params: { email: string } }) {
  if (!await authorized(request)) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }
  await handleJointAccounts(params);

  return accountController.show(request, { params });
}