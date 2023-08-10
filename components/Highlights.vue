<template lang="pug">
  .portfolio
    .container
      main.gallery
        .gallery__left("data-speed"=".9")
          img.gallery__item(src="../static/images/photo_5.jpeg" alt="Alt")
          img.gallery__item(src="../static/images/photo_1.jpeg" alt="Alt")
          HighlightsText(
            header="Backend development"
            text="I started my career mostly as BE engineer, so I'm proficient in PHP, Laravel, Database architecture, API design, UML. Almost everything you wish."
          )
          img.gallery__item(src="../static/images/php.png" alt="Alt")
          HighlightsText(
            header="Bachelor's degree in Applied Computer science"
            text="The university gave me an excellent basic education. Most of all I was successful in databases, programming, computer architecture and operating systems. In my senior years, I was most interested in optimization methods (Applied Computer Science) and systems analysis. It was very difficult to combine full-time and face-to-face training, but it was worth it!"
          )

        .gallery__right(data-speed="1.1")
          HighlightsText(
            header="Frontend web development"
            text="Vue.js, JavaScript, TypeScript, Nuxt.js, Vite, Vitest. Anything you wish. I started working with FE in 2018 - it was JQuery. Then I moved to Vue. But Jquery knowledge are still fresh!"
          )
          img.gallery__item(src="../static/images/vue.png" alt="Alt")
          img.gallery__item(src="../static/images/photo_2.jpeg" alt="Alt")
          img.gallery__item(src="../static/images/photo_3.jpeg" alt="Alt")
          img.gallery__item(src="../static/images/education.png" alt="Alt")
</template>

<script setup lang="ts">
import HighlightsText from "./HighlightsText.vue";
import useScrollTrigger from "../composables/useScrollTrigger";

useScrollTrigger();

</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  padding: calc(var(--index) * 8) 0;

  & > * {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__item {
    max-width: calc(var(--index) * 21);
    margin-bottom: var(--gallery-gap);
    max-height: 180vh;
    border-radius: 8px;
  }

  &__left {
    margin-top: calc(var(--gallery-gap) * 1.75);
  }

  &__right, &__item {
    margin: var(--gallery-gap) 0 0;
  }
}
</style>
