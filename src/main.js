import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SkillBar from 'vue-skill-bar'

Vue.use(BootstrapVue)
Vue.use(VueParticles)
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('skill-bar', SkillBar)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyDb-r01JhMAirKPrOmvsCUmJzBh8rMaGHY',
  authDomain: 'portfolio-app-3635d.firebaseapp.com',
  databaseURL: 'https://portfolio-app-3635d.firebaseio.com',
  projectId: 'portfolio-app-3635d',
  storageBucket: 'portfolio-app-3635d.appspot.com',
  messagingSenderId: '180027733175',
  appId: '1:180027733175:web:73e54cc1c9b93f0fff4932',
  measurementId: 'G-9C8XW14X7D'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
