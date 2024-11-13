import { ref, computed } from 'vue'
import { router } from '../router/index.js'

// STATE

const groceries = ref([
    { id: 1, name: 'bread', price: 1.00, quantity: 2 },
    { id: 2, name: 'potatoes', price: 0.99, quantity: 5 },
    { id: 3, name: 'milk', price: 1.20, quantity: 1 },
    { id: 4, name: 'broccoli', price: 0.80, quantity: 3 }
]);


//GETTERS

export const getAllGroceries = computed(() => groceries.value);

export const getGroceryById = (id) => computed(
    () =>
        groceries.value.find(grocery => grocery.id == id)

);


//ACTIONS

export const editGrocery = (grocery) => {
    let groceryToEdit = groceries.value.find(item => item.id == grocery.id)

    groceryToEdit.name = grocery.name
    groceryToEdit.price = grocery.price
    groceryToEdit.quantity = grocery.quantity

    router.push('/')

}

export const addGrocery = (grocery) => {
    grocery.id = groceries.value.length + 1
    console.log(grocery)
    groceries.value.push(grocery)
    router.push('/')
}

export const removeGrocery = (id) => {
    let valueToRemove = groceries.value.find(grocery => grocery.id == id)
    let indexToRemove = groceries.value.indexOf(valueToRemove)
    groceries.value.splice(indexToRemove, 1)

}