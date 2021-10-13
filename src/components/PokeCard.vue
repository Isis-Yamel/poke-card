<template>
  <article @click="getDetail(pokemon)" :id="pokemon.id" class="card__wrapper">
    <h2> {{ pokemon.name }} </h2>
    <img class="card__image" :src="pokemon.sprites.front_default" />
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
  color: white;
  cursor: pointer;
  margin: 10px;
  padding: 25px;
  width: 250px;
}

.card__wraper:hover {
  transform: scale(1.1);
}

.card__image {
  background-color: rgba(0, 0, 0, 0.8);;
  border-radius: 50%;
  height: auto;
  object-fit: contain;
  width: 100%;
}
</style>
