<template>
    <div class="d-flex flex-column col-3 border">
        <img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`" alt="">
        <h4 class="text-center text-wrap">
            {{item.original_title ? item.original_title : item.original_name}}
        </h4>
    </div>

</template>

<script>
import {store} from '../store'

export default{
    name: 'AppCard',
    props: [
        'item'
    ],
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