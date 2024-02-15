<template>
<header class="container-fluid bg-dark">

    <div class="row align-items-center">

      <!-- Logo -->
      <div class="col-2 ms-4">
        <img src="../assets/img/Logonetflix.png" alt="Logonetflix" class="img-fluid">
      </div>

      <!-- Menu elementi -->
      <div class="col-5 me-5">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link home-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Serie TV</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Film</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Nuovi e popolari</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">La mia lista</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sfoglia per lingua</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- Searchbar -->
      <div class="col-3 ms-3">
        <form @submit.prevent="$emit('emitGetData')">
          <div class="input-group">
            <input type="text" class="form-control" name="search" id="search" aria-describedby="helpId" placeholder="Cerca un film o una serie TV" v-model="store.searchText">
            <div class="input-group-append">
              <button type="submit" class="btn btn-danger">Search</button>
            </div>
          </div>
        </form>
      </div>

      <!-- Propic dell'utente -->
      <div class="col-1 p-4 my-1 text-center">
        <img src="../assets/img/NetflixAvatar1.png" alt="User Profile" class="col-8 rounded">
      </div>
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
.navbar-nav .nav-item .nav-link {
    color: #fff; 
    transition: color 0.3s ease;
  }
  .navbar-nav .nav-item .nav-link:hover {
    color: #aaa; 
  }
  .home-link{
    font-weight: bold;
  }
  .home-link:hover {
    color: #fff !important
  }
</style>