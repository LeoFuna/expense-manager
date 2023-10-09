'use client'
import BottomNavigation from "@/components/core/BottomNavigation";
import TopNavigation from "@/components/core/TopNavigation";
import AccountDashboard from "@/components/home/AccountDashboard";
import { DateContextProvider } from "@/contexts/dateContext";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  return (
    <main className="overflow-y-hidden h-screen">
      <DateContextProvider>
        <>
          <TopNavigation avatar={data?.user?.image} />
          <AccountDashboard email={data?.user?.email || ''} />
          <BottomNavigation />
        </>
      </DateContextProvider>
    </main>
  )
}
