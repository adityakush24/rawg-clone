import { defineStore } from "pinia";
import axios from "axios";
const link = import.meta.env.VITE_RAWG_API_LINK
const key = import.meta.env.VITE_RAWG_API_KEY

export const useGamesStore = defineStore({
  id: "games",
  state: () => ({
    games: [],
  }),
  actions: {
    async fetchGames() {
      try {
        const response = await axios.get(`${link}?key=${key}&page_size=30`)
        this.games = response.data.results;
      } catch (err: any) {
        console.log(err.message);
      }
    },
    async searchGames(searchString: string) {
      try {
        const response = await axios.get(`${link}?key=${key}&page_size=30&search=${searchString}`)
        this.games = response.data.results;
      } catch (err: any) {
        console.log(err.message);
      }
    },
    fetchGameWithId(id: string) {
      return this.games.find((item: { id: string; }) => item.id === id);
    }
  },
});
