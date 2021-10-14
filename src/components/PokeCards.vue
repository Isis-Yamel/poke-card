<template>
  <section>
    <nav class="cards__filter">
      <label>Filter by type: </label>
      <select name="pokemon-types" v-model="selectedType">
        <option v-for="pokeType, index in pokeTypes" :key="index" :value="pokeType.name">
          {{ pokeType.name }}
        </option>
      </select>
    </nav>
    <article class="cards__container">
      <PokeCard v-for="pokemon in currentPokemons" :key="pokemon.id" :pokemon="pokemon"/>
    </article>
  </section>
</template>

<script>
import PokeCard from './PokeCard';

export default {
  name: 'PokeCards',
  data() {
    return {
      selectedType: '',
      filteredPokemons: [],
    }
  },
  computed: {
    currentPokemons() {
      return this.filteredPokemons.length ? this.filteredPokemons : this.pokemons;
    }
  },
  props: {
    pokemons: {
      default: () => [],
      required: true,
      type: Array,
    },
    pokeTypes: {
      default: () => [],
      required: true,
      type: Array,
    }
  },
  watch: {
    selectedType(newValue, OldValue) {
      if (newValue !== OldValue) {
        this.filteredPokemons = this.pokemons.filter(pokemon => {
          const filterdType = pokemon.types.filter(p => p.type.name === this.selectedType);
          if (filterdType[0]?.type?.name !== undefined) {
            return pokemon;
          }
        });
      }
    }
  },
  components: {
    PokeCard,
  },
}
</script>

<style scoped>
.cards__filter {
  font-size: 1.5em;
  margin: 20px;
}

.cards__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
