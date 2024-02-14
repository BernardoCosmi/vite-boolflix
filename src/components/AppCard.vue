<template>
    <div class="card d-flex flex-column col-3 border">
        
        <!-- POSTER -->
        <img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`" alt="">

        <div class="d-flex flex-column">

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
                    alt="Language">
            </div>
            <!-- VOTE -->
            <p class="text-center text-wrap">
                {{ item.vote_average }}
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
    height: 650px;
    padding: 0;
    margin: 0;
    justify-content: space-between;
    .title{
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
    }
}
</style>