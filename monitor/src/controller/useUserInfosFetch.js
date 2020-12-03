import { useState, useEffect } from 'react';

const useUserInfosFetch = (callback, url) => {
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();
        callback(data);

        setLoading(false);
    }

    useEffect ( () => {
        fetchData();
    }, []);

    return loading;
}

export default useUserInfosFetch;