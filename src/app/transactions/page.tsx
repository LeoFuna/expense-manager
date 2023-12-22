import BottomNavigation from "@/components/core/BottomNavigation";
import TopNavigation from "@/components/core/TopNavigation";
import UnderDevelopment from "@/components/core/UnderDevelopment";
import { getServerSession } from "next-auth";

export default async function Transactions() {
  const session = await getServerSession();
  return (
    <main className="flex flex-col items-center h-[100dvh]">
      <TopNavigation
        avatar={session?.user?.image}
        hideNavigation
      />
      <UnderDevelopment />
      <BottomNavigation />
    </main>
  )
}