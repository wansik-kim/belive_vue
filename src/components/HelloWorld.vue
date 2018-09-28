<template>
  <div class="hello">
    <toplist class="toplist"/>
    <bofooter class="bofooter"/>
  </div>
</template>

<script>

import bofooter from '@/components/Footer.vue'
import TopList from './TopList.vue'

export default {
  name: "HelloWorld",
  components: {
    'bofooter': bofooter,
    'toplist': TopList
  },
  data: () => ({
    myInputValue: null,
    selectedCountry: null,
    countries: [
      '세탁기',
      '탈수기',
      '다리미',
      '과자',
      '건조기',
      '건조기1',
      '건조기 9Kg',
      '건조기 빨려면...',
      '건조기 이거는',
      '건조기 입니다.',
      '건조기 디자인',
      '건조기2',
      '건조기3',
      '건조기4',
      '건조기5'
    ]
  }),
  methods: {
    sum2 (a, b) {
      const result = a + b
      alert(result)
      return result
    },
    autocomplete () {
      var myData = this.myInputValue
      var substring = this.countries
      alert(substring.indexOf(myData))
      return myData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #fff;
  display: inline-block;
}
autocomplete {
  width: 300px;
  padding: 1em;
  margin-left: 20px;
  background: #000;
}
input {
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 16px;
}
input[type=submit] {
  background-color: white;
  color: #000;
  cursor: pointer;
}
label{
  line-height: 0em;
  text-align: left;
  font-size: 10px;
  margin-left: 20px;
  float: left;
}
a {
  color: #42b983;
}
.toplist{
  position: absolute;
  left: 0;
  top: 45%;
  margin-left: 20px;
  margin-bottom: 60px;
}
.bofooter{
  position: absolute;
  width: 100%;
  bottom: 50px;
  height: 50px;
}
</style>
