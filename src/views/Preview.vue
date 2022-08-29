<script setup>
import { storeToRefs } from "pinia";
import { useGamesStore } from "../stores/games"
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";
const pagination = {
  clickable: true,
  dynamicBullets: true,
};

const coverflowEffect = {
  rotate: 60,
  stretch: 0,
  depth: 600,
  modifier: 1,
  slideShadows: true,
};

const autoplay = {
  delay: 5000,
  disableOnInteraction: false,
};

const modules = [Pagination, EffectCoverflow, Autoplay];
const route = useRoute()
const gameToView = route.params.id
console.log(gameToView)
let { gameDetails, gameScreenshots } = storeToRefs(useGamesStore());
const { getGameWithId, getGameScreenshotsWithId } = useGamesStore();
getGameWithId(gameToView);
getGameScreenshotsWithId(gameToView);
</script>
<template>
  <div
    class="w-screen overflow-hidden md:mt-50 min-h-screen bg-slate-500 relative after:fixed after:w-screen after:h-screen after:top-0 after:bg-slate-800 after:z-10 after:opacity-50">
    <img :src="gameDetails.background_image" class="fixed w-screen h-screen top-0 left-0 object-cover -z-5"
      alt="background" />
    <div class="px-10 text-white mt-40 relative z-20">
      <div class="text-6xl font-extrabold text-white">{{ gameDetails.name }}</div>
      <div class="mt-5">
        <span class="text-2xl">Genres: </span>
        <span class="text-lg capitalize" v-for="(genre, index) in gameDetails.genres" :key="index">#{{ genre.name
          }}&nbsp;</span>
      </div>
      <div class="mt-5">
        <span class="text-2xl">Parent Platforms: </span>
        <span class="text-lg capitalize" v-for="(platform, index) in gameDetails.parent_platforms" :key="index">{{
          platform.platform.name }}&nbsp;</span>
      </div>
      <div class="mt-5">
        <span class="text-2xl">Rating:
          <span class="text-amber-500">{{ gameDetails.rating }}/5</span></span>
      </div>
      <div class="md:my-5 mt-5 mb-1"><span class="text-2xl">Short Screenshots</span></div>
      <Swiper :pagination="pagination" grab-cursor :effect="'coverflow'" :coverflowEffect="coverflowEffect"
        :autoplay="autoplay" :modules="modules" :slides-per-view="1.12" :space-between="3" :centeredSlides="true"
        :loop="true" class="text-white text-center">
        <swiper-slide v-for="screenshot in gameScreenshots" :key="screenshot.id"><img :src="screenshot.image">
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <span class="h-10"><br /></span>
</template>