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

      const store = useStore();
      store.setSearchResults(searchResults);
      store.setShowResults(true);
      this.$router.push('/results');
    },
  },
};
</script>
<style>
.container {
  max-width: 100%;
  margin: 2 auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  display: grid;
  grid-gap: 10px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}
</style>
