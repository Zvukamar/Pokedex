import { pokemonTypeColor } from './colors';

export const getColorByType = (type: string) => {
    switch (type.toLowerCase()) {
        case 'fire':
            return pokemonTypeColor.fire;
        case 'water':
            return pokemonTypeColor.water;
        case 'grass':
            return pokemonTypeColor.grass;
        case 'poison':
            return pokemonTypeColor.poison;
        case 'fighting':
            return pokemonTypeColor.fighting;
        case 'electric':
            return pokemonTypeColor.electric;
        case 'flying':
            return pokemonTypeColor.flying;
        case 'bug':
            return pokemonTypeColor.bug;
        case 'ground':
            return pokemonTypeColor.ground;
        case 'psychic':
            return pokemonTypeColor.psychic;
        case 'steel':
            return pokemonTypeColor.steel;
        case 'fairy':
            return pokemonTypeColor.fairy;
        case 'ice':
            return pokemonTypeColor.ice;
        case 'rock':
            return pokemonTypeColor.rock;
        case 'dragon':
            return pokemonTypeColor.dragon;
        case 'ghost':
            return pokemonTypeColor.ghost;
        case 'dark':
            return pokemonTypeColor.dark;
        default:
            return pokemonTypeColor.unknown;
    }
}
