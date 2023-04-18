import { StyleSheet, View } from "react-native";
import BaseText from "./common/BaseText";

interface PokemonStatsProps {
    name: string;
    value: string;
}

const PokemonStats = ({ name, value }: PokemonStatsProps) => {
    return (
        <View style={styles.container}>
            <BaseText style={styles.name}>{name}:</BaseText>
            <BaseText>{value}</BaseText>
        </View>
    );
}

export default PokemonStats;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    name: {
        width: 80
    }
});