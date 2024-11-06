<script setup >

import { ref, computed } from 'vue'

import GroceriesTable from '../components/GroceriesTable.vue';

const products = ref([
{name: 'bread', price: 1.00, quantity: 2}, 
{name: 'potatoes', price: 0.99, quantity: 5}, 
{name: 'milk', price: 1.20, quantity: 1},
{name: 'broccoli', price: 0.80, quantity: 3}
]);

</script>

<template>
<GroceriesTable :list="products"/>
</template>
