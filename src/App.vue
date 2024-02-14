<template>
  <div>
    <AppNav  @emitGetData="getData" />
  </div>
  <AppMain/>
</template>

<script>
import AppNav from "./components/AppNav.vue";
import AppMain from "./components/AppMain.vue";

import axios from 'axios';
import { store } from './store';

export default {
    name: '',
  components: {
    AppNav,
    AppMain
  },
  data(){
    return{
        store
    }
  },
  mounted(){
        
  },
  methods:{
      getData(){

        store.movies = []
        store.series = []
        
        axios.get(`${store.endpointMovies}?api_key=${store.apiKey}&query=${store.searchText}`).then((res) =>{
          console.log( res.data.results )
          store.movies = res.data.results
        })
        axios.get(`${store.endpointSeries}?api_key=${store.apiKey}&query=${store.searchText}`).then((res) =>{
          console.log( res.data.results )
          store.series = res.data.results
        })
        .catch((err) => {
            console.log( err )
        })
      }
    }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
