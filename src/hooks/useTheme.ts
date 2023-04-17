import { useColorScheme } from 'react-native';
import { pokemonTypeColor, lightTheme, darkTheme } from '../utils/colors';

const useTheme = () => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const colors = {
        ...pokemonTypeColor,
        ...(isDark ? lightTheme : darkTheme)
    };

    return colors;
}

export default useTheme;