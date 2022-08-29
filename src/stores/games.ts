import { defineStore } from "pinia";
import axios from "axios";
const link = import.meta.env.VITE_RAWG_API_LINK
const key = import.meta.env.VITE_RAWG_API_KEY

export const useGamesStore = defineStore({
  id: "games",
  state: () => ({
    games: [],
    gameDetails: Object,
    gameScreenshots: Array,
    gameGenres: Array,
    gamesBookmarked: [],
    currentGameListTitle: String
  }),
  actions: {
    async getGames() {
      try {
        const response = await axios.get(`${link}/games?key=${key}&page_size=30`)
        this.games = response.data.results;
      } catch (err: any) {
        console.log(err.message);
      }
    },
    async searchGames(searchString: string) {
      try {
        const response = await axios.get(`${link}/games?key=${key}&page_size=30&search=${searchString}`)
        this.games = response.data.results;
      } catch (err: any) {
        console.log(err.message);
      }
    },
    async getGameWithId(id: string) {
      try {
        const response = await axios.get(`${link}/games/${id}?key=${key}`)
        this.gameDetails = response.data;
      } catch (err: any) {
        console.log(err.message);
      }
    },
    async getGameScreenshotsWithId(id: string) {
      try {
        const response = await axios.get(`${link}/games/${id}/screenshots?key=${key}`)
        this.gameScreenshots = response.data.results;
      } catch (err: any) {
        console.log(err.message);
      }
    },
    async getGamesOfGenre(genre: string) {
      try {
        const response = await axios.get(`${link}/games?key=${key}&genres=${genre}`)
        this.games = response.data.results;
      } catch (err: any) {
        console.log(err.message);
      }
    },
    async getGameGenres() {
      try {
        const response = await axios.get(`${link}/genres?key=${key}`)
        this.gameGenres = response.data.results;
        console.log(this.gameGenres);
      } catch (err: any) {
        console.log(err.message);
      }
    },
    bookmarkGame(game: Object) {
      if(this.isGameBookmarked(game)) {
        const index = this.gamesBookmarked.indexOf(game);
        this.gamesBookmarked.splice(index, 1);
      } else {
        this.gamesBookmarked.push(game);
      }
    },
    isGameBookmarked(game: Object) {
      let bookmarkedGamObj = this.gamesBookmarked.find((bookmarkedGame: Object) => {
        return bookmarkedGame.id === game.id
      });
      if(bookmarkedGamObj) {
        return true;
      } else {
        return false;
      }
    },
      getWishlistedGames() {
        this.games = this.gamesBookmarked;
    },
    setCurrentGameListTitle(title: string) {
      this.currentGameListTitle = title;
    }
  },
});
