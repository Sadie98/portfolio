<script setup lang="ts">

</script>

<template>
  <header class="hero-section">
    <img data-speed=".6" class="hero" src="../static/images/main_photo.png" alt="Alt" >
    <div class="container">
      <p data-speed=".75" class="main-header">
        <h1 class="main-title">Your experienced Frontend Developer Uliana Stiagailo</h1>
      </p>
    </div>
  </header>
</template>

<style  scoped>
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
