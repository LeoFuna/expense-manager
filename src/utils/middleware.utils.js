import { AccountControllerFactory } from "@/factories/AccountControllerFactory";
import AccountRepoFirebase from "@/repositories/AccountRepoFirebase";
import AccountService from "@/services/AccountService";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function authorized(req) {
  const token = await getToken({ req });

  return !!token;
}

export async function handleJointAccounts(params) {
  const accountService = new AccountService(new AccountRepoFirebase());
  const ownerEmail = await accountService.getJointAccountOwner(params.email);
  if (ownerEmail) {
    params.email = ownerEmail;
  }
}