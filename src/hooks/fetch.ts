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
  let controller = new AbortController();
  useEffect(() => {
    // TO DO: Essa parte dos controller, ainda em avaliação
    controller.abort();
    controller = new AbortController();
    fetch(`${url}?${urlParams}`, { signal: controller.signal })
    .then(response => response.json())
    .then(onSuccess)
  }, [...dependencies])
}

export {
  useFetch
}