<template>
  <div class="form">
    <div class="form__container">
      <Input placeholder="Введите наименование товара" label="Наименование товара" type="text" redPoint required/>
      <Input placeholder="Введите описание товара" label="Описание товара" type="text" textarea />
      <Input placeholder="Введите ссылку" label="Ссылка на изображение товара" type="link" redPoint required/>
      <Input placeholder="Введите цену" label="Цена товара" type="text" redPoint required/>
      <button class="form__button">Добавить товар</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@use './style' as colors;

.form__container {
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 332px;
  max-height: 440px;
  background: colors.$background;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  box-sizing: border-box;
}

.form__button {
  background: colors.$gray03;
  border-radius: 10px;
  width: 100%;
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
