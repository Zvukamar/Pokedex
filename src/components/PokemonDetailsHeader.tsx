import { View, StyleSheet } from 'react-native';
import PokemonAvatar from './PokemonAvatar';
import BaseText from './common/BaseText';
import { colors } from '../utils';

interface PokemonDetailsHeaderProps {
    number: number;
    name: string;
    generation: number;
}

const PokemonDetailsHeader = ({ number, name, generation }: PokemonDetailsHeaderProps) => {
    return (
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <BaseText style={styles.text}>#{number} {name}</BaseText>
                <BaseText style={styles.text}>Generation: {generation}</BaseText>
            </View>

            <PokemonAvatar
                uri={`https://img.pokemondb.net/sprites/silver/normal/${name.toLocaleLowerCase()}.png`}
                style={styles.avatarImg}
            />
        </View>
    )
}

export default PokemonDetailsHeader;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: colors.white,
        paddingVertical: 12,
        gap: 10,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontWeight: '300',
        color: colors.background,
        paddingHorizontal: 10,
        fontSize: 20,
    },
    avatarImg: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    }
})