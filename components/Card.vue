<template>
  <div class="card">
    <div class="card__container">
      <img :src="link" alt="product-image">
      <div class="card__text-content">
        <h3 class="card__title">{{name}}</h3>
        <p class="card__description">{{description }}</p>
        <p class="card__price">{{priceFormatted}} руб.</p>
      </div>
    </div>
  </div>

</template>

<script setup>
import {computed } from 'vue'

const props = defineProps({
  link: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: [String, Number],
    require: true
  }
})

const priceFormatted = computed((number) => {
  if(!props.price) return

  return new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0,
  }).format(props.price)
})
</script>

<style lang="scss">

</style>
