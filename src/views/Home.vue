<template>
  <section>
    <Navigation />
    <main>
      <PokeCards/>
    </main>
  </section>
</template>

<script>
import Navigation from '../components/Navigation';
import PokeCards from '../components/PokeCards';

export default {
  name: 'Home',
  components: {
    Navigation,
    PokeCards,
  }
}
</script>

<style scoped>
.header__wrapper {
  background-color: #f7f7f7;
}
</style>
