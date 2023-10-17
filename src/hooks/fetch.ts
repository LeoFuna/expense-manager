import { useEffect, useState } from "react"

type UseFetchProps = {
  url: string,
  onError?: (error: any) => void,
  dependencies?: any[],
  params?: any
}


function useFetch({ url, params = {}, onError, dependencies = [] }: UseFetchProps) {
  const [isValidating, setIsValidating] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<any>(null);
  const urlParams = new URLSearchParams(params);

  useEffect(() => {
    setIsValidating(true);
    const controller = new AbortController();

    fetch(`${url}?${urlParams}`, { signal: controller.signal })
    .then(response => response.json())
    .then((data) => {
      setIsValidating(false);
      setHasError(false);
      setData(data);
    })
    .catch((err) => {
      if (err.name === 'AbortError') return;
      console.log(err);
      setIsValidating(false);
      setHasError(true);
      setData(null);
    })

    return () => {
      controller.abort();
    }
  }, [...dependencies])

  return { isValidating, hasError, data }
}

export {
  useFetch
}