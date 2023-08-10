<template lang="pug">
  .text-block.gallery__item
    h2.text-block__h {{ header }}
    p.text-block__p {{ text }}
</template>

<script setup lang="ts">
const props = defineProps<{
  header: string;
  text: string;
}>();
</script>

<style lang="scss" scoped>
.text-block {
  color: var(--color-text);
  position: relative;

  &__h {
    font-size: 2rem;
    line-height: 2.4rem;
    color: var(--color-header);
    margin-bottom: 1.5rem;
  }

  &__p {
    line-height: 1.75;
  }
}
</style>
