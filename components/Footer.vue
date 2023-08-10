<script setup lang="ts">

</script>

<template lang="pug">
  .footer
    .social-media
      a(href="https://www.linkedin.com/in/uliana-stiagailo-3530131a2/" target="blank")
        img.img(src="../static/images/linkedin.png" alt="Alt")
      a(href="https://t.me/uliana_stiagailo" target="blank")
        img.img(src="../static/images/telegram.png" alt="Alt")
      a(href="https://www.tiktok.com/@uliana_stiagailo?_t=8ejABUwLDnM" target="blank")
        img.img(src="../static/images/tiktok.png" alt="Alt")
      a(href="https://www.instagram.com/uliana.stiagailo" target="blank")
        img.img(src="../static/images/instagram.png" alt="Alt")
</template>

<style scoped lang="scss">
.footer {
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #317f62;
  color: white;
  text-align: center;
}
.img {
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.social-media {
  right: 0;
  position: absolute;
}
</style>
