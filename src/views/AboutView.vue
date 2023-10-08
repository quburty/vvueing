<template>
  <v-sheet>
    <v-row style="height: 300px" align="center">
      <v-col md="4" sm="4" xs="4" align="center">
        <v-img
          alt="thumbnail"
          src="../assets/thumbnail2.jpg"
          :aspect-ratio="1 / 1"
          width="150px"
          cover="true"
          style="border-radius: 50%"
        >
        </v-img>
      </v-col>
      <v-col md="8" sm="8" xs="8" align="left">
        <v-card-text class="d-flex align-center text-h5 pl-0">
          quburty
          <IconComponent sort="fas" icon="gear"></IconComponent>
        </v-card-text>
        <br />
        <span
          >게시물 <b>{{ feeds.length }}</b> 팔로워 <b>70</b> 팔로우
          <b>80</b></span
        >
        <br />
        <span>돈 많이 벌고 싶다</span>
      </v-col>
    </v-row>
  </v-sheet>

  <v-card>
    <v-tabs v-model="tab" align-tabs="center" bg-color="white">
      <v-tab value="one">게시물</v-tab>
      <v-tab value="two">정보</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="one">
        <v-row>
          <v-col v-for="feed in feeds" :key="feed" md="4">
            <v-img
              alt="thumbnail"
              :src="feed.img"
              :aspect-ratio="1 / 1"
              cover="true"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-window-item>

      <v-window-item value="two">
        <v-card-text>
          웹 애플리케이션 이름: Vuestagram
          <br />
          개발자의 허가 없이 무단 복제, 수정 등을 금합니다.
          <br />
          제작자: quburty
          <a href="https://github.com/quburty/vvueing">Github</a>
        </v-card-text>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script>
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import IconComponent from "../components/Icon.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",
  data() {
    return {
      tab: null,
      feeds: [],
    };
  },

  components: {
    IconComponent: IconComponent,
  },

  methods: {
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
              if (e.name != "quburty") {
                return;
              }

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
  },

  mounted() {
    //this.initUserData();
    this.initFeedData();
  },
});
</script>
