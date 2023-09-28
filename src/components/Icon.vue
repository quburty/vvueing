<template>
  <div class="icon">
    <font-awesome-icon class="f-icon" :icon="[sort, icon]" />
  </div>
</template>

<script>
export default {
  name: "IconComponent",
  props: ["sort", "icon"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.icon {
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  cursor: pointer;
}

.icon .f-icon {
  height: 70%;
  width: 70%;
}
.icon:hover {
  opacity: 0.5;
}
</style>
