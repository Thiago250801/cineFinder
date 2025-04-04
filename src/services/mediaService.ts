import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '098df0c545fdf121a70f1905a09e0d1e',
        language: 'pt-BR'
    }
})

// Lista de Filmes Populares
export const getPopularMovie =  async () => {
    const response = await api.get('/movie/popular');
    return response.data.results;
}

// Pega as informações de um filme específico 
export const getDetailsMedia = async (id: number, type: 'movie' | 'tv' = 'movie') => {
    const response = await api.get(`${type}/${id}`)
    return response.data;
}

export const getDetailsMediaTv = async (id: number) => {
    const response = await api.get(`/tv/${id}`)
    return response.data;
}

export const  getTopRatedMovie = async () => {
    const response = await api.get('/movie/top_rated')
    return response.data.results;
}

export const getUpcomingMovie = async () => {
    const response = await api.get('/movie/upcoming')
    return response.data.results;
}

export const getEmCartaz = async () => {
    const response = await api.get('/movie/now_playing')
    return response.data.results;
}

export const getPopularTv = async () => {
    const response = await api.get('/tv/popular')
    return response.data.results;
}

export const getTopReateTv = async () => {
    const response = await api.get('tv/top_rated')
    return response.data.results;
}