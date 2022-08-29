<script setup lang="ts">
import { useGamesStore } from "@/stores/games";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import GameItem from "./GameItem.vue"
let { currentGameListTitle } = storeToRefs(useGamesStore());


defineProps({
  games: {
    requierd: true,
    type: Array,
  },
});
</script>
    <template>
  <section class="text-gray-400 body-font bg-black w-4/5">
    <div class="container px-5 py-24">
      <div class="text-5xl font-extrabold text-white">{{ currentGameListTitle }}</div>
      <br>
      <div class="flex flex-wrap -m-4" v-if="games">
        <div v-for="game in games" :key="game.id" class="my-2">
            <GameItem :game="game" />
        </div>
      </div>
    </div>
  </section>
</template>
    