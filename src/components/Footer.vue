<template>
  <li>
    <p>이 서비스는 빌리뷰팀이 만들고 있어요..</p>
    <p id="email">roorol@gmail.com</p>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
  }
}
</script>

<style scoped>
li {
  width: 100%;
  display: inline-block;
  padding: 6px;
}
p{
  font-size: 10px;
  color: black;
  text-align: center;
  line-height: 0em
}
p[id="email"]{
  font-size: 10px;
  color: black;
  text-align: center;
  text-decoration: underline;
  line-height: 0em
}
</style>
