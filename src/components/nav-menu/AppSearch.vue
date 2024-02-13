<template>
  <div>
    <input v-model="searchText" type="text" placeholder="Search for movies">
    <button @click="search">Search</button>
  </div>
</template>

<script>
import { store } from "../../store";

export default {
  name: "AppSearch",
  data(){
    return{
      searchText: ''
    }
  },
  methods: {
    search() {
      // NOTE aggiornamento dello store con la query di ricerca
      store.searchText = this.searchText;
    }
  }
};
</script>



<style lang="scss" scoped>

</style>
