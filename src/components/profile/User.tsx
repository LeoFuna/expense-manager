import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function User() {
  const session = await getServerSession();
  return (
    <section className="w-full flex items-center justify-start gap-x-5 py-10">
      <Image
        className="rounded-full border p-[2px] border-primary-100"
        src={session?.user?.image || ''}
        alt="User Avatar"
        width={80}
        height={80}
      />
      <div className="grid grid-cols-1 gap-2">
        <h3 className="regular-s text-light-20">Nome de usuário</h3>
        <h1 className="title-2 max-w-sm">Leonardo Funabashi</h1>
      </div>
    </section>
  )
}