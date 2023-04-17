import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'

import PokemonItem from './PokemonItem';
import BaseEmptyList from './common/BaseEmptyList';
import { selectFavoritesList } from '../redux/pokemonSlice';
import { colors } from '../utils';

const PokemonFavoriteList = () => {
    const favoritesList = useSelector(selectFavoritesList);

    return (
        <FlatList
            data={favoritesList}
            renderItem={({ item, index }) => <PokemonItem item={item} index={index} />}
            style={styles.container}
            keyExtractor={({ name }) => name}
            ListEmptyComponent={BaseEmptyList}
            contentContainerStyle={styles.contentContainerStyle}
            numColumns={2}
        />
    )
}

export default PokemonFavoriteList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background
    },
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: colors.background
    }
})