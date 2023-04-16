import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchAllPokemons, selectCurrentPage } from '../redux/pokemonSlice';
import { AppDispatch } from '../redux/store';

export const useFetchPokemons = () => {
    const dispatch = useDispatch<AppDispatch>();
    const page = useSelector(selectCurrentPage);

    useEffect(() => {
        dispatch(fetchAllPokemons(page))
    }, [page]);

    return null;
}