import { useState } from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';

interface PokemonAvatarProps {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

const defaultImageUrl = 'https://play-lh.googleusercontent.com/MDaSgXlbRkftfjNIdJ2oHodVBVLOmVg2PevfdzJkbtlawfMA-8gMAs-kCfXXY5XyLw';

const PokemonAvatar = ({ uri, style }: PokemonAvatarProps) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    const [imageUri, setImageUri] = useState(uri)

    return (
        <Image
            style={[styles.itemImage, style]}
            resizeMode='contain'
            onError={() => setImageUri(defaultImageUrl)}
            source={{ uri: imageUri }}
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