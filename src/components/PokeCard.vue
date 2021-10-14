<template>
  <article @click="getDetail(pokemon)" :id="pokemon.id" class="card__wrapper">
    <h2> {{ pokemon.name }} </h2>
    <img class="card__image" :src="pokemon.sprites.front_default" />
    <h3> Pokemon type </h3>
    <ul>
      <li v-for="pokeType, index in pokemon.types" :key="index">
        {{ pokeType.type.name }}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    pokemon: {
      default: () => {},
      required: true,
      type: Object,
    }
  },
  methods: {
    getDetail(pokemon) {
      this.$router.push({ name: 'detail', params: {id: pokemon.id, pokemon} })
    }
  }
}
</script>

<style scoped>
.card__wrapper {
  background: rgb(171,104,21);
  background: linear-gradient(0deg, rgba(227,168,96,1) 13%, rgba(213,63,50,1) 91%);
  border-radius: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  padding: 25px;
  width: 250px;
}

article:hover {
  background: #f0f0f0;
  color: #000;
}

.card__image {
  background-color: rgba(0, 0, 0, 0.8);;
  border-radius: 50%;
  height: auto;
  object-fit: contain;
  width: 100%;
}
</style>
