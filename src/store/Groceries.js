import { ref, computed } from 'vue'

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
 let id = grocery.value.id 
 let groceryToEdit = groceries.value.find(item => item.id == id) 
 groceryToEdit.name = grocery.value.name
 groceryToEdit.price = grocery.value.price
 groceryToEdit.quantity = grocery.value.quantity
 console.log(groceryToEdit)
}

export const addGrocery = (grocery) => {
    grocery.value.id = groceries.value.length + 1
    console.log(grocery.value)
    groceries.value.push(grocery.value)
}

export const removeGrocery = (id) => {
    let valueToRemove = groceries.value.find(grocery => grocery.id == id)
    let indexToRemove = groceries.value.indexOf(valueToRemove)
    groceries.value.splice(indexToRemove, 1)
    
}