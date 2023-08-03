import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'app',
  state: () => ({
    searchResults: [],
    showResults: false,
  }),
  actions: {
    setShowResults(value) {
      this.showResults = value;
    },
    setSearchResults(results) {
      this.searchResults = results;
    },
  },
});
