'use client'
import Image from "next/image";
import { FaBell, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function TopNavigation({ avatar }: { avatar?: string | null }) {
  return (
    <header className="flex items-center justify-between w-screen h-14 py-8 px-4">
      <Image
        className="rounded-full border p-[2px] border-primary-100"
        src={avatar || 'Deve vir imagem default'}
        alt="User Avatar"
        width={44}
        height={44}
      />
      <nav className="flex items-center gap-3">
        <button className="text-primary-100">
          <FaChevronLeft size={16} />
        </button>
        <h2 className="regular-s text-dark-75">Setembro</h2>
        <button className="text-primary-100">
          <FaChevronRight size={16} />
        </button>
      </nav>
      <button disabled>
        <span className="text-primary-60"><FaBell size={24} /></span>
      </button>
    </header>
  );
}