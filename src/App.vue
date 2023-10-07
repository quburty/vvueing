<template>
  <v-app>
    <v-main row wrap>
      <v-navigation-drawer class="menu" style="border: 1px solid black">
        <v-list-item title="Vuestagram"></v-list-item>
        <v-divider></v-divider>
        <router-link to="/home">
          <v-list-item link title="홈">
            <font-awesome-icon icon="fa-solid fa-house" />
          </v-list-item>
        </router-link>
        <router-link to="/home">
          <v-list-item link title="메세지">
            <font-awesome-icon :icon="['far', 'message']" />
          </v-list-item>
        </router-link>
        <router-link to="/about">
          <v-list-item link title="프로필">
            <font-awesome-icon :icon="['fas', 'user']" />
          </v-list-item>
        </router-link>
      </v-navigation-drawer>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {}, //methods

  components: {},
};
</script>

<style>
.router-div {
  position: absolute;
  z-index: 6;
  left: 0;
  top: 0;
  width: 30%;
  height: 30%;
}

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

.v-list-item__content {
  color: black;
}
</style>
