import { useEffect, useState } from "react";

export function useFetch(url) {
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

    return { data, isLoading }
}