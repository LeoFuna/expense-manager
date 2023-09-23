import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession();
  const account = await fetch(`${process.env.APP_URL}/api/accounts/meu@email.com`).then((data) => data.json());

  return (
    <main>
      <p className="title-x">Olá {session?.user?.name}</p>
      <p>{JSON.stringify(account)}</p>
    </main>
  )
}
