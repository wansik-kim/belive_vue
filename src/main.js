import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

/*
export const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $eventBus: {
      get: function () {
          return EventBus;
      }
  }
});
*/
export const eventBus = new Vue();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')