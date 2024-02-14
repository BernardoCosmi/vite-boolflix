<template>
    <div class="card d-flex flex-column col-3 ">
        
        <!-- POSTER -->
        <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" :alt="`Poster for ${item.original_title ? item.original_title : item.original_name}`">

        <div class=" d-flex flex-column">

            <!-- ORIGINAL TITLE/NAME -->
            <h4 class="text-center text-wrap title">
                {{item.original_title ? item.original_title : item.original_name}}
            </h4>

            <!-- LANGUAGE -->
            <div class="text-center">
                <img
                    :src="`https://flagcdn.com/20x15/${item.original_language === 'en' ? 'gb' : item.original_language}.png`"
                    :srcset="`https://flagcdn.com/40x30/${item.original_language === 'en' ? 'gb' : item.original_language}.png 2x,
                        https://flagcdn.com/60x45/${item.original_language === 'en' ? 'gb' : item.original_language}.png 3x`"
                    width="20"
                    height="15"
                    alt=" Original Language">
            </div>
            <!-- VOTE -->
            <p class="text-center text-wrap">
                <span v-for="i in 5" :key="i" class="star-container">
                    <span class="full-stars" v-if="i <= Math.round(item.vote_average / 2)">
                        &#9733;
                    </span>
                    <span v-else>
                        &#9734; <!-- Stelle vuote -->
                    </span>
                </span>
            </p>
    
        </div>

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

    },
}
</script>

<style scoped>
.card{
    height: 750px;
    padding: 0px;
    margin: 0;
    justify-content: space-between;
    border: none;
    .poster{
        margin: 0;
    }
    .title{
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.star-container{
    font-size: xx-large;
    .full-stars{
        color: gold;
    }
}
</style>