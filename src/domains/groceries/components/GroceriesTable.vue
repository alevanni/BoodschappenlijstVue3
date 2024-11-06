<script setup >

import { ref, computed } from 'vue'

const props = defineProps(['list'])

const list = props.list;

const subtotals = computed(()=>{
    const totalPrices = [];
    list.forEach( (item) => {
    totalPrices.push( (item.quantity * item.price) )
    })
    
    return totalPrices;
})

const total = computed(()=>{
    let tot = 0;
    tot = subtotals.value.reduce( (accumulator, current) => accumulator + current, tot)
    
    return tot;
})
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
       <tr v-for="(item, index) in list" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.price.toFixed(2) }} &#8364;</td>
        <td> <input type="number" min="0" max="20" v-model="list[index].quantity"></td>
        <td>{{ subtotals[index].toFixed(2) }}</td>
       </tr>
       <tr>
        <td colspan="3">Total</td>
        <td>{{ total.toFixed(2) }}</td>
      </tr>
    </table>
  </div>
</template>