<template>
  <div class="toplist">
    <ul>
      <label id="top">최근 1주일 검색 순위</label>
    </ul>
    <br>
    <a href="https://m.blog.naver.com/schneesun85/221279782845">
    <ul>
      <label id="sub">1. 건조기 9kg</label>
    </ul>
    </a>
    <a href="https://m.blog.naver.com/PostView.nhn?blogId=jihye7822&logNo=221256530716&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F">
    <ul>
      <label id="sub">2. 트롬 건조기 14kg</label>
    </ul>
    </a>
    <a href="https://www.clien.net/service/board/use/8674160">
    <ul>
      <label id="sub">3. 퓨리케어 공청기</label>
    </ul>
    </a>
    <a href="https://brunch.co.kr/@repd/5">
    <ul>
      <label id="sub">4. 에어 프라이어</label>
    </ul>
    </a>
    <a href="http://dieadesign.tistory.com/42">
    <ul>
      <label id="sub">5. 디자인 선풍기</label>
    </ul>
    </a>
  </div>
</template>

<script>
export default {
  name: "TopList",
  data: () => ({
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
  line-height: 10px;
}
li {
  background: #fff;
  display: inline-block;
}
md-autocomplete {
  width: 300px;
  padding: 1em;
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
label[id="top"] {
  text-align: left;
  font-size: 15px;
  color: #000;
  font-weight: bold;
}
label[id="sub"] {
  text-align: left;
  font-size: 15px;
  color: #000;
  font-weight: bold;
}
label{
  font-size: 10px;
}
a {
  color: #42b983;
}
</style>
