<template>
  <ModalComponent
    :msg="modalMessage"
    @close="modalOff"
    @submit="pushNewFeed"
    v-if="modal"
  />

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
    <div v-for="user in users" :key="user.id">
      <div class="thumbnail">
        <img alt="thumbnail" :src="user.thumbnail" />
      </div>
      <span>{{ user.name }}</span>
    </div>
  </div>
  <TimeLines></TimeLines>
  <div class="add">
    <IconComponent
      sort="fas"
      icon="plus"
      @click="addTimeline()"
    ></IconComponent>
  </div>
</template>

<script>
import { users, timelines } from "./assets/data.js";
import ModalComponent from "./components/Modal.vue";
import IconComponent from "./components/Icon.vue";
import TimeLines from "./components/Timelines.vue";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

export default {
  name: "App",
  data() {
    return {
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

    addTimeline() {
      this.modal = true;
    },

    initUserData() {
      const db = firebase.firestore();
      db.collection("feeds")
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            if (doc.id != "XvmAeplyodgMqjWZVpbF") {
              return;
            }

            if (doc.data().user == undefined) {
              return;
            }

            doc.data().user.forEach((e) => {
              this.users.push({
                name: e.name,
                thumbnail: require("./assets/thumbnail.jpg"),
              });
            });
          });
        });
    },

    initFeedData() {
      const db = firebase.firestore();

      db.collection("feeds")
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            if (doc.id != "XvmAeplyodgMqjWZVpbF") {
              return;
            }

            if (doc.data().feeds == undefined) {
              return;
            }

            doc.data().feeds.forEach((e) => {
              this.timelines.push({
                name: e.name,
                img: e.img,
                describe: e.describe,
                likes: e.likes,
                like: false,
                bookmark: false,
              });
            });

            this.timelines.reverse();
          });
        });
    },

    pushNewFeed(msg, file) {
      var upload = undefined;
      var storagePath = "";

      if (file != undefined) {
        const storage = firebase.storage();

        var storageRef = storage.ref();
        var path = storageRef.child("image/" + file.name);
        upload = path.put(file);

        console.log(upload);
        storagePath =
          "https://firebasestorage.googleapis.com/v0/b/vueinstagram-6dc6b.appspot.com/o/" +
          "image%2F" +
          file.name +
          "?alt=media";
      }

      const db = firebase.firestore();
      const feedRef = db.collection("feeds").doc("XvmAeplyodgMqjWZVpbF");

      feedRef
        .update({
          feeds: firebase.firestore.FieldValue.arrayUnion({
            name: "615_note",
            describe: msg,
            img: storagePath,
            likes: 0,
          }),
        })
        .then(() => {
          this.$router.go();
        });
    },
  }, //methods

  components: {
    ModalComponent: ModalComponent,
    IconComponent: IconComponent,
    TimeLines: TimeLines,
  },

  created() {
    this.initUserData();
    this.initFeedData();
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
  z-index: 3;
  background: white;
}

.menu .logo {
  width: 103px;
  height: 50px;
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
  display: flex;
  margin-bottom: 30px;
}

.thumbnail {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  margin: 15px;
  border: 3px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(225deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

img {
  width: 100%;
  height: 100%;
}

.timelines {
  position: relative;
  min-height: 600px;
  width: 500px;
  left: 38vw;
}

.add {
  position: fixed;
  bottom: 20px;
  left: 50vw;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 5px #000;
  border-radius: 25px;
  background: white;
}

@media (max-width: 767px) {
  .app {
    display: flex;
    justify-content: center;
  }

  .profiles {
    display: none;
  }

  .menu {
    position: fixed;
    left: 0;
    top: 0;
    height: 80px;
    width: 100vw;
    border: none;
    border-bottom: 1px solid gray;
  }

  .menu .logo {
    margin: auto;
  }

  .menu li {
    display: none;
  }

  .timelines {
    position: relative;
    top: 50px;
    left: 15vw;
  }
}
</style>
