<template lang="pug">
  header.hero-section
    img.hero("data-speed"=".6" src="../static/images/main_photo.png" alt="Alt")
    .container
      p.main-header("data-speed"=".75")
        h1.main-title Your experienced Frontend Developer Uliana Stiagailo
</template>

<style scoped>
.hero {
  width: calc(var(--index) * 36);
  position: absolute;
  left: 37vw;
  top: -15vh;
  z-index: -1;
}
.main-header {
  height: 100vh;
}
.container {
  padding: 0 7vw;
}
.main-title {
  font-size: calc(var(--index) * 4);
  position: absolute;
  width: min-content;
  top: 25vh;
  line-height: .9;
}
</style>
