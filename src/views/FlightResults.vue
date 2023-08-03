<template>
  <div>
    <h2>Resultados de búsqueda</h2>
    <div v-if="flights.length > 0">
      <div v-for="flight in flights" :key="flight.id" class="flight-card">
        <div>Precio: {{ flight.price }}</div>
        <div>Aerolínea: {{ flight.airline }}</div>
        <div>Número de escalas: {{ flight.stops }}</div>
        <div>Duración del vuelo: {{ flight.duration }}</div>
      </div>
    </div>
    <div v-else>
      <p>No se encontraron resultados</p>
    </div>
  </div>
</template>

<script>
import { useStore } from '../store';

export default {
  name: 'FlightResults',
  setup() {
    const store = useStore();
    return {
      flights: store.searchResults,
    };
  },
};
</script>

<style>
.flight-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

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

.flight-list {
  display: grid;
  grid-gap: 20px;
}

.flight-card {
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.flight-info {
  display: grid;
  grid-gap: 5px;
}

.price {
  font-size: 18px;
  font-weight: bold;
}

.airline {
  font-size: 16px;
}

.stops {
  font-size: 16px;
}

.duration {
  font-size: 16px;
}
</style>