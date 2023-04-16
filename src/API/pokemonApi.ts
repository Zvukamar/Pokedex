import { axiosInstance } from './instance';

export const pokemonApi = ({
    fetchAllPokemons: async (page: number, pageSize: number = 20, sortBy: string = 'asc') => {
        return axiosInstance.get(`?page=${page}&page_size=${pageSize}&sort_by=${sortBy}`)
    }
});