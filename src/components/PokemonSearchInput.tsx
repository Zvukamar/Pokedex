import { StyleSheet, TextInput, View } from 'react-native';
import useTheme from '../hooks/useTheme';

interface PokemonSearchInputProps {
    value: string;
    onChangeText: (text: string) => void;
}

const PokemonSearchInput = ({ value, onChangeText }: PokemonSearchInputProps) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                style={styles.textInput}
                placeholder='Search from here...'
                clearButtonMode='always'
                maxLength={20}
                onChangeText={onChangeText}
                placeholderTextColor={theme.white}
            />
        </View>
    )
}

export default PokemonSearchInput;

const createStyle = (colors: any) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        paddingVertical: 12
    },
    textInput: {
        backgroundColor: colors.background,
        color: colors.white,
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 12,
        padding: 10,
    }
});