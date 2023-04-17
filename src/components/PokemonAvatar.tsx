import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';

interface PokemonAvatarProps {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

const PokemonAvatar = ({ uri, style }: PokemonAvatarProps) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Image
            style={[styles.itemImage, style]}
            resizeMode='contain'
            source={{ uri }}
        />
    )
}

export default PokemonAvatar;

const createStyle = (colors: any) => StyleSheet.create({
    itemImage: {
        width: 140,
        height: 140,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.white
    },
});