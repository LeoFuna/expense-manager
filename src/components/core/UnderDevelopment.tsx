import Image from "next/image";

export default function UnderDevelopment() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-11/12 max-w-md h-2/5">
        <Image
          src='/under-development.svg'
          fill
          alt='Under development img'
        />
      </div>
      <h1 className="text-3xl font-bold text-dark-25">
        Under Development...
      </h1>
    </div>
  )
}