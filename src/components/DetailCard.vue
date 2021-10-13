<template>
  <article :id="pokemon.id">
    <h2> {{ pokemon.name }} </h2>
    <img class="card__image" :src="pokemon.sprites.front_default" />
    <p> Stats </p>
    <PokemonChart v-if="pokemon.stats.length > 0" :label="pokemon.name" :chartData="pokemon.stats"/>
  </article>
</template>

<script>
import PokemonChart from './PokemonChart';

export default {
  name: 'DetailCard',
  components: {
    PokemonChart,
  },
  props: {
    pokemon: {
      default: () => {},
      required: true,
      type: Object,
    }
  },
}
</script>

<style scoped>
</style>
