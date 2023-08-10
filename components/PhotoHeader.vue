<template lang="pug">
  header.hero-section
    img.hero("data-speed"=".6" src="../static/images/main_photo.png" alt="Alt")
    .container
      p.main-header("data-speed"=".75")
        h1.main-title.title-1 Your experienced Frontend Developer
        h1.main-title.title-2 Uliana Stiagailo
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
  line-height: .9;
}
.title-1 {
  top: 15vh;
}
.title-2 {
  top: 60vh;
}
</style>
