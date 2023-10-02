import AccountController from "@/controllers/AccountController";
import AccountRepoFirebase from "@/repositories/AccountRepoFirebase";
import AccountService from "@/services/AccountService";
import { NextRequest } from "next/server";

const accountController = new AccountController(new AccountService(new AccountRepoFirebase()));

export async function GET(request: NextRequest, { params }: { params: { email: string } }) {
  const { searchParams } = new URL(request.url);
  const month = searchParams.get('month');
  const year = searchParams.get('year');
  
  return accountController.show(request, { params: { email: params.email, month, year } });
}