<template>
  <article id="testing_id" class="card__wrapper">
    <h2> Pikachu </h2>
    <img class="card__image" src="../assets/pikachu.jpeg"/>
    <p> Here will be the stats </p>
  </article>
</template>

<script>
export default {
  name: 'PokeCard',
}
</script>

<style scoped>
.card__wrapper {
  border-radius: 10px;
  border: 4px solid red;
  margin: 10px;
  padding: 10px;
  width: 250px;
}

.card__image {
  height: auto;
  object-fit: contain;
  width: 100%;
}
</style>
