<template>
  <section class="card__container">
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
  </section>
</template>

<script>
import PokeCard from './PokeCard';

export default {
  name: 'PokeCards',
  components: {
    PokeCard,
  }
}
</script>

<style scoped>
.card__container {
  display: flex;
  flex-wrap: wrap;
}
</style>
