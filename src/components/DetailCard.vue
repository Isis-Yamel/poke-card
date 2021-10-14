<template>
  <section class="detail-card__wrapper" :id="pokemon.id">
    <div class="detail-card__info">
      <article class="detail-card__info-section">
        <h2> {{ pokemon.name }} </h2>
        <img class="detail-card__image" :src="pokemon.sprites.front_default" />
      </article>
      <article class="detail-card__info-section">
        <h3> Abilities </h3>
        <ul>
          <li v-for="ability, index in pokemon.abilities" :key="index" >
            {{ ability.ability.name }}
          </li>
        </ul>
        <h3> General information </h3>
        <p> <span> Base experience: </span> {{ pokemon.base_experience }} </p>
        <p> <span> Height: </span> {{ pokemon.height}} </p>
        <p> <span> Weight: </span> {{ pokemon.weight }} </p>
        <p> <span> Specie: </span> {{ pokemon.species.name }} </p>
      </article>
    </div>
    <article>
      <h3> Stats </h3>
      <PokemonChart v-if="pokemon.stats.length > 0" :label="pokemon.name" :chartData="pokemon.stats"/>
    </article>
  </section>
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
.detail-card__wrapper {
  border-radius: 10px;
  border: 2px solid #000;
  margin: 30px;
  padding: 20px;
}
.detail-card__info {
  display: flex;
}

.detail-card__info-section {
  width: 50%;
}

.detail-card__image {
  width: 70%;
}
</style>
