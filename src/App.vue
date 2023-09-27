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
      <div class="top-bar">
        <div class="thumbnail">
          <img alt="thumbnail" src="./assets/thumbnail.jpg" />
        </div>
        <span style="font-weight: 600">{{ timeline.name }}</span
        ><span style="padding-left: 10px">1일전</span>
        <font-awesome-icon :icon="['fas', 'ellipsis']" class="timeline-icon" />
      </div>
      <div class="images">
        <!-- <img alt="image" src="./assets/story.png" /> -->
        <img :src="timeline.img" />
      </div>
      <div class="buttons">
        <div class="icon heart">
          <font-awesome-icon :icon="['far', 'heart']" />
        </div>
        <div class="icon message">
          <font-awesome-icon :icon="['far', 'message']" />
        </div>
        <div class="icon bookmark">
          <font-awesome-icon :icon="['far', 'bookmark']" />
        </div>
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
      products: ["역삼동원룸", "천호동원룸", "마포동원룸"],
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
  width: 103px;
  height: 29px;
  margin: 30px;
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

img {
  width: 100%;
  height: 100%;
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
}

.timelines .top-bar {
  position: relative;
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

.timeline-icon {
  position: absolute;
  width: 24px;
  height: 24px;
}

.timlines .timeline-icon {
  right: 10px;
}

.timelines .images {
  left: 0;
  top: 100px;
  height: 585px;
  width: 470px;
  overflow: hidden;
}

.buttons {
  position: relative;
  border: 1px solid black;
  height: 40px;
  width: 100%;
  margin: 5px 0;
  display: flex;
}

.buttons .icon {
  height: 36px;
  width: 36px;
}

.buttons .icon.bookmark {
  position: absolute;
  right: 10px;
}
</style>
