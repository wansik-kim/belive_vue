<template>
  <div id="example-1">
    <li id="div_li">
      <md-autocomplete
      class="autocomplete-search"
      v-model="myInputValue" :md-options="countries">
      </md-autocomplete>
      <label> {{ txt_label1 }} </label>
    </li>
    <li>
      <input @click="sender" type="submit" >
    </li>
  </div>
</template>

<script>
import Router from '../router'
import { eventBus } from '../main'

//부산인구 3,810,778 만큼의 리뷰를 빌리뷰를 \n통해 보실 수 있어요
export default {
  name: 'AutocompleteStatic',
  data: () => ({
    txt_label1 : "부산인구 3,810,778 만큼의 리뷰를 빌리뷰를 통해 보실 수 있어요",
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
  created() {
      eventBus.$on('message', this.onReceive);
  },
  methods: {
    sender() {
      window.console.log('sendor');
      //this.$eventBus.$emit('search_title', this.myInputValue);
      eventBus.$emit('search_title',this.myInputValue);
      var myData = this.myInputValue;
      Router.push({ path: 'ReviewList' })
      return myData;
    },
    goto () {
      var myData = this.myInputValue;
      Router.push({ path: 'ReviewList' })
      return myData;
    },
    onReceive(text) {
      window.console.log('onReceive');
      window.console.log(text);
      this.txt_label1 = text;
      setTimeout(function() {
          this.txt_label1 = '';
      }, 1500);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
search {
  max-width: 500px;
}
.autocomplete-search{
  padding-left: 20px;
}
li[id="div_li"] {
  padding-left: 10px;
  display: inline-block;
}
li {
  background: #fff;
  vertical-align: top;
  display: inline-block;
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
  width:180px;
  text-align: left;
  font-size: 10px;
  margin-left: 20px;
  float: left;
}
</style>
