<template>
  <span>{{ timelines.length }}</span>
  <div class="timelines">
    <div v-for="timeline in timelines" :key="timeline" class="timeline">
      <div class="top-bar">
        <div class="thumbnail">
          <img alt="thumbnail" :src="findUser(timeline.name)" />
        </div>
        <span style="font-weight: 600; margin: 0 10px">{{ timeline.name }}</span
        ><span style="padding-left: 10px">1일전</span>
        <IconComponent
          sort="fas"
          icon="ellipsis"
          class="timeline-icon"
        ></IconComponent>
      </div>
      <div class="images">
        <!-- <img alt="image" src="./assets/story.png" /> -->
        <img :src="timeline.img" />
      </div>
      <div class="buttons">
        <IconComponent
          :sort="timeline.like ? 'fas' : 'far'"
          icon="heart"
          @click="
            timeline.likes++;
            timeline.like = true;
          "
        ></IconComponent>
        <IconComponent sort="far" icon="message"></IconComponent>
        <IconComponent
          :sort="timeline.bookmark ? 'fas' : 'far'"
          icon="bookmark"
          class="right"
          @click="timeline.bookmark = true"
        ></IconComponent>
      </div>
      <div style="text-align: left">
        <p>
          <b>좋아요 {{ timeline.likes }}개</b>
        </p>
      </div>
      <div style="text-align: left">
        <p>
          <b>{{ timeline.name }} </b> {{ timeline.describe }}
        </p>
      </div>
    </div>
    <!--timeline-->
  </div>
</template>

<script>
import { users, timelines } from "../assets/data.js";
import IconComponent from "./Icon.vue";

export default {
  name: "TimeLines",
  props: {},
  data() {
    return {
      timelines: timelines,
    };
  },
  methods: {
    findUser(name) {
      var user = users.find((e) => {
        return e.name == name;
      });

      if (user == undefined) {
        return null;
      }

      return user.thumbnail;
    },
  },
  components: {
    IconComponent: IconComponent,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.timelines .timeline {
  position: relative;
  width: 500px;
  height: 800px;
  border-bottom: 1px solid #cacaca;
  margin: 30px 0;
}

.timelines .top-bar {
  position: relative;
  display: flex;
  align-items: center;
}

.timelines .thumbnail {
  position: relative;
  left: 5px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  float: left;
  border-radius: 25px;
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

.timeline-icon {
  position: absolute;
  width: 24px;
  height: 24px;
}

.timelines .timeline-icon {
  position: absolute;
  right: 10px;
}

.timelines .images {
  left: 0;
  top: 100px;
  height: 585px;
  width: 100%;
  overflow: hidden;
}

.timelines .images img {
  object-fit: cover;
}

.buttons {
  position: relative;
  height: 40px;
  width: 100%;
  margin: 5px 0;
  display: flex;
  align-items: center;
}

.right {
  position: absolute;
  right: 5px;
}
</style>
