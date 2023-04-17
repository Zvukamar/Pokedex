import { PropsWithChildren } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import useTheme from '../../hooks/useTheme';

const BaseText = ({ children, style, ...props }: PropsWithChildren<TextProps>) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Text
            style={[styles.text, style]}
            {...props}>
            {children}
        </Text>
    )
}

export default BaseText;

const createStyle = (colors: any) => StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color: colors.white,
        fontSize: 16,
    }
});
