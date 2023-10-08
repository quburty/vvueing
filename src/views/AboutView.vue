<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="one"> One </v-window-item>

      <v-window-item value="two"> Two </v-window-item>
    </v-window>
  </v-card>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",
  data() {
    return {
      tab: null,
    };
  },
});
</script>
