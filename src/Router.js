import { createRouter, createWebHistory } from "vue-router"
import EmpleadosDetalle from "./components/EmpleadosDetalle.vue"
import HomeComponent from "./components/HomeComponent.vue"
import EmpleadosOficios from "./components/EmpleadosOficios.vue"
import CocheComponent from "./components/CocheComponent.vue"

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/coche", component: CocheComponent
    },
    {
        path: "/empleadosdetalle", component: EmpleadosDetalle
    },
    {
        path: "/empleadosoficios/:oficio", component: EmpleadosOficios
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;