import { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import axios from 'axios';

import { baseUrl } from '../utils/consts';
import { Pokemon } from '../utils/types';

export const useFetchPokemons = (params: string) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<Pokemon[]>([]);
    const [error, setError] = useState('');
    const [done, setDone] = useState(false);
    const [uninitialized, setUninitialized] = useState(true);

    useEffect(() => {
        fetchPokemons();
    }, [params]);

    const fetchPokemons = async () => {
        setLoading(true);
        try {
            const { data, status } = await axios.get(baseUrl + params);
            if (status === 200) {
                const { done, result } = data;
                setResult(prev => [...prev, ...result]);
                done && setDone(true);
            } else {
                throw new Error(`${params} - response status is not 200`);
            }
        } catch (error) {
            console.log('Error in useFetchPokemons', { error });
            setError('something went wrong with fetching pokemons');
            Alert.alert('something went wrong with fetching pokemons');
        } finally {
            setUninitialized(false);
            setLoading(false);
        }
    }

    return { done, loading, result, error, uninitialized };
}