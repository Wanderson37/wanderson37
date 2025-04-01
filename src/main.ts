import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import router from './router'

const myApp = createApp(App)
myApp.use(Quasar, {
  plugins: {}
})
myApp.use(router)
myApp.mount('#app')
