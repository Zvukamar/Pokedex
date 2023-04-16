import { View, StyleSheet } from "react-native";
import BaseText from "./common/BaseText";
import { getColorByType } from "../utils/helpers";

interface PokemonTypeLabelProps {
    text: string;
}

const PokemonTypeLabel = ({ text }: PokemonTypeLabelProps) => {

    const backgroundColor = getColorByType(text);

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <BaseText style={styles.text}>{text}</BaseText>
        </View>
    )
}

export default PokemonTypeLabel;

const styles = StyleSheet.create({
    container: {
        width: 100,
        paddingVertical: 8,
        borderRadius: 8,
    },
    text: {
        textAlign: 'center'
    }
})