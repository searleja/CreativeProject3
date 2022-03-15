import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

let data = {
  dates: mock,
  appointment: [],
  val: "test",
}

export {data};

new Vue({
  router,
  data,
  // render(h) {
  //   return h(App, { props: { 'test': this.test }})
  // }
  render: h => h(App)
}).$mount('#app')
