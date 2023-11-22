'use client'
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

export default function ProfileSections() {
  return (
    <section className="w-full h-1/2 bg-[#FFFFFF] p-6 rounded-3xl">
      <div className="w-full flex justify-start">
        <button
          className="flex items-center gap-x-2 group"
          onClick={() => signOut()}
        >
          <div
            className="flex items-center justify-center
            group-hover:text-danger-80 bg-danger-20 w-12 h-12
            text-danger-100 rounded-lg"
          >
            <FiLogOut size={30} />
          </div>
          <span className="regular-l text-dark-100 group-hover:text-dark-50">
            Sair
          </span>
        </button>
      </div>
    </section>
  )
}