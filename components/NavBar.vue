<template>
  <div class="nav-bar">
    <div class="nav-bar__container">
      <h1 class="nav-bar__title">Добавление товара</h1>
      <Select />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@use './style' as colors;

.nav-bar__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-bar__title {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: colors.$gray01;

}

@media screen and (max-width: 600px){
  .nav-bar__container {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .nav-bar__title {
    font-weight: 600;
    font-size: 20px;
  }
}

</style>
