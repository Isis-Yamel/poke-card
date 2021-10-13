<template>
  <section class="card__container">
    <PokeCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon"/>
  </section>
</template>

<script>
import PokeCard from './PokeCard';

export default {
  name: 'PokeCards',
  props: {
    pokemons: {
      default: () => [],
      required: true,
      type: Array,
    }
  },
  components: {
    PokeCard,
  }
}
</script>

<style scoped>
.card__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
