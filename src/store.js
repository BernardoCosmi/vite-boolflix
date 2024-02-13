import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?',
    apiKey: 'api_key=5cae308e8a4f5ef08b04da3bcd74a275',
    searchText: '',
    posterArray: [],
});
