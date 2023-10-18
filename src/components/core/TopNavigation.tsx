'use client'
import { useDateNavigation } from "@/hooks/date";
import Image from "next/image";
import { FaBell, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function TopNavigation({ avatar }: { avatar?: string | null }) {
  const { currentMonthInBr, currentYear, changeMonth } = useDateNavigation();
  return (
    <header className="flex items-center justify-between w-screen max-w-md h-14 py-8 px-4">
      <Image
        className="rounded-full border p-[2px] border-primary-100"
        src={avatar || 'Deve vir imagem default'}
        alt="User Avatar"
        width={44}
        height={44}
      />
      <nav className="flex items-center justify-center gap-3 min-w-[50%]">
        <button className="text-primary-100" onClick={() => changeMonth('prev')}>
          <FaChevronLeft size={16} />
        </button>
        <h2 className="regular-s text-dark-75 text-center min-w-[70%]">
          {currentMonthInBr} / {String(currentYear).slice(2)}
        </h2>
        <button className="text-primary-100" onClick={() => changeMonth('next')}>
          <FaChevronRight size={16} />
        </button>
      </nav>
      <button disabled>
        <span className="text-primary-60"><FaBell size={24} /></span>
      </button>
    </header>
  );
}