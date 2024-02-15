<template>
    <div class="poster-container d-flex flex-column mx-auto">
        <h2 class="mt-1 text-uppercase">
            film
        </h2>
        <div class="mt-2 movies-row row align-items-start flex-nowrap">
            <AppCard v-for="(movie, index) in store.movies" :key="index" :item="movie" />
        </div>

        <h2 class="mt-4 text-uppercase">
            series
        </h2>
        <div class="mt-2 series-row row align-items-start flex-nowrap">
            <AppCard v-for="(serie, index) in store.series" :key="index" :item="serie" />
        </div>

    </div>
</template>

<script>
import { store } from '../store'
import AppCard from './AppCard.vue'

export default {
    name: 'AppHeader',
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style scoped>
.poster-container {
    width: 95%;
}

.movies-row {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;/* Gestione della scrollbar */
}

.series-row {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;/* Gestione della scrollbar */
}
.movies-row::-webkit-scrollbar,
.series-row::-webkit-scrollbar {
    display: none; /* Nasconde la scrollbar solo per i browser WebKit (come Chrome e Safari) */
}
</style>