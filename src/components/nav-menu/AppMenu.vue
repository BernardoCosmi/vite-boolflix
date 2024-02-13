// AppMenu.vue
<template>
  <div class="container">
    <figure>
      <img src="../../assets/img/Logonetflix.png" alt="Logonetflix">
    </figure>
    <AppSearch @search="searchMovies" />
  </div>
</template>

<script>
import AppSearch from "../../components/nav-menu/AppSearch.vue"
import { store } from '../../store.js';

export default {
  name: "AppMenu",
  components: {
    AppSearch
  },
  methods: {
    searchMovies(query) {
      this.$emit('search-movies', query);
    }
  }
};
</script>

<style lang="scss" scoped>
  
  * {
    border: 1px solid black;
  }

  .container{
    width: 100%;
    padding: 10px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

      figure {
      max-width: 15%;

      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }

  
</style>