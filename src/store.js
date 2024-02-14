import { reactive } from "vue";

export const store = reactive({
    apiKey: '5cae308e8a4f5ef08b04da3bcd74a275',
    searchText: '',
    endpointMovies: 'https://api.themoviedb.org/3/search/movie',
    endpointSeries: 'https://api.themoviedb.org/3/search/tv',
    movies:[],
    series:[],
});
