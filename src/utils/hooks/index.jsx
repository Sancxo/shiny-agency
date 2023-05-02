import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(_ => {
    if (!url) return

    setLoading(true);

    async function fetchData() {
      try {
        const resp = await fetch(url);
        const data = await resp.json();

        setData(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally { setLoading(false); }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error }
}