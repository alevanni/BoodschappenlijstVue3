<script setup >

import GroceriesTable from '../components/GroceriesTable.vue';

import { getAllGroceries } from '../../../store/Groceries';

const products = getAllGroceries;

</script>

<template>
<GroceriesTable :list="products"/>
</template>
