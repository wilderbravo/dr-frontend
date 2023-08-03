<template>
  <div>
    <FlightSearch @search="searchFlights" />
  </div>
</template>

<script>
import FlightSearch from '../components/FlightSearch.vue';
import { useStore } from '../store';

export default {
  name: 'Home-App',
  components: {
    FlightSearch,
  },
  methods: {
    searchFlights(searchData) {
      console.log('Datos de búsqueda:', searchData);
      const searchResults = [
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
          price: "$340",
          airline: "Aerolínea 3",
          stops: 1,
          duration: "1h 45m",
        },
        {
          id: 4,
          price: "$263",
          airline: "Aerolínea 3",
          stops: 2,
          duration: "3h 45m",
        },
      ];
      // Utilizar el hook "useStore" para acceder al store y establecer los resultados de búsqueda
      const store = useStore();
      store.setSearchResults(searchResults);
      store.setShowResults(true);
      this.$router.push('/results');
    },
  },
};
</script>
