<template>
  <header class="header__wrapper">
    <nav class="navigation__wrapper">
      <figure class="navigation-logo__wrapper">
        <h1> pokedex </h1>
        <img class="navigation__logo" src="../assets/logo.png"/>
      </figure>
      <select class="navigation__filter">
        <option value="water">Water</option>
        <option value="fire">Fire</option>
      </select>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>
.header__wrapper {
  background-color: #f7f7f7;
}

.navigation__wrapper {
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100vw;
}

.navigation-logo__wrapper {
  align-items: center;
  display: flex;
  margin: 0;
  width: 40%;
}

.navigation__logo {
  height: auto;
  object-fit: contain;
  width: 18%;
}

.navigation__filter {
  width: 20%;
}
</style>
