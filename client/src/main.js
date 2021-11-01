import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/axios'

createApp.filter('inverter', function (valor) {
    return valor.split('').reverse().join('')
})

createApp.mixin({
    created() {
        console.log('report')
    }
})

createApp(App).mount('#app')
