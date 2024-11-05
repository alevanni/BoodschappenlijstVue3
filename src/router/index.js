import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: OverView },
    { path: '/create', component: Create },
    { path: '/edit', component: Edit }
  ]


  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })