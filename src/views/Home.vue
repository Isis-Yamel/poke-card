<template>
  <main>
    <PokeCards :pokemons="pokemons"/>
  </main>
</template>

<script>
import PokeCards from '../components/PokeCards';
import Service from '../sevices';

export default {
  name: 'Home',
  data() {
    return {
      pokemons: [],
    };
  },
  async mounted() {
    this.pokemons = await Service.getPokemonsData();
  },
  components: {
    PokeCards,
  }
}
</script>

<style scoped>
.header__wrapper {
  background-color: #f7f7f7;
}
</style>
