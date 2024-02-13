<template>
  <div class="movie-container" >
    <MoviePoster/>
  </div>
</template>

<script>
import { store } from '../../store.js';
import MoviePoster from './MoviePoster.vue';

export default {
  name: "MovieList",
  components: {
    MoviePoster
  },
  data() {
    return {
      store
    };
  }
};
</script>
  
<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .movie-container{
    width:90%;
    margin: 0 auto;
    border: 1px solid black;

}
</style>
  