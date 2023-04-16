import { PropsWithChildren } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { colors } from '../../utils';

const BaseText = ({ children, style, ...props }: PropsWithChildren<TextProps>) => {
    return (
        <Text
            style={[styles.text, style]}
            {...props}>
            {children}
        </Text>
    )
}

export default BaseText;

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color: colors.white,
        fontSize: 16,
    }
});
