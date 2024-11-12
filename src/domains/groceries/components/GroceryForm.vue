<script setup >

import { ref } from 'vue';

// PROPS

const props = defineProps(['grocery']);

const grocery = props.grocery;

const groceryCopy = ref({...grocery});

// EMITS

const emit = defineEmits(['customSubmit'])

const submitForm = () => emit('customSubmit', groceryCopy)

</script>

<template>
<form id="grocery-form" @submit.prevent="submitForm">
    <table>
        <thead><td colspan="2">Add or edit your product here:</td></thead>
        <tr><td><label for="name">Name</label></td><td><input id="name" name="name" v-model="groceryCopy.name"/></td></tr>
        <tr><td><label for="price">Price</label></td><td><input id="price" name="price" v-model="groceryCopy.price" type="number" min="0" step="0.01"/></td></tr>
        <tr><td><label for="amount">Amount</label></td><td><input id="amount" name="amount" v-model="groceryCopy.quantity" type="number" min="0"/></td></tr>
        <tr><td colspan="2"><input type="submit"/></td></tr>
    </table>
</form>
</template>