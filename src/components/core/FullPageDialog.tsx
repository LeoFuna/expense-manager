'use client'
import { useEffect, useState } from "react"

export default function FullPageDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`  
      flex justify-center items-center
      fixed bottom-0 z-50
      bg-light-20 bg-opacity-50
      h-screen w-screen max-w-md
      ${open ? 'visible' : 'invisible'}
    `}
    >
      { children }
    </div>
  )
}