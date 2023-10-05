<template>
  <v-app>
    <v-main>
      <v-navigation-drawer>
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
      <!-- <div>
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
          <li>
            <font-awesome-icon :icon="['fas', 'user']" /><span>프로필</span>
          </li>
        </ul>
      </div> -->
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
</style>
