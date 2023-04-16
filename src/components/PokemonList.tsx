import { FlatList, StyleSheet } from "react-native";
import PokemonItem from "./PokemonItem";
import db from '../../server/pokemon_db.json';
import { colors } from "../utils";

const PokemonList = () => {
    return (
        <FlatList
            data={db}
            renderItem={PokemonItem}
            contentContainerStyle={styles.contentContainerStyle}
            numColumns={2}
        />
    )
}

export default PokemonList;

const styles = StyleSheet.create({
    contentContainerStyle: {
        marginBottom: 12,
        backgroundColor: colors.purple
    }
})