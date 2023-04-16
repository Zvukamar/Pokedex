import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PokemonItem from './PokemonItem';
import BaseEmptyList from './common/BaseEmptyList';
import BaseLoadingIndicator from './common/BaseLoadingIndicator';
import BaseErrorList from './common/BaseErrorList';
import { useFetchPokemons } from '../hooks/useFetchPokemons';
import { colors } from '../utils';

const PokemonList = () => {
    const [page, setPage] = useState(1);

    const { loading, result, done, uninitialized, error } = useFetchPokemons(`/?page=${page}&page_size=20`);
    if (error) return <BaseErrorList />;
    if (uninitialized) return <BaseLoadingIndicator />

    const onEndReached = () => {
        !done && setPage(prev => prev + 1);
    }

    return (
        <FlatList
            data={result}
            renderItem={({ item }) => <PokemonItem item={item} />}
            style={styles.container}
            keyExtractor={({ name }) => name}
            ListEmptyComponent={!loading ? BaseEmptyList : null}
            contentContainerStyle={styles.contentContainerStyle}
            numColumns={2}
            onEndReachedThreshold={1}
            refreshing={loading}
            onEndReached={onEndReached}
            ListFooterComponent={!done ? BaseLoadingIndicator : null}
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