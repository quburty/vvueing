<template>
  <ModalComponent :msg="modalMessage" @close="modalOff" v-if="modal" />

  <div>
    <ul class="menu">
      <img class="logo" alt="instargam logo" src="./assets/logo.png" />
      <li><font-awesome-icon icon="fa-solid fa-house" /><span>홈</span></li>
      <li>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" /><span
          >검색</span
        >
      </li>
      <li>
        <font-awesome-icon :icon="['far', 'message']" /><span>메세지</span>
      </li>
      <li><font-awesome-icon :icon="['fas', 'user']" /><span>프로필</span></li>
    </ul>
  </div>
  <div v-for="item in rooms" :key="item">
    <h4>{{ item.name }}</h4>
    <p>{{ item.price }}만원</p>
    <button @click="item.report++"></button>
    <p>신고수: {{ item.report }}</p>
  </div>
</template>

<script>
import rooms from "./assets/data.js";
import ModalComponent from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      price1: 50000,
      price2: 30000,
      products: ["역삼동원룸", "천호동원룸", "마포고원룸"],
      reports: 0,
      rooms: rooms,
      modal: false,
      modalMessage: null,
    };
  },
  methods: {
    modalOn(msg) {
      this.modalMessage = msg;
      this.modal = true;
    },
    modalOff() {
      this.modal = false;
    },
  },
  components: {
    ModalComponent: ModalComponent,
  },
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

ul {
  list-style: none;
}

.menu {
  left: 0;
  top: 0;
  height: 100vh;
  width: 200px;
}

.menu .logo {
  width: 100px;
  height: 30px;
}

.menu li {
  width: 220px;
  height: 56px;
  text-align: left;
  padding: 12px;
  font-size: 24px;
}

.menu li span {
  padding-left: 16px;
  font-size: 16px;
  font-weight: 500;
}

button {
  height: 30px;
  width: 100px;
}
</style>
