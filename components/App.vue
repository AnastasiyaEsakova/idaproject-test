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
  grid-template-columns: repeat(16, 1fr);
  max-width: 1440px;
  margin: 0 auto;
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

@media screen and (max-width: 1024px){

  .form {
    grid-column-end: 7;
  }

  .cards-list {
    grid-column-start: 7;
  }
}

@media screen and (max-width: 768px){

  .form {
    grid-column-end: 8;
  }

  .cards-list {
    grid-column-start: 8;
  }
}

@media screen and (max-width: 600px){

  .form {
    grid-column-start: 1;
    grid-column-end: 17;
  }

  .cards-list {
    grid-column-start: 1;
  }
}
</style>
