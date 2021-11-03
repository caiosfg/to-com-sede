import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://manager-f3a87-default-rtdb.firebaseio.com/'


Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})