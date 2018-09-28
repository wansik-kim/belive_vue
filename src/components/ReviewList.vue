<template>
  <div id="app" @load="sender">
    <ul>
      <li>
        <img src="../assets/s9.jpg">
        <h3>LG전자 트롬 14kg</h3>
        <p>564,193 리뷰</p>
      </li>
      <li>
        <img src="../assets/s14.jpg">
        <h3>삼성전자 그랑데 14kg</h3>
        <p>135,472 리뷰</p>
      </li>
      <li>
        <img src="../assets/l9.jpg">
        <h3>삼성전자 트롬 9kg</h3>
        <p>22,475 리뷰</p>
      </li>
      <li>
        <img src="../assets/l99.jpg">
        <h3>LG전자 트롬 9kg</h3>
        <p>11,333 리뷰</p>
      </li>
      <li>
        <img src="../assets/l14.jpg">
        <h3>LG전자 트롬 9kg</h3>
        <p>11,333 리뷰</p>
      </li>
      <li>
        <img src="../assets/s14.jpg">
        <h3>LG전자 트롬 9kg</h3>
        <p>11,333 리뷰</p>
      </li>
      <li>
        <img src="../assets/s9.jpg">
        <h3>LG전자 트롬 9kg</h3>
        <p>11,333 리뷰</p>
      </li>
      <li>
        <img src="../assets/l9.jpg">
        <h3>LG전자 트롬 9kg</h3>
        <p>11,333 리뷰</p>
      </li>
      <li>
        <img src="../assets/l99.jpg">
        <h3>LG전자 트롬 9kg</h3>
        <p>11,333 리뷰</p>
      </li>
    </ul>
    <app-footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { eventBus } from '../main'

export default {
  name: 'app',
  data () {
      return {
          search_title: ''
      }
  },
  components: {
    'app-footer': Footer
  },
  created() {
      eventBus.$on('search_title', this.onReceiveSearch);
      /*
      this.$eventBus.$on('search_title', this.onReceiveSearch);
      this.$eventBus.$on('message', this.onReceive);
      */
  },
  methods: {
    sum (a, b) {
      const result = a + b
      return result
    },
    sender() {
      window.console.log('sender');
      window.console.log('message', "778 개의 " + this.search_title);
      eventBus.$emit('message', "778 개의 " + this.search_title);
      /*
      this.$eventBus.$emit('message', this.text);
      this.text = '';
      var input = document.getElementsByTagName('input')[0];
      input.focus();
      */
    },
    onReceive(text) {
      window.console.log('onReceive');
      var self = this;
      this.receiveText = text;
      setTimeout(function() {
          self.receiveText = '';
      }, 1500);
    },
    onReceiveSearch(text) {
      window.console.log('onReceiveSearch');
      window.console.log(text);
      this.search_title = text;
      return (function inside(){
        window.console.log('sender');
        window.console.log('message', "778 개의 " + this.search_title);
        eventBus.$emit('message', "778 개의 " + this.search_title);
      });
      setTimeout(function() {
          this.receiveText = '';
      }, 1500);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  margin-bottom: 50px;
}
img{
  height: auto;
  width: 20%;
  margin-top: 10px;
  margin: 20px;
}
ul {
  list-style-type: none;
  -webkit-padding-start: 0em;
}
h3 {
  font: bold 15px Helvetica, Verdana, sans-serif;
}
li img {
  float: left;
  margin: 0 15px 0 0;
}
li p {
  font: 200 13px Georgia, Times New Roman, serif;
  line-height: 10px;
}
li {
  padding: 10px;
  overflow: auto;
}
li:hover {
  background: #eee;
  cursor: pointer;
}
</style>
