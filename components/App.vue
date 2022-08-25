<template>
  <div class="grid">
    <NavBar class="nav-bar"/>
    <Form class="form"/>
    <CardsList class="cards-list"/>
  </div>

</template>

<style lang="scss">
.grid {
  width: 100%;
  height: 100%;
  padding: 32px;
  box-sizing: border-box;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(16, 71px);
}

.nav-bar {
  grid-column-start: 1;
  grid-column-end: 17;
}

.form {
  grid-column-start: 1;
  grid-column-end: 5;
}

.cards-list {
  grid-column-start: 5;
  grid-column-end: 17;
}
</style>
