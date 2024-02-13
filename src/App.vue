<template>
  <AppMenu/>
  <MovieList/>
</template>

<script>
import AppMenu from "./components/nav-menu/AppMenu.vue"
import MovieList from './components/movie-card/MovieList.vue';
import { store } from './store.js';
import axios from 'axios';

  export default{
    components: {
      AppMenu,
      MovieList
    },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
