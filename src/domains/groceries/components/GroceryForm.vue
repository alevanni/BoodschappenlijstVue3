<script setup >

import { ref } from 'vue';

// PROPS

const props = defineProps(['grocery']);

const grocery = props.grocery;

const groceryCopy = ref(grocery);

// EMITS

const emit = defineEmits(['submit']);

const submitForm = () => emit('submit', groceryCopy)

</script>

<template>
<form>
    <table>
        <thead><td colspan="2">Add or edit your product here:</td></thead>
        <tr><td><label for="name">Name</label></td><td><input id="name" name="name" :value="groceryCopy.name"/></td></tr>
        <tr><td><label for="price">Price</label></td><td><input id="price" name="price" :value="groceryCopy.price" type="number" min="0" step="0.01"/></td></tr>
        <tr><td><label for="amount">Amount</label></td><td><input id="amount" name="amount" :value="groceryCopy.amount" type="number" min="0"/></td></tr>
        <tr><td colspan="2"><button @click="submitForm">Submit</button></td></tr>
    </table>
</form>
</template>