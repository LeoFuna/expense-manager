'use client'
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function Navigation({ title }: { title: string }) {
  const router = useRouter();

  return (
    <nav className="relative flex items-center justify-center w-full text-light-100 h-14 py-8 px-4">
      <button onClick={router.back} className="absolute left-4">
        <FiArrowLeft size={24} />
      </button>
      <h1 className="title-3">
        { title }
      </h1>
    </nav>
  )
}