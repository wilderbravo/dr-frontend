<template>
  <div id="app">  
    <FlightSearch @search="showFlightResults" />
  </div>
</template>

<script>
import FlightSearch from './components/FlightSearch.vue';

export default {
  name: 'App',
  components: {
    FlightSearch
  }
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
