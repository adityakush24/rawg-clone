import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia'

import App from './App.vue'
import router from './router'
import { useGamesStore } from "./stores/games"

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const { fetchGames } = useGamesStore();
fetchGames();
app.mount('#app')

