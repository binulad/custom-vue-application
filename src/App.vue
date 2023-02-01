<template>
  <div class="wrapper-container">
    <main-header />
    <main class="content-wrapper">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "@/components/MainHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    MainHeader,
  },
  computed: {
    isDarkTheme() {
      // return store.getters.getDarkTheme;
      return localStorage.getItem("theme");
    },
  },
  mounted() {
    if (this.isDarkTheme == "dark") {
      document.body.classList.add("dark-theme");
    }
  },
});
</script>


<style lang="scss">
#app {
  height: 100%;
  width: 100%;
}
</style>
