<template>
    <div class="movie-poster col-2">  
        <figure>
            <img src="" alt="">
        </figure>
        <div>
            <h3>Titolo</h3>
            <h3>Titolo originale</h3>
            <h3>Voto</h3>
            <h3>Overview</h3>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: "MoviePoster",

  };
  </script>
  
  <style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .movie-poster{
    border: 1px solid black;
  }
  </style>