<script setup >

import { ref, computed } from 'vue'

import GroceriesTable from './components/GroceriesTable.vue';

const products = ref([
{name: 'bread', price: 1.00, quantity: 2}, 
{name: 'potatoes', price: 0.99, quantity: 5}, 
{name: 'milk', price: 1.20, quantity: 1},
{name: 'broccoli', price: 0.80, quantity: 3}
]);

</script>

<template>
<nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/create">Go to Create</RouterLink>
</nav>
<RouterView />
<GroceriesTable :list="products"/>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
