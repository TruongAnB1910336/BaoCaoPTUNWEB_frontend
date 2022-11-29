import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/home.vue'
import Detail from '../components/detail.vue'
import Addproduct from '../services/addproduct.vue'
import Editproduct from '../services/editproduct.vue'
 const routes = [
    {
        path:"/",
        name: "home",
        component: Home
    },
    {
      path:"/detail",
      name: "detail",
      component: Detail
  },
  {
    path:"/addproduct",
    name: "addproduct",
    component: Addproduct
},
{
    path:"/editproduct",
    name: "editproduct",
    component: Editproduct
}
 ]
 const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
 });
 export default router;