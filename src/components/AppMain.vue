<template>

    <div class="container d-flex flex-column mt-5 mx-auto">
        <h2 class="text-center">
            Film
        </h2>
        <div class="movies-row row gap-2 align-items-start flex-nowrap">
            <AppCard v-for="(movie, index) in store.movies" :key="index" :item="movie"/>
        </div>

        <h2 class="text-center mt-5">
            Series
        </h2>
        <div class="row row gap-2 align-items-start justify-content-center">
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
.container{
    width: 100vw;
}
.movies-row{
    overflow-x: auto;
    white-space: nowrap;

}
</style>