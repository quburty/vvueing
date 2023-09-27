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
  <div class="profiles">
    <div v-for="user in users" :key="user">
      <div class="thumbnail">
        <img alt="thumbnail" src="./assets/thumbnail.jpg" />
      </div>
      <span>{{ user.name }}</span>
    </div>
  </div>
  <div class="timelines">
    <div v-for="timeline in timelines" :key="timeline" class="timeline">
      <div class="thumbnail">
        <img alt="thumbnail" src="./assets/thumbnail.jpg" />
      </div>
      <span>{{ timeline.name }}</span>
      <div class="images">
        <!-- <img alt="image" src="./assets/story.png" /> -->
        <img :src="timeline.img" />
      </div>
    </div>
  </div>
</template>

<script>
import { users, timelines } from "./assets/data.js";
import ModalComponent from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      price1: 50000,
      price2: 30000,
      products: ["역삼동원룸", "천호동원룸", "마포고원룸"],
      reports: 0,
      users: users,
      timelines: timelines,
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

    getImageUrl(name) {
      return new URL(name, import.meta.url).href;
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
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 200px;
  border-right: 1px solid gray;
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

.profiles {
  position: relative;
  height: 100px;
  width: 600px;
  left: 35vw;
  top: 0;
  border: 1px solid black;
  display: flex;
}

.profiles .thumbnail {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  margin: 15px;
}

.timelines {
  position: relative;
  height: 3000px;
  width: 500px;
  left: 38vw;
}

.timelines .timeline {
  position: relative;
  width: 500px;
  height: 850px;
  border: 1px solid black;
  display: flex;
}

.timelines .thumbnail {
  position: relative;
  left: 10px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  float: left;
}

.timelines .images {
  position: absolute;
  left: 0;
  top: 100px;
  height: 585px;
  width: 470px;
  overflow: hidden;
}
</style>
