<template>
  <App class="app"/>
</template>

<script setup>
import "./fonts"
</script>

<style lang="scss">
@use './style' as colors;

* {
  margin: 0;
}

.app {
  font-family:  'Source Sans Pro', sans-serif;
  background: rgba(colors.$background, 0.8);
}
</style>
