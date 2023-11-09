import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function authorized(req) {
  const token = await getToken({ req });

  return !!token;
}