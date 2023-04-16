import { FlatList, StyleSheet } from "react-native";
import PokemonItem from "./PokemonItem";
import db from '../../server/pokemon_db.json';
import { colors } from "../utils";

const PokemonList = () => {
    return (
        <FlatList
            data={db}
            renderItem={({ item }) => <PokemonItem item={item} />}
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
            numColumns={2}
        />
    )
}

export default PokemonList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background
    },
    contentContainerStyle: {
        marginBottom: 12,
        backgroundColor: colors.background
    }
})