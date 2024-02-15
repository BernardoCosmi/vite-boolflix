<template>

    <div class="poster-container d-flex flex-column mt-5 mx-auto">
        <h2 class="mt-5 text-uppercase">
            film
        </h2>
        <div class="movies-row row align-items-start flex-nowrap">
            <AppCard v-for="(movie, index) in store.movies" :key="index" :item="movie"/>
        </div>

        <h2 class="mt-5 text-uppercase">
            series
        </h2>
        <div class="series-row row align-items-start flex-nowrap">
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
.poster-container{
    width: 90%;
}
.movies-row{
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
}
.series-row{
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
}
</style>