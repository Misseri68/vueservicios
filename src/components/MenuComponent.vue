<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarsExample03">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link ">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="coche" class="nav-link">Coches</router-link>
                        </li>
                        <li>
                            <router-link to="empleadosdetalle" class="nav-link">detalle empleados</router-link>
                        </li>
                        <li class="nav-item dropdown ms-5">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">Oficios</a>
                            <ul class="dropdown-menu">
                                <li v-for="oficio in oficios" :key="oficio">
                                    <router-link class="dropdown-item" :to="'/empleadosoficios/' + oficio">
                                        {{ oficio }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form role="search">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
import Global from '@/Global';
import axios from 'axios';

export default {
    name: "MenuComponent",
    data() {
        return {
            oficios: []
        }
    },
    mounted() {
        let request = "api/empleados/oficios";
        let url = Global.urlEmpleados + request;
        axios.get(url).then(response => {
            console.log("leyendo " + response.data)
            this.oficios = response.data;
        })
    }
}
</script>

<style lang="scss" scoped></style>