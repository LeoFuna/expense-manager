import BottomNavigation from "@/components/core/BottomNavigation";
import { Spinner } from "@/components/core/Spinner";
import TopNavigation from "@/components/core/TopNavigation";

export default function SignInLoading() {
  return (
    <>
      <TopNavigation />
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
      <BottomNavigation />
    </>
  );
}