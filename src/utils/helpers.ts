import colors from './colors';

export const getColorByType = (type: string) => {
    switch (type.toLowerCase()) {
        case 'fire':
            return colors.fire;
        case 'water':
            return colors.water;
        case 'grass':
            return colors.grass;
        case 'poison':
            return colors.poison;
        case 'fighting':
            return colors.fighting;
        case 'electric':
            return colors.electric;
        case 'flying':
            return colors.flying;
        case 'bug':
            return colors.bug;
        case 'ground':
            return colors.ground;
        case 'psychic':
            return colors.psychic;
        case 'steel':
            return colors.steel;
        case 'fairy':
            return colors.fairy;
        case 'ice':
            return colors.ice;
        case 'rock':
            return colors.rock;
        case 'dragon':
            return colors.dragon;
        case 'ghost':
            return colors.ghost;
        case 'dark':
            return colors.dark;
        default:
            return colors.unknown;
    }
}