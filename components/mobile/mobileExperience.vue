<template lang="pug">
  .portfolio
    .container
      main.gallery
        h1 KMS Lighthouse
        img(ref="kms1Img").gallery__item(src="@/static/images/kms.png" alt="kms-lighthouse")
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

        h1 Special Technology Center
        img.gallery__item(src="@/static/images/stc.png" alt="stc")
        job.sibling(
          title="Frontend web developer"
          period="Mar 2020 - Mar 2021 · 1 yr 1 mo"
          location="Saint Petersburg, Russia"
          :description="stc"
          skills="storybook · Open API · Vue.js · Vuex · linux"
        )

        h1 Center of Innovate Technologies
        img.gallery__item(src="@/static/images/cit.png" alt="cit")
        job.sibling(
          title="Full Stack Engineer"
          period="Sep 2019 - Mar 2020 · 7 mos"
          location="Saint Petersburg, Russia"
          :description="cit"
          skills="Full-Stack Development · Vue.js · Laravel · PHP"
        )

        h1 Topvisor
        img.gallery__item.topvisor(src="@/static/images/topvisor.png" alt="topvisor")
        job.sibling(
          title="Full Stack Engineer"
          period="Feb 2018 - Sep 2019 · 1 yr 8 mos"
          location="Saint Petersburg, Russia"
          :description="topvisor"
          skills="PHP 7 · Full-Stack Development · MySQL · Data Architecture · ClickHouse · jQuery"
        )
</template>

<script setup lang="ts">
import {kms3, kms2, kms1, stc, cit, topvisor} from "@/static/texts/jobDescriptions";
</script>

<style lang="scss" scoped>
.gallery {
  padding: calc(var(--index) * 8) 0;

  & > * {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__item {
    max-width: calc(100% - var(--gallery-gap));
    margin: calc(var(--gallery-gap) / 2);
    max-height: 180vh;
    border-radius: 8px;
  }
}
h1 {
  margin-top: 30px;
  text-align: center;
}
</style>
