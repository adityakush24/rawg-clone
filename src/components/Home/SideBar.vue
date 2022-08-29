<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGamesStore } from "../../stores/games"
let { gameGenres } = storeToRefs(useGamesStore());
const { getGames, getGameGenres, getGamesOfGenre, getWishlistedGames, setCurrentGameListTitle } = useGamesStore();
getGameGenres();
let getGamesOfGenreFromGameStore = (genre: Object) => {
    getGamesOfGenre(genre.slug);
    setCurrentGameListTitle(genre.name);
};

let getWishlistedGamesFromGameStore = () => {
    getWishlistedGames();
    setCurrentGameListTitle("Wishlist")
}

let getAllGames = () => {
    getGames();
    setCurrentGameListTitle("All Games");
}
</script>
<template>
    <aside class="w-1/5 px-5 py-24" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 hover:cursor-pointer hover:bg-gray-700" @click="getAllGames">
            <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight sm:truncate ">
                <font-awesome-icon icon="fa-solid fa-gamepad" /> &nbsp;
                All Games
            </h2>
        </div>
        <br>
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 hover:cursor-pointer hover:bg-gray-700" @click="getWishlistedGamesFromGameStore">
            <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight sm:truncate">
                <font-awesome-icon icon="fa-solid fa-gift" /> &nbsp;
                Wishlist
            </h2>
        </div>
        <br>
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight sm:truncate mb-5">Genres</h2>
            <ul class="space-y-2" v-for="genre in gameGenres" :key="genre.id">
                <li>
                    <a href="#" @click="getGamesOfGenreFromGameStore(genre)"
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <img aria-hidden="true" :src="genre.image_background"
                            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <span class="ml-3">{{ genre.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>