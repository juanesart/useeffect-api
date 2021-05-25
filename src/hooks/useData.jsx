import { useState, useEffect } from 'react'
import { breakingApi } from '../api/brakingApi';

export function useData() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        const resp = await breakingApi.get('/characters')
        setUserData(resp.data);
    }

    return {
        userData
    }
}
