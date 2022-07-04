import { createApp } from 'vue'
import App from './App.vue'
// createApp(App).mount('#app')
import BeanHole from '../packages'
// import {InputCurrency} from '../packages'

createApp(App).use(BeanHole).mount('#app')