<template>
  <div class="app">
    <layout />
  </div>
</template>
<script>
import Layout from "./Layout.vue";
export default {
    components: {
        Layout
    }
};
</script>
<style>
html, body {
  height: 100%;
}
.app {
  height: 100%;
  background-color: #f3f3f3;
}
</style>