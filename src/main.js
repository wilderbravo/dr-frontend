import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import { createPinia } from 'pinia'

const app = createApp(App).use(createPinia())
installElementPlus(app)
app.mount('#app')