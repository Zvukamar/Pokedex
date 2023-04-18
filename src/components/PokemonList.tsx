import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'lodash';

import PokemonItem from './PokemonItem';
import BaseEmptyList from './common/BaseEmptyList';
import PokemonSearchInput from './PokemonSearchInput';
import BaseLoadingIndicator from './common/BaseLoadingIndicator';
import BaseErrorList from './common/BaseErrorList';
import useTheme from '../hooks/useTheme';
import { fetchAllPokemons, selectCurrentPage, selectHasError, selectIsDone, selectIsFetching, selectPokemonList } from '../redux/pokemonSlice';
import { AppDispatch } from '../redux/store';
import { pokemonApi } from '../API/pokemonApi';
import { Pokemon } from '../utils/types';

const PokemonList = () => {
    const theme = useTheme();
    const styles = createStyle(theme);

    const dispatch = useDispatch<AppDispatch>();
    const isFetching = useSelector(selectIsFetching);
    const pokemonList = useSelector(selectPokemonList);
    const isDone = useSelector(selectIsDone);
    const hasError = useSelector(selectHasError);
    const page = useSelector(selectCurrentPage);

    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [searchPage, setSearchPage] = useState(1);
    const [searchResult, setSearchResult] = useState<{ result: Pokemon[], done: boolean }>({ result: [], done: false })

    const searchResults = searchResult.result;

    const shouldClear = useRef(false);

    useEffect(() => {
        dispatch(fetchAllPokemons(page));
    }, []);

    useEffect(() => {
        pokemonList.length > 0 && setIsLoading(false);
    }, [pokemonList.length])

    const onClearResult = () => {
        setSearchResult({ result: [], done: false });
        setSearchPage(1);
    }

    const handleChangeText = (text: string) => {
        setSearchValue(text);

        if (shouldClear.current) {
            shouldClear.current = false;
            onClearResult();
        }

        // typing in search
        if (text) {
            setIsLoading(true);
            debouncedChangeText(text);
        } else {
            // clear the text
            setIsLoading(false);
        }
    }

    const debouncedChangeText = useRef(
        debounce((text: string) => {
            shouldClear.current = true;
            fetchPokemonByFilter(text, searchPage)
        }, 400)
    ).current;

    const fetchPokemonByFilter = async (filter: string, page: number) => {
        try {
            const { data } = await pokemonApi.fetchAllPokemons(page, undefined, undefined, filter);
            const { result, done } = data;
            setSearchResult(prev => ({
                result: [
                    ...prev.result,
                    ...result],
                done
            }));
        } catch (error) {
            console.log({ error });
        } finally {
            setIsLoading(false);
        }
    }

    const onEndReached = debounce(() => {
        if (searchValue && !searchResult.done) {
            fetchPokemonByFilter(searchValue, searchPage + 1)
            setSearchPage(prevPage => prevPage + 1);
        } else if (!isDone && !hasError) {
            dispatch(fetchAllPokemons(page));
        }
    }, 300);

    useEffect(() => {
        hasError && Alert.alert('Something gone wrong!')
    }, [hasError]);

    // Show fullscreen error on initiate error
    const isEmptyList = pokemonList.length === 0;
    if (hasError && isEmptyList) return <BaseErrorList />;

    return (
        <>
            <PokemonSearchInput
                value={searchValue}
                onChangeText={handleChangeText}
            />

            {isLoading ?
                <BaseLoadingIndicator fullscreen visible /> :
                <FlatList
                    data={!!searchValue ? searchResults : pokemonList}
                    renderItem={({ item }) => <PokemonItem item={item} />}
                    style={styles.container}
                    keyExtractor={({ name }) => name}
                    ListEmptyComponent={BaseEmptyList}
                    contentContainerStyle={styles.contentContainerStyle}
                    numColumns={2}
                    onEndReachedThreshold={0.5}
                    refreshing={isFetching}
                    onEndReached={onEndReached}
                    ListFooterComponent={() => <BaseLoadingIndicator visible={!hasError && (!searchValue && !isDone) || (searchResult.result.length > 0 && !searchResult.done)} />}
                />
            }
        </>
    )
}

export default PokemonList;

const createStyle = (colors: any) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
    },
    contentContainerStyle: {
        flexGrow: 1,
        alignItems: 'center',
        marginHorizontal: 24,
        marginBottom: 12,
        backgroundColor: colors.background
    }
})