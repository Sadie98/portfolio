<template lang="pug">
  .portfolio
    .container
      main.gallery
        .gallery__left("data-speed"=".9")
          img(ref="kms1Img").gallery__item(src="../static/images/kms.png" alt="kms-lighthouse")
          img(ref="kms2Img").gallery__item(src="../static/images/kms_team.jpeg" alt="kms-team")
          HighlightsText(
            header=""
            text=""
          )
          h1(:style="stcMargin") Special Technology Center
          job(
            title="Frontend web developer"
            period="Mar 2020 - Mar 2021 · 1 yr 1 mo"
            location="Saint Petersburg, Russia"
            :description="stc"
            skills="storybook · Open API · Vue.js · Vuex · linux"
          )

        .gallery__right(data-speed="1.1")
          h1.gallery__item KMS Lighthouse
          job(ref="kms1Text").sibling(
            title="R&D Team Lead & Frontend developer"
            period="Oct 2022 - Jul 2023 · 10 mos"
            location="Lisbon, Portugal"
            :description="kms3"
            skills="Pinia · Team Leadership · TypeScript · Vue 3 · JavaScript · Nuxt · Vite · Interviewing"
          )
          job(ref="kms2Text").sibling(
            title="Frontend web developer"
            period="Jun 2022 - Oct 2022 · 5 mos"
            location="Lisbon, Portugal"
            :description="kms2"
            skills="Front-End Development · Code Review · Interviewing · TypeScript · vue 3 · JavaScript"
          )
          job(ref="kms3Text").sibling(
            title="Frontend web developer"
            period="Mar 2021 - Jun 2022 · 1 yr 4 mos"
            location="Saint Petersburg, Russia"
            :description="kms1"
            skills="Jest · Pinia · Front-End Development · Code Review · Interviewing · Vue.js"
          )
          img.gallery__item(src="../static/images/stc.png" alt="stc")

</template>

<script setup lang="ts">
import HighlightsText from "./HighlightsText.vue";
import useScrollTrigger from "../composables/useScrollTrigger";
import { kms3, kms2, kms1, stc } from "../static/texts/jobDescriptions";
import {nextTick, onMounted, ref} from "vue";

useScrollTrigger();

let kms1Text = ref(null);
let kms2Text = ref(null);
let kms3Text = ref(null);
let stcMargin = ref('');

onMounted(() => {
  nextTick(() => {
    const kmsTextHeight = kms1Text.value.$el.clientHeight + kms2Text.value.$el.clientHeight + kms3Text.value.$el.clientHeight;
    const kmsImagesHeight = "calc(var(--index) * 21) * 2 + var(--gallery-gap)";

    stcMargin.value = `margin-top: calc(${kmsTextHeight}px - (${kmsImagesHeight}))`;
  })

});
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

  .sibling {
    margin: calc(var(--gallery-gap) / 2) 0 0;
  }
  .extra-margin {
    margin-top: calc(var(--gallery-gap));
  }
}
</style>
