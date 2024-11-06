<script setup >

import { ref, computed } from 'vue'

import GroceryForm from '../components/GroceryForm.vue';

const newGrocery = {name: '', price: 0, amount: 0};

</script>

<template>

<GroceryForm :grocery="newGrocery"/>

</template>
