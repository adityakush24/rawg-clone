<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useGamesStore } from "../../stores/games"
const { bookmarkGame, isGameBookmarked } = useGamesStore();
defineProps({
    game: {
        requierd: true,
        type: Object,
    },
});
</script>
    <template>
        <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 card">
            <RouterLink :to="{ name: 'preview', params: { id: game.id } }">
                <a href="#">
                    <img class="rounded-t-lg" :src="game.background_image" :alt="game.slug" width="380" object-contain>
                </a>
            </RouterLink>
            <div class="p-5">
                <RouterLink :to="{ name: 'preview', params: { id: game.id } }">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ game.name }}
                        </h5>
                    </a>
                </RouterLink>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">RELEASED: {{ game.released }}</p>
                <div class="float-right hover:cursor-pointer" @click="bookmarkGame(game)">
                    <font-awesome-icon v-if="isGameBookmarked(game)" icon="fa-solid fa-bookmark"/>
                    <font-awesome-icon v-else icon="fa-regular fa-bookmark" />
                </div>
            </div>
    
        </div>
    </template>

    <style scoped>
    img {
        height: 240px !important;
    }
    
    .card {
        height: 100% !important;
    }
    </style>
    