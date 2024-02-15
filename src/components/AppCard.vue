<template>
    <div class="card d-flex flex-column col-3" @mouseenter="showInfo = true" @mouseleave="showInfo = false">

        <!--SECTION POSTER -->
        <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`"
            :alt="`Poster for ${item.original_title ? item.original_title : item.original_name}`">


        <!-- SECTION INFO -->
        <div class="info" :class="{ 'd-none': !showInfo }">

            <!-- ORIGINAL TITLE/NAME -->
            <h4 class="text-center text-wrap title mx-2">
                {{ item.original_title ? item.original_title : item.original_name }}
            </h4>

            <!-- OVERVIEW -->
            <p class="text-center text-wrap mx-4">
                <template v-if="item.overview">
                    {{ item.overview }}
                </template>
                <template v-else>
                    <i>Plot not available</i>
                </template>
            </p>

            <!-- LANGUAGE -->
            <div class="text-center">
                <img :src="`https://flagcdn.com/20x15/${item.original_language === 'en' ? 'us' : item.original_language}.png`"
                    :srcset="`https://flagcdn.com/40x30/${item.original_language === 'en' ? 'us' : item.original_language}.png 2x,
                                            https://flagcdn.com/60x45/${item.original_language === 'en' ? 'us' : item.original_language}.png 3x`"
                    width="20" height="15" :alt="`${(item.original_language)}`">
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
import { store } from '../store'

export default {
    name: 'AppCard',
    props: [
        'item'
    ],
    data() {
        return {
            store,
            showInfo: false,
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<style scoped>
.card {
    padding: 0px;
    margin: 0;
    justify-content: space-between;
    border: none;
    height: 512px;
    width: 342px;
    position: relative;
    /* Posizione relativa per posizionare l'elemento info */
}

.poster {
    aspect-ratio: auto;
    height: 100%;
}

.title {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.star-container {
    font-size: xx-large;
}

.full-stars {
    color: gold;
}

/* Stile dell'elemento info */
.info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(33, 37, 41, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* Inizialmente l'info è nascosto */
    pointer-events: none;
    /* Evita che gli eventi vengano catturati dall'elemento nascosto */
}

.card:hover .info {
    opacity: 1;
}

.d-none {
    display: none !important;
}</style>