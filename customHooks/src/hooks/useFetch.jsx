import { useEffect, useState } from "react";

export function useFetch(url, reFetchTime) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function getDetails() {
        setIsLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setData(json)
        setIsLoading(false);
    }

    useEffect(() => {
        getDetails();
    }, [url])

    useEffect(() => {
        const interval = setInterval(() => getDetails(), reFetchTime * 1000)

        return () => clearInterval(interval);
    }, [url, reFetchTime])

    return { data, isLoading }
}