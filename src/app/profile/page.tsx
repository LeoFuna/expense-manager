import BottomNavigation from "@/components/core/BottomNavigation";
import ProfileSections from "@/components/profile/ProfileSections";
import User from "@/components/profile/User";

export default function Profile() {
  return (
    <main className="flex flex-col items-center overflow-y-hidden h-screen">
        <div className="overflow-hidden max-w-md px-5 py-4 flex flex-col
          items-center gap-7 w-screen bg-[#f6f6f6] h-[100svh]"
        >
          <User />
          <ProfileSections />
          <BottomNavigation />
        </div>
    </main>
  );
}