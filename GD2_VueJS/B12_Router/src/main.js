import { createApp } from 'vue'
import App from './App.vue'
import a from './router/router'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(a)
app.mount('#app')
