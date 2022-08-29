import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia'

import App from './App.vue'
import router from './router'
import { useGamesStore } from "./stores/games"

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookmark as faBookmarkSolid, faGift, faGamepad} from '@fortawesome/free-solid-svg-icons'
import { faBookmark as faBookmarkRegular} from '@fortawesome/free-regular-svg-icons'

library.add(faBookmarkSolid, faBookmarkRegular, faGift, faGamepad)

const app = createApp(App)

app.use(createPinia())
app.use(router)
const { getGames, setCurrentGameListTitle } = useGamesStore();
getGames();
setCurrentGameListTitle("All Games");
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')


