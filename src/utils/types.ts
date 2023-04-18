import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export interface Pokemon {
    attack: number;
    defense: number;
    generation: number;
    hit_points: number;
    legendary: boolean;
    name: string;
    number: number;
    special_attack: number;
    special_defense: number;
    speed: number;
    total: number;
    type_one: string;
    type_two: string;
    imageUrl: string;
    captured?: boolean;
};

export type RootStackParams = {
    PokemonList: undefined;
    PokemonDetails: { item: Pokemon };
};

export type NavigationPropType = NativeStackNavigationProp<
    RootStackParams,
    'PokemonList'
>;

export type PokemonDetailsRoutePropType = RouteProp<
    RootStackParams,
    'PokemonDetails'
>;
