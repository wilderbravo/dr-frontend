<template>
  <div class="container">
    <h2>Buscador de Tickets Aéreos</h2>
    <form @submit.prevent="searchFlights">
      <label for="origin">Ciudad de origen:</label>
      <input type="text" v-model="origin" required>
      
      <label for="destination">Ciudad de destino:</label>
      <input type="text" v-model="destination" required>
      
      <label for="departureDate">Fecha de salida:</label>
      <input type="date" v-model="departureDate" required>
      
      <label for="returnDate">Fecha de retorno:</label>
      <input type="date" v-model="returnDate" required>
      
      <button type="submit">Buscar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      origin: '',
      destination: '',
      departureDate: '',
      returnDate: '',
    };
  },
  methods: {
    searchFlights() {
      this.$emit('search', {
        origin: this.origin,
        destination: this.destination,
        departureDate: this.departureDate,
        returnDate: this.returnDate,
      });
    },
  },
};
</script>
