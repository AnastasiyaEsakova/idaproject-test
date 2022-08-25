<template>
  <div class="form">
    <div class="form__container">
      <label class="form__label">
        <p class="form__label-title">Наименование товара</p>
        <input class="form__input" type="text" placeholder="Введите наименование товара">
      </label>
      <label class="form__label">
        <p class="form__label-title">Описание товара</p>
        <textarea class="form__input" placeholder="Введите описание товара"></textarea>
      </label>
      <label class="form__label">
        <p class="form__label-title">Ссылка на изображение товара</p>
        <input class="form__input" type="link" placeholder="Введите ссылку">
      </label>
      <label class="form__label">
        <p class="form__label-title">Цена товара</p>
        <input class="form__input" type="text" placeholder="Введите цену">
      </label>
      <button class="form__button">Добавить товар</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@use './style' as colors;

.form__container {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 332px;
  max-height: 440px;
  background: colors.$background;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  box-sizing: border-box;
}

.form__label {
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    .form__label-title {
      &::after {
        display: none;
      }
    }

    .form__input {
      min-height: 108px;
      padding-top: 10px;
    }
  }
}

.form__label-title {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: colors.$gray04;
  position: relative;
  width: max-content;
  margin-bottom: 4px;

  &::after{
    content: '';
    width: 4px;
    height: 4px;
    position: absolute;
    top: 0;
    right: -6px;
    background: colors.$red01;
    border-radius: 4px;
  }
}

.form__input {
  background: colors.$background;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  min-height: 36px;
  padding-left: 16px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  box-sizing: border-box;

  &::placeholder {
    color: colors.$gray02;
    margin: 0;
    padding: 0;
  }

  &:focus {
    outline: none;
  }
}

.form__button {
  background: colors.$gray03;
  border-radius: 10px;
  width: 284px;
  height: 36px;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: colors.$gray02;
  box-sizing: border-box;
  margin-top: 8px;
}

</style>
