// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import SocialSharing from 'vue-social-sharing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faFacebookSquare, faTwitterSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false


Vue.use(Buefy)
Vue.use(SocialSharing)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
