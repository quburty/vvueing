<template>
  <div v-if="modal" class="black-bg">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
      <button @click="modal = false">Close</button>
    </div>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" @click="modal = true" />
  <div v-for="item in rooms" :key="item">
    <h4>{{ item.name }}</h4>
    <p>{{ item.price }}만원</p>
    <button @click="item.report++"></button>
    <p>신고수: {{ item.report }}</p>
  </div>
</template>

<script>
import rooms from "./assets/data.js";

export default {
  name: "App",
  data() {
    return {
      price1: 50000,
      price2: 30000,
      products: ["역삼동원룸", "천호동원룸", "마포고원룸"],
      reports: 0,
      modal: false,
      rooms: rooms,
    };
  },
  methods: {
    increase() {
      this.reports++;
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

button {
  height: 30px;
}
</style>
