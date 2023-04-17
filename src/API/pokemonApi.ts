import { axiosInstance } from './instance';

export const pokemonApi = ({
    fetchAllPokemons: async (page: number, pageSize: number = 20, sortBy: string = 'asc', filter: string = '') => {
        return axiosInstance.get(`?filter=${filter}&page=${page}&page_size=${pageSize}&sort_by=${sortBy}`)
    },
});