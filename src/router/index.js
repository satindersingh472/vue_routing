import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/homePage.vue";
import MenuPage from "@/views/menuPage.vue";

Vue.use(VueRouter)

const routes = [
{
  path: `/`,
  component: HomePage
},
{
  path: `/menu`,
  component: MenuPage
}
]

const router = new VueRouter({
  routes
})

export default router
