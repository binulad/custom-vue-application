<template>
  <h3>Home Container</h3>
  <form>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="homeContent.name" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="text" name="age" id="age" v-model="homeContent.age" />
    </div>
  </form>
  {{homeContent}}
</template>

<script lang='ts'>
import store from "@/store";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeContainer",
  data() {
    return {
      homeContent: {
        name: null,
        age: null,
      },
      cloneHomeContent: {} as any
    }
  },
  watch: {
    "homeContent.name": function(newValue) {
      this.homeContent.name = (newValue == "") ? null : newValue;
      store.dispatch('setHomeContentObj', this.homeContent);
    },
    "homeContent.age": function(newValue) {
      this.homeContent.age = (newValue == "") ? null : newValue;
      store.dispatch('setHomeContentObj', this.homeContent);
    },
  },
  mounted() {
    store.dispatch('setHomeContentObj', this.homeContent);
    this.cloneHomeContent = JSON.parse(JSON.stringify(this.homeContent));
    store.dispatch('setCloneHomeContentObj', this.cloneHomeContent);
  },
});
</script>