import AccountController from "@/controllers/AccountController";
import AccountRepoFirebase from "@/repositories/AccountRepoFirebase";
import AccountService from "@/services/AccountService";
import { NextRequest, NextResponse } from "next/server";

const accountController = new AccountController(new AccountService(new AccountRepoFirebase()));

export async function POST(request: NextRequest, response: NextResponse) { return accountController.create(request, response); }