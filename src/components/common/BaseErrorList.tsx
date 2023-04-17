import { View, StyleSheet } from 'react-native';
import BaseText from './BaseText';
import useTheme from '../../hooks/useTheme';

const BaseErrorList = () => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <View style={styles.container}>
            <BaseText>Something gone wrong! 😕</BaseText>
            <BaseText>Please check your internet connection</BaseText>
            <BaseText>or try again later.</BaseText>
        </View>
    )
}

export default BaseErrorList;

const createStyle = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        gap: 4
    }
});