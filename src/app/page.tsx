import BottomNavigation from "@/components/core/BottomNavigation";
import TopNavigation from "@/components/core/TopNavigation";
import AccountDashboard from "@/components/home/AccountDashboard";
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      <TopNavigation avatar={session?.user?.image} />
      <AccountDashboard />
      <BottomNavigation />
    </main>
  )
}
