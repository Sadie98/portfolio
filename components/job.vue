<script setup lang="ts">
const props = defineProps<{
  title: string,
  period: string,
  location: string,
  description: string,
  skills: string,
}>();
</script>

<template lang="pug">
.text-block.gallery__item
  h3.text-block__title {{ title }}
  p.text-block__period {{ period }}
  p.text-block__location {{ location }}
  p.text-block__description(v-html="description" )
  p.text-block__skills
    b Skills: {{ skills }}

</template>

<style lang="scss" scoped>
.text-block {
  color: var(--color-text);
  position: relative;

  &__title {
    font-size: 2rem;
    line-height: 2.4rem;
    color: var(--color-header);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  &__period {
    line-height: 1.75;
  }

  &__location, &__description {
    margin-bottom: 25px;
  }
}
</style>
