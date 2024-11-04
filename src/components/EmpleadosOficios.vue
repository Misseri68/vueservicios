<template>
    <div>
        <h1>Maravilloso h1</h1>
        <ul>
            <li v-for="empleado in empleados" :key="empleado">{{ empleado.apellido }}</li>
        </ul>
    </div>
</template>

<script>
import Global from '@/Global';
import axios from 'axios';

    export default {
        name: "EmpleadosOficios",
        data(){
           return{
            empleados: []
           }
        },
        methods: {
            loadEmpleados(){
                let oficio = this.$route.params.oficio;
                let request = "api/empleados/empleadosoficio/" + oficio;
                let url = Global.urlEmpleados  + request;
                axios.get(url).then( response => {
                    this.empleados = response.data
                }
                )
            }
        },
        mounted(){
            this.loadEmpleados()
        },
        watch:{
            '$route.params.oficio'(nextVal, oldVal){
                if(nextVal != oldVal){
                    this.loadEmpleados()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style> 