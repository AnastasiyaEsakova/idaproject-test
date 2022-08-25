<template>
  <div class="card">
    <div class="card__container">
      <div class="card__delete-icon" />
      <img src="../assets/images/product.png" alt="product-image" class="card__image">
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
  }).format(Number(props.price))
})
</script>

<style lang="scss">
@use './style' as colors;

.card__container {
  background: colors.$background;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  &:hover {
    .card__delete-icon {
      opacity: 1;
      transition: 0.3s linear;
    }
  }
}

.card__delete-icon {
  background: colors.$red01;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 32px;
  height: 32px;
  position: absolute;
  top: -8px;
  right: -8px;
  opacity: 0;

  &::after {
    content: '';
    background-image: url(../assets/images/delete.svg);
    background-repeat: no-repeat;
    background-size: contain;
    width: 19px;
    height: 16px;
    position: absolute;
    top: 8px;
    left: 9px;
  }
}

.card__image {
  max-height: 200px;
  width: 100%;
}

.card__text-content {
  padding: 16px 16px 24px 16px;
}

.card__title {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: colors.$gray01;
  margin-bottom: 16px;
}


.card__description {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: colors.$gray01;
  margin-bottom: 32px;
}

.card__price {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: colors.$gray01;

}

</style>
