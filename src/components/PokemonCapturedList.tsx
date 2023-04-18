import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'

import PokemonItem from './PokemonItem';
import BaseEmptyList from './common/BaseEmptyList';
import useTheme from '../hooks/useTheme';
import { selectCapturedsList } from '../redux/pokemonSlice';

const PokemonCapturedList = () => {
    const theme = useTheme();
    const styles = createStyle(theme);
    const capturedList = useSelector(selectCapturedsList);

    return (
        <FlatList
            data={capturedList}
            renderItem={({ item }) => <PokemonItem item={item} />}
            style={styles.container}
            keyExtractor={({ name }) => name}
            ListEmptyComponent={BaseEmptyList}
            contentContainerStyle={styles.contentContainerStyle}
            numColumns={2}
        />
    )
}

export default PokemonCapturedList;

const createStyle = (colors: any) => StyleSheet.create({
    container: {
        backgroundColor: colors.background
    },
    contentContainerStyle: {
        flexGrow: 1,
        alignItems: 'center',
        margin: 12,
        backgroundColor: colors.background
    }
})