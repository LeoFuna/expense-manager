import BottomNavigation from "@/components/core/BottomNavigation";
import TopNavigation from "@/components/core/TopNavigation";
import { getServerSession } from "next-auth";

export default async function Transactions() {
  const session = await getServerSession();
  return (
    <main className="overflow-y-hidden h-screen">
      <TopNavigation avatar={session?.user?.image} />
      <h1>Transacoes</h1>
      <BottomNavigation />
    </main>
  )
}