<template>
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container text-center">
      <h1 class="hero-title">
        The <span class="gradient-bg">Progressive</span> JavaScript Framework
      </h1>
      <p class="hero-desc">
        An approachable, performant and versatile framework for building web
        user interfaces.
      </p>
    </div>
  </section>
  <!-- End: Hero Section -->

  <!-- Footer -->
  <main-footer />
  <!-- End: Footer -->
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import MainFooter from "@/components/MainFooter.vue";
export default defineComponent({
  name: "HomeView",
  components: { MainFooter },
});
</script>
