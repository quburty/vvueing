<template>
  <ModalComponent
    :msg="modalMessage"
    @close="modalOff"
    @submit="pushNewFeed"
    v-if="modal"
  />
  <v-container>
    <v-row justify="center" style="margin-bottom: 30px">
      <div class="profiles" style="width: 630px; height: 100px">
        <v-container class="d-flex">
          <v-sheet v-for="user in users" :key="user" :width="78">
            <v-sheet class="pa-2">
              <v-img
                alt="thumbnail"
                :src="user.thumbnail"
                :aspect-ratio="1 / 1"
                style="
                  border-radius: 50%;
                  border: linear-gradient(
                    225deg,
                    #833ab4 0%,
                    #fd1d1d 50%,
                    #fcb045 100%
                  );
                "
              />
            </v-sheet>
            <span>{{ user.name }}</span>
          </v-sheet>
        </v-container>
      </div>
    </v-row>
    <v-container class="d-flex justify-center">
      <TimeLines :feeds="feeds" :users="users"></TimeLines>
    </v-container>
  </v-container>
  <div class="add">
    <IconComponent
      sort="fas"
      icon="plus"
      @click="addTimeline()"
    ></IconComponent>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import ModalComponent from "../components/Modal.vue";
import IconComponent from "../components/Icon.vue";
import TimeLines from "../components/Timelines.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      users: [],
      feeds: [],
      modal: false,
      modalMessage: null,
    };
  },

  components: {
    ModalComponent: ModalComponent,
    IconComponent: IconComponent,
    TimeLines: TimeLines,
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
      this.users = [];

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
                thumbnail: require("../assets/thumbnail.jpg"),
              });
            });
          });
        });
    },

    initFeedData() {
      this.feeds = [];

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
              this.feeds.push({
                name: e.name,
                img: e.img,
                describe: e.describe,
                likes: e.likes,
                like: false,
                bookmark: false,
              });
            });

            this.feeds.reverse();
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

  mounted() {
    this.initUserData();
    this.initFeedData();
  },
});
</script>

<style scoped>
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

/* .profiles {
  position: relative;
  height: 100px;
  width: 600px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 30px;
  overflow: hidden;
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
}*/

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

  .menu {
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
    left: 50vw;
    transform: translate(-50vw, 0);
  }
}
</style>
