<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useGamesStore } from "../stores/games"
    import GameList from "../components/Home/GameList.vue"
    let { games } = storeToRefs(useGamesStore());
    const { searchGames } = useGamesStore();
    let searchGamesFromGameStore = (event: any) => {
        searchGames(event.target.value.trim());
        console.log("called")
    };
</script>
    <template>
        <!-- <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
                <input type="search" class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          " id="exampleSearch" placeholder="Search Games" @keyup="searchGamesFromGameStore"/>
            </div>
        </div> -->
        <!-- <input type="text" @keyup="searchGamesFromGameStore" /> -->
        <!-- <div v-if="games" v-for="game in games">
                <p>{{ JSON.stringify(game.name) }}</p>
                <p>---------------</p>
            </div> -->
            <nav class="border-gray-200 px-1 sm:px-2 py-2.5 rounded bg-black">
        <div class="container flex flex-wrap items-center mx-auto justify-around">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">RAWG Clone</span>
            </a>
            <div class="items-center w-10/12">
                <form>
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Games..." required @keyup="searchGamesFromGameStore">
                    </div>
                </form>
            </div>
        </div>
        </nav>
        <GameList v-if="games" :games="games" />
    </template>