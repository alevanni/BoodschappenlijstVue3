<script setup >

import { ref, computed } from 'vue'

import { removeGrocery } from '../../../store/Groceries'


const props = defineProps(['list'])

const total = computed(()=> props.list.reduce( (total, grocery) => total += grocery.price * grocery.quantity, 0))

</script>

<template>
      <div>
    <table>
       <thead>
         <td>Product</td>
         <td>Price</td>
         <td>Quantity</td>
         <td>Subtotal</td>
         
       </thead>
       <tr v-for="(item, index) in props.list" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.price.toFixed(2) }} &#8364;</td>
        <td> <input type="number" min="0" max="20" v-model="list[index].quantity"></td>
        <td>{{ (item.quantity * item.price).toFixed(2) }}</td>
        <td> <RouterLink :to="{name: 'edit', params: { id: item.id }}">Edit</RouterLink></td>
        <td><button @click="removeGrocery(item.id)">Delete</button></td>
       </tr>
       <tr>
        <td colspan="3">Total</td>
        <td>{{ total.toFixed(2) }}</td>
      </tr>
    </table>
  </div>
</template>