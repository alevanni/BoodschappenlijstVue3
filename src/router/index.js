import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import Overview from '../domains/groceries/pages/Overview.vue'
import Create from '../domains/groceries/pages/Create.vue'
import Edit from '../domains/groceries/pages/Edit.vue'

const routes = [
  { path: '/', component: Overview },
  { path: '/create', component: Create },
  { path: '/edit/:id', name: 'edit', component: Edit }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }