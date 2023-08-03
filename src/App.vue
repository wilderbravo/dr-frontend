<template>
  <div id="app">  
    <FlightSearch @search="showFlightResults" />
    <FlightResults :flights="searchResults" v-if="showResults" />
  </div>
</template>

<script>
import FlightSearch from './components/FlightSearch.vue';
import FlightResults from './components/FlightResults.vue';

export default {
  name: 'App',
  components: {
    FlightSearch,
    FlightResults
  },
   data() {
    return {
      searchResults: [],
      showResults: false,
    };
  },
  methods: {
     showFlightResults() {
      // Utilizamos los valores de los campos de búsqueda para simular los resultados de búsqueda
      this.searchResults = [
        {
          id: 1,
          price: "$250",
          airline: "Aerolínea 1",
          stops: 1,
          duration: "3h 30m",
        },
        {
          id: 2,
          price: "$350",
          airline: "Aerolínea 2",
          stops: 0,
          duration: "2h 15m",
        },
        {
          id: 3,
          price: "$236",
          airline: "Aerolínea 3",
          stops: 1,
          duration: "3h 10m",
        },
        // Agrega más resultados aquí...
      ];
      this.showResults = true;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flight-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
.results-container {
  margin-top: 20px;
}
</style>
