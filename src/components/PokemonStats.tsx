import { View } from "react-native";
import BaseText from "./common/BaseText";

interface PokemonStatsProps {
    name: string;
    value: string;
}

const PokemonStats = ({ name, value }: PokemonStatsProps) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <BaseText style={{ width: 80 }}>{name}:</BaseText>
            <BaseText>{value}</BaseText>
        </View>
    )
}

export default PokemonStats;