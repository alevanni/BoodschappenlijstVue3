import { ref, computed } from 'vue'

// STATE

const groceries = ref([
    { name: 'bread', price: 1.00, quantity: 2 },
    { name: 'potatoes', price: 0.99, quantity: 5 },
    { name: 'milk', price: 1.20, quantity: 1 },
    { name: 'broccoli', price: 0.80, quantity: 3 }
]);

//GETTERS

export const getAllGroceries = computed(() => groceries.value);

//ACTIONS

export const addGrocery = (grocery) => groceries.value.push(grocery);