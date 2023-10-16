import { useEffect } from "react"

type UseFetchProps = {
  url: string,
  onSuccess: (data: any) => void,
  onError?: (error: any) => void,
  dependencies?: any[],
  params?: any
}

function useFetch({ url, params = {}, onSuccess, onError, dependencies = [] }: UseFetchProps) {
  const urlParams = new URLSearchParams(params);
  useEffect(() => {
    fetch(`${url}?${urlParams}`)
    .then(response => response.json())
    .then(onSuccess)
  }, [...dependencies])
}

export {
  useFetch
}