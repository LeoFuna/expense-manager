import BottomNavigation from "@/components/core/BottomNavigation";
import TopNavigation from "@/components/core/TopNavigation";
import AccountDashboard from "@/components/home/AccountDashboard";
import { DateContextProvider } from "@/contexts/dateContext";
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="overflow-y-hidden h-screen">
      <DateContextProvider>
        <>
          <TopNavigation avatar={session?.user?.image} />
          <AccountDashboard />
          <BottomNavigation />
        </>
      </DateContextProvider>
    </main>
  )
}
