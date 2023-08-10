<script setup lang="ts">

const props = defineProps<{
  header: string;
  text: string;
}>();

</script>

<template>
  <div class="text-block gallery__item">
    <h2 class="text-block__h">{{ header }}</h2>
    <p class="text-block__p">{{ text }}</p>
  </div>
</template>

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