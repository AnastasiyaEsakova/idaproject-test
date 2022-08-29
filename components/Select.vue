<template>
  <div class="select-container">
    <select name="filter" class="select">
        <option value="dafault" selected>По умолчанию</option>
        <option value="fromMax">По убыванию цены</option>
        <option value="fromMin">По возрастанию цены</option>
        <option value="name">По наименованию</option>
    </select>
  </div>
</template>

<script>

</script>

<style lang="scss">
@use './style' as colors;

.select-container {
  background: colors.$background;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: max-content;
  height: 36px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.select {
  width: max-content;
  height: 15px;
  border: none;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: colors.$gray02;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::-ms-expand {
    display: none;
  }


  &:focus {
    outline: none;
  }
}

</style>
