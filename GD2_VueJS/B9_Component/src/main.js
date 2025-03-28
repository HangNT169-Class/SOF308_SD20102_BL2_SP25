import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './component/GlobalComponent.vue'

// createApp(App).mount('#app')
// config component toan cau
// Moi noi deu goi duoc khong can phai import
const app = createApp(App)
app.component('ComponentA', GlobalComponent)
app.mount('#app')
