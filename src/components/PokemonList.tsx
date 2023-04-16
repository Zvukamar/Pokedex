import { FlatList } from "react-native";
import PokemonItem from "./PokemonItem";
import db from '../../server/pokemon_db.json';

const PokemonList = () => {
    return (
        <FlatList
            data={db}
            renderItem={PokemonItem}
            initialNumToRender={10}
        />
    )
}

export default PokemonList;