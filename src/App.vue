<template>
  <div id="app">
    <a href="http://aworksa.cafe24.com/aworksa/vue/index.html#/">
    <img :src="image" />
    </a>
    <app-search/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import Vue from 'vue'
import btnFooter from '@/components/btnFooter.vue'
import Search from '@/components/Search.vue'
import image from "./assets/logo_belive.png"

export default {
  components: {
    'app-footer': btnFooter,
    'app-search': Search
  },
  data: function () {
      return {
          image: image
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

body { 
  background-color: white; 
} 

#nav a.router-link-exact-active {
  color: tomato;
}
img{
  height: auto;
  width: 60%;
  margin-top: 10px;
  margin: 20px;
}
footer{
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 50px;
}
</style>
