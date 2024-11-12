<script setup >

import { ref, computed } from 'vue'

import GroceryForm from '../components/GroceryForm.vue'

import { getGroceryById, editGrocery } from '../../../store/Groceries'

const props = defineProps(['id']);

const id = props.id 

const groceryToEdit = getGroceryById(id);


</script>

<template>
<GroceryForm :grocery="groceryToEdit" @customSubmit="editGrocery"/>
</template>