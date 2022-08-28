<script setup>
import { RouterLink } from "vue-router";
import Card from "./Card.vue"

defineProps({
  games: {
    requierd: true,
    type: Array,
  },
});
</script>
    <template>
  <section class="text-gray-400 body-font bg-gray-900">
    <div class="container px-5 py-24 mx-auto">

      <div class="flex flex-wrap -m-4">
        <div v-if="games" v-for="game in games">
          <Card :game="game" />
        </div>
      </div>
    </div>
  </section>
</template>
    