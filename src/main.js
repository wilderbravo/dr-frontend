// import { createApp } from 'vue'
// import App from './App.vue'
// import installElementPlus from './plugins/element'
// import { createPinia } from 'pinia'

// const app = createApp(App).use(createPinia())
// installElementPlus(app)
// app.mount('#app')
// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import { createPinia } from 'pinia';
// // import { useStore } from './store';

// createApp(App).use(router).use(createPinia()).mount('#app');

// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import { createPinia } from 'pinia';
// import { useStore } from './store';

// const app = createApp(App);
// app.use(router);
// app.use(createPinia());

// // Usar el hook "useStore" para obtener el store
// app.config.globalProperties.$pinia = useStore();

// app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(router);
const pinia = createPinia();
app.use(pinia);

// Usar el hook "useStore" para obtener el store
// app.config.globalProperties.$pinia = pinia;

app.mount('#app');

// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import { createPinia } from 'pinia';

// const app = createApp(App);
// app.use(router);
// app.use(createPinia());

// app.mount('#app');



