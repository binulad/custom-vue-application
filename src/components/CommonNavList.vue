<template>
  <ul class="common-nav__list">
    <li class="common-nav__title">
      {{navTitle}}
    </li>
    <li v-for="(item, index) in navListing" :key="index" class="common-nav__item">
      <a :href="item.link" class="common-nav__link">
        {{item.name}}
      </a>
    </li>
  </ul>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CommonNavList",
  props: {
    navObject: {
      type: Object as any,
      required: true
    }
  },
  data() {
    return {
      navTitle: "",
      navListing: new Array<any>()
    }
  },
  mounted() {
    this.navTitle = this.navObject.title;
    this.navListing = this.navObject.navList;
  }
});
</script>