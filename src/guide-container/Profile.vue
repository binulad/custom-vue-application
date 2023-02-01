<template>
  <h3>Profile Container</h3>
  <form>
    <div>
      <label for="fname">First Name</label>
      <input type="text" name="fname" id="fname" />
    </div>
  </form>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProfileContainer'
});
</script>