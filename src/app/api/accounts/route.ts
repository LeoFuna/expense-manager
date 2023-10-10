import { AccountControllerFactory } from "@/factories/AccountControllerFactory";
import { NextRequest, NextResponse } from "next/server";

const accountController = new AccountControllerFactory().createAccountController();

export async function POST(request: NextRequest, response: NextResponse) { return accountController.create(request, response); }