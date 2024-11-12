<script setup >

import { ref, computed } from 'vue'

import { addGrocery } from '../../../store/Groceries'

import GroceryForm from '../components/GroceryForm.vue'

const newGrocery = {name: '', price: 0, quantity: 0}

</script>

<template>

<GroceryForm :grocery="newGrocery" @customSubmit="addGrocery"/>

</template>
