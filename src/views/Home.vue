<template>
  <main>
    <Loader v-if="isLoading"/>
    <PokeCards :pokemons="pokemons" :pokeTypes="pokeTypes"/>
  </main>
</template>

<script>
import PokeCards from '../components/PokeCards';
import Service from '../sevices';
import Loader from '../components/Loader';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      pokeTypes: [],
      pokemons: [],
    };
  },
  async mounted() {
    this.isLoading = true;
    this.pokeTypes = await Service.getPokemonsTypes();
    this.pokemons = await Service.getPokemonsData();
    this.isLoading = false;
  },
  components: {
    Loader,
    PokeCards,
  },
}
</script>

<style scoped>
.header__wrapper {
  background-color: #f7f7f7;
}
</style>
