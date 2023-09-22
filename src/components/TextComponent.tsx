const fakeFetch = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('DADO')
    }, 6000);
  })
}

export default async function TextComponent() {
  const data = await fakeFetch();

  console.log(data)
  return <div className="text-primary-100">{data}</div>;
}