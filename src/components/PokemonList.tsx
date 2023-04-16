import { FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import PokemonItem from './PokemonItem';
import BaseEmptyList from './common/BaseEmptyList';
import BaseLoadingIndicator from './common/BaseLoadingIndicator';
import BaseErrorList from './common/BaseErrorList';
import { useFetchPokemons } from '../hooks/useFetchPokemons';
import { increaseCurrentPage, selectHasError, selectIsDone, selectIsFetching, selectPokemonList, selectUninitialized } from '../redux/pokemonSlice';
import { colors } from '../utils';

const PokemonList = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector(selectIsFetching);
    const pokemonList = useSelector(selectPokemonList);
    const isDone = useSelector(selectIsDone);
    const uninitialized = useSelector(selectUninitialized);
    const hasError = useSelector(selectHasError);
    useFetchPokemons();

    // Show fullscreen loader on start
    if (uninitialized) return <BaseLoadingIndicator />

    // Show fullscreen error on initiate error
    const isEmptyList = pokemonList.length === 0;
    if (hasError && isEmptyList) return <BaseErrorList />;

    const onEndReached = () => {
        !isDone && dispatch(increaseCurrentPage());
    }

    return (
        <FlatList
            data={pokemonList}
            renderItem={({ item }) => <PokemonItem item={item} />}
            style={styles.container}
            keyExtractor={({ name }) => name}
            ListEmptyComponent={BaseEmptyList}
            contentContainerStyle={styles.contentContainerStyle}
            numColumns={2}
            onEndReachedThreshold={1}
            refreshing={isFetching}
            onEndReached={onEndReached}
            ListFooterComponent={BaseLoadingIndicator}
        />
    )
}

export default PokemonList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background
    },
    contentContainerStyle: {
        marginBottom: 12,
        backgroundColor: colors.background
    }
})