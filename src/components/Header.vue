<template>
  <header class="header__wrapper">
    <figure class="header-logo__wrapper">
      <h1> pokedex </h1>
      <img @click="goBackToHome" class="header__logo" src="../assets/logo.png"/>
    </figure>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goBackToHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
.header__wrapper {
  background-color: #f7f7f7;
}

.header-logo__wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
}

.header__logo {
  cursor: pointer;
  height: auto;
  object-fit: contain;
  width: 18%;
}

</style>
