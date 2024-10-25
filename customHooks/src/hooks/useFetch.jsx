import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState({});

    async function getDetails() {
        const res = await fetch(url);
        const json = await res.json();
        setData(json)
    }

    useEffect(() => {
        getDetails();
    }, [])

    return { data }
}