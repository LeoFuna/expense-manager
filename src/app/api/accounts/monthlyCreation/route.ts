import { dbAdmin } from "@/db/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  // if (authHeader !== `Bearer ${process.env.CRON_TOKEN}`) {
  //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401  });
  // }
  console.log(authHeader, process.env.CRON_TOKEN);
  await dbAdmin.collection('cron').add({ message: `Cron from ${new Date()}` });
  return NextResponse.json({ message: 'Cron created' }, { status: 201 }); 
}