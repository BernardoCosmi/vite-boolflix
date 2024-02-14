<template>
  <header class="container">

    <figure>
      <img src="../assets/img/Logonetflix.png" alt="Logonetflix">
    </figure>

    <div class="mb-3 d-flex">
        <input
            type="text"
            class="form-control"
            name="search"
            id="search"
            aria-describedby="helpId"
            placeholder="Cerca un film o una serie"
            v-model="store.searchText"/>
        <button @click="$emit('emitGetData')">Search</button>
    </div>

  </header>
</template>

<script>
import {store} from '../store'

export default {
  name: "AppNav",
  data(){
    return{
      store
    }
  },
  mounted(){
        
  },
  methods:{
  
  }
};
</script>

<style lang="scss" scoped>

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