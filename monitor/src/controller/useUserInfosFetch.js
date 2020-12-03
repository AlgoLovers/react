import { useState, useEffect } from 'react';

const useUserInfosFetch = (callback, action, args) => {
    const [loading, setLoading] = useState(false);

    const _args = args;
    const fetchData = async () => {
        setLoading(true);

        let url;
        let valid = false;
        switch(action) {
            case 'getAllUsers':
                valid = true;
                url = 'http://10.112.164.147:8080/api/getAllUsers';
                break;
            case 'getOwnerInfos':
                if(_args.length != 0) {
                    valid = true;
                    url = `http://10.112.164.147:8080/api/getOwnerInfos?owner=${_args[0]}`;
                }
                break;
            case 'getRenterInfos':
                if(_args.length != 0) {
                    valid = true;
                    url = `http://10.112.164.147:8080/api/getRenterInfos?renter=${_args[0]}`;
                }
                break;
            default:
                break;
        }

        if(valid == true) {
            const response = await fetch(url);
            const data = await response.json();
            callback(data);
        }
        setLoading(false);
    }

    useEffect ( () => {
        fetchData();
    }, []);

    return loading;
}

export default useUserInfosFetch;