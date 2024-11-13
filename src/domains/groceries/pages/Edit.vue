<script setup >


import GroceryForm from '../components/GroceryForm.vue'

import { getGroceryById, editGrocery } from '../../../store/Groceries'
import { useRoute } from 'vue-router';



const groceryToEdit = getGroceryById(useRoute().params.id);


</script>

<template>
<GroceryForm :grocery="groceryToEdit" @customSubmit="editGrocery"/>
</template>