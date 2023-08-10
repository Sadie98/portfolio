<script setup type="module" lang="ts">
import ScrollableContainer from "../components/ScrollableContainer.vue";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import ScrollSmoother from "../src/libs/gsap/ScrollSmoother.min.js";
import { gsap } from "gsap";
import { onMounted } from "vue";


gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  if (ScrollTrigger.isTouch === 1) return;

  // ScrollSmoother.create({
  //   wrapper: '.wrapper',
  //   content: '.content',
  //   smooth: 1.5,
  //   effects: true
  // })

  gsap.fromTo('.hero-section', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end: '820',
      scrub: true
    }
  })
})

</script>

<template>
  <ScrollableContainer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --index: calc(1vw + 1vh);
  --color-header: #f4efec;
  --color-text: #cdc6c3;
  --gallery-gap: calc(var(--index) * 6.5)
}
@font-face {
  font-family: raleway-c;
  src: url(static/fonts/raleway-regular.woff2);
}
@font-face {
  font-family: outfit-c;
  src: url(static/fonts/outfit-regular.woff2);
}
h1, h2, h3, h4, h5, h6 {
  font-family: outfit-c;
}
/* will-change */
.content, .hero, .main-header, .gallery > * {
  will-change: transform;
}
body {
  background-color: #030303;
  color: #fafafa;
  font-family: raleway-c;
  overflow-x: hidden;
}
</style>
