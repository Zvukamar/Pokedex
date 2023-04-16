import { Text, View } from "react-native";
import { Pokemon } from "../utils/types";

interface PokemonItemProps {
    item: Pokemon
}

const PokemonItem = ({ item }: PokemonItemProps) => {
    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}

export default PokemonItem;