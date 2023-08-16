<script setup lang="ts">

import PhotoHeader from "~/components/PhotoHeader.vue";
import Highlights from "~/components/Highlights.vue";
import { ref } from "vue";

const isMobile = ref(globalThis.innerWidth <= 500);

</script>
<template lang="pug">
  .wrapper
    .content
      PhotoHeader
      mobileHighlights(v-if="isMobile")
      Highlights(v-else)
      Separator
      mobileExperience(v-if="isMobile")
      Experience(v-else)
      Footer
</template>

<style lang="scss">
  .wrapper {
    margin-bottom: 30px;
  }
</style>

