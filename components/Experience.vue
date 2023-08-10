<template lang="pug">
  .portfolio
    .container
      main.gallery
        .gallery__left("data-speed"=".9")
          img(ref="kms1Img").gallery__item(src="../static/images/kms.png" alt="kms-lighthouse")
          img(ref="kms2Img").gallery__item(src="../static/images/kms_team.jpeg" alt="kms-team")
          h1(:style="stcMargin") Special Technology Center
          job.sibling(
            title="Frontend web developer"
            period="Mar 2020 - Mar 2021 · 1 yr 1 mo"
            location="Saint Petersburg, Russia"
            :description="stc"
            skills="storybook · Open API · Vue.js · Vuex · linux"
          )
          img.gallery__item(src="../static/images/cit.png" alt="cit")
          h1.gallery__item Topvisor
          job.sibling(
            title="Full Stack Engineer"
            period="Feb 2018 - Sep 2019 · 1 yr 8 mos"
            location="Saint Petersburg, Russia"
            :description="topvisor"
            skills="PHP 7 · Full-Stack Development · MySQL · Data Architecture · ClickHouse · jQuery"
          )

        .gallery__right(data-speed="1.1")
          h1 KMS Lighthouse
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
          h1.gallery__item Center of Innovate Technologies
          job.sibling(
            title="Full Stack Engineer"
            period="Sep 2019 - Mar 2020 · 7 mos"
            location="Saint Petersburg, Russia"
            :description="cit"
            skills="Full-Stack Development · Vue.js · Laravel · PHP"
          )
          img.gallery__item.topvisor(src="../static/images/topvisor.png" alt="topvisor")


</template>

<script setup lang="ts">
import HighlightsText from "./HighlightsText.vue";
import useScrollTrigger from "../composables/useScrollTrigger";
import { kms3, kms2, kms1, stc, cit, topvisor } from "../static/texts/jobDescriptions";
import {nextTick, onMounted, ref} from "vue";

useScrollTrigger();

let kms1Text = ref(null);
let kms2Text = ref(null);
let kms3Text = ref(null);
let stcMargin = ref('');

onMounted(() => {
    const kmsTextHeight = kms1Text.value.$el.clientHeight + kms2Text.value.$el.clientHeight + kms3Text.value.$el.clientHeight;
    const kmsImagesHeight = "calc(var(--index) * 21) * 2 + var(--gallery-gap)";

    stcMargin.value = `margin-top: calc(${kmsTextHeight}px + calc(var(--gallery-gap)*2) - (${kmsImagesHeight}))`;
});
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;

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

  .topvisor {
    margin-top: calc(var(--gallery-gap)*2.5);
  }
}
</style>
