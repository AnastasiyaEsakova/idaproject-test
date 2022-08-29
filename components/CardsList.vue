<template>
  <div class="cards-list">
    <div class="cards-list__container">
      <Card  v-for="(card, key) in list" :key="key" v-bind="card"/>
    </div>
  </div>
</template>

<script setup>
import { cardData } from '../utils/constants.js'

const genereteList = () => {
  const arr = []
  for (let i = 0; i < 9; i++) {
    arr.push({id: i, ...cardData})
  }
  return arr
}
const list = genereteList()

</script>

<style lang="scss">
@use './style' as colors;

.cards-list__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fit, min-max(200px, 332px));
  gap: 16px;
}

@media screen and (max-width: 1024px){
  .cards-list__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px){
  .cards-list__container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
