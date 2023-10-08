<template>
  <v-app>
    <v-main row wrap>
      <v-navigation-drawer class="menu">
        <v-list-item title="Vuestagram"></v-list-item>
        <v-divider></v-divider>

        <router-link to="/home" style="text-decoration: none; color: inherit">
          <v-list-item link height="50px" align="left">
            <font-awesome-icon icon="fa-solid fa-house" width="50px" /> 홈
          </v-list-item>
        </router-link>

        <router-link to="/about" style="text-decoration: none; color: inherit">
          <v-list-item link height="50px" align="left">
            <font-awesome-icon :icon="['fas', 'user']" width="50px" /> 프로필
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

/* .thumbnail {
  width: 60px;
  height: 60px;
} */
</style>
