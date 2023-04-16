import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';
import { colors } from '../utils';

interface PokemonAvatarProps {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

const PokemonAvatar = ({ uri, style }: PokemonAvatarProps) => {
    return (
        <Image
            style={[styles.itemImage, style]}
            resizeMode='contain'
            source={{ uri }}
        />
    )
}

export default PokemonAvatar;

const styles = StyleSheet.create({
    itemImage: {
        width: 140,
        height: 140,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.white
    },
});