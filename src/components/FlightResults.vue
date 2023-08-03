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
export default {
  props: {
    flights: {
      type: Array,
      required: true,
    },
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
