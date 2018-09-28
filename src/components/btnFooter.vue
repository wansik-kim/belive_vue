<template>
  <footer>
    <div>
      <li>
        <img :src="searchImg" @click="send" style="margin-left: auto; margin-right: auto; display: block;"/>
      </li>
      <li>
        <img :src="bmkImg" @click="send" style="margin-left: auto; margin-right: auto; display: block;"/>
      </li>
    </div>
  </footer>
</template>

<script>
import searchImg from "../assets/search_btn.png"
import bmkImg from "../assets/bookmark.png"

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: function () {
      return {
          searchImg: searchImg,
          bmkImg: bmkImg
      }
  }
}
</script>

<style scoped>
li {
  background: rgb(240, 240, 240);
  width: 50%;
  display: inline-block;
}
img{
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>
