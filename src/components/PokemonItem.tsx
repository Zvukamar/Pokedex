import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Pokemon } from '../utils/types';
import { colors } from '../utils';

interface PokemonItemProps {
    item: Pokemon
}

const PokemonItem = ({ item }: PokemonItemProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}>
            <Image
                style={styles.itemImage}
                resizeMode='contain'
                source={{ uri: `https://img.pokemondb.net/sprites/silver/normal/${item.name.toLocaleLowerCase()}.png` }}
            />
            <Text style={styles.itemName}>#{item.number} {item.name}</Text>
        </TouchableOpacity>
    )
}

export default PokemonItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 24,
        gap: 12
    },
    itemImage: {
        width: 140,
        height: 140,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.white
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.white
    }
});