<template>
  <div class="timelines">
    <div v-for="timeline in feeds" :key="timeline" class="timeline">
      <v-row class="top-bar w-100" align="center" height="44px">
        <v-col md="1" class="thumbnail">
          <v-img
            alt="thumbnail"
            :src="findUser(timeline.name)"
            :width="50"
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
        </v-col>
        <v-col align="left">
          <span style="font-weight: 600; margin: 0 10px" class="text-title">{{
            timeline.name
          }}</span>
          <span style="padding-left: 10px">1일전</span>
        </v-col>
        <!-- <v-icon icon="fa:fas fa-lock"></v-icon> -->
        <IconComponent
          sort="fas"
          icon="ellipsis"
          class="timeline-icon"
          justify="end"
          style="justify-self: end"
        ></IconComponent>
      </v-row>
      <v-img
        :src="timeline.img"
        :width="468"
        :height="585"
        :cover="true"
      ></v-img>
      <!-- <div class="images" style="width: 468px; height: 585px">
        <img style="object-fit: cover" :src="timeline.img" />
      </div> -->
      <v-row class="buttons">
        <v-col cols="12" md="1">
          <IconComponent
            :sort="timeline.like ? 'fas' : 'far'"
            icon="heart"
            @click="
              timeline.likes++;
              timeline.like = true;
            "
          ></IconComponent>
        </v-col>
        <v-col md="1">
          <IconComponent sort="far" icon="message"></IconComponent>
        </v-col>
        <v-col md="1" class="ml-auto mr-0">
          <IconComponent
            :sort="timeline.bookmark ? 'fas' : 'far'"
            icon="bookmark"
            class="right"
            @click="timeline.bookmark = true"
          ></IconComponent>
        </v-col>
      </v-row>
      <v-sheet height="50" style="text-align: left">
        <p>
          <b>좋아요 {{ timeline.likes }}개</b>
        </p>
      </v-sheet>
      <v-sheet height="100" style="text-align: left">
        <p>
          <b>{{ timeline.name }} </b> {{ timeline.describe }}
        </p>
      </v-sheet>
    </div>
    <!--timeline-->
  </div>
</template>

<script>
import IconComponent from "./Icon.vue";

export default {
  name: "TimeLines",
  props: {
    users: Array,
    feeds: Array,
  },
  data() {
    return {
      //timelines: timelines,
    };
  },
  methods: {
    findUser(name) {
      var user = this.users.find((e) => {
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*
.timelines .timeline {
  position: relative;
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

*/
</style>
