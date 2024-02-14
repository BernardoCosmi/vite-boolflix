<template>
    <h2>Film</h2>
    <AppCard v-for="(movie, index) in store.movies" :key="index" :item="movie"/>

    <h2>Series</h2>
    <AppCard v-for="(serie, index) in store.series" :key="index" :item="serie"/>
</template>

<script>
import {store} from '../store'
import AppCard from './AppCard.vue'

export default{
    name: 'AppHeader',
    components:{
        AppCard
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        
    },
    methods:{

    }
}
</script>

<style scoped>

</style>