<template>
    <div >
        <h1>Empleados</h1>
        <form v-on:submit.prevent="buscarEmpleado()">
            <label>
                Seleccione empleado
            </label>
            <select class="form-control w-50" v-model="idEmpleado">
                <option v-for="emp in empleados" :key="emp" :value="emp.idEmpleado" >
                    {{ emp.apellido }}
                </option>
            </select>
            <button class="btn btn-info"> Detalles Empleado </button>

        </form>
        <div v-if="empleado">
            {{ empleado.apellido }}
        </div>
    </div>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceEmpleados';
const service = new ServiceEmpleados();
export default {
    name: "EmpeladosDetalle",
    data() {
        return {
            empleados: [],
            idEmpleado: 0,
            empleado: null
        }
    },
    mounted(){
       service.getEmpleados().then(resolved => {
        this.empleados = resolved;
       })
    },
    methods: {
        buscarEmpleado(){
            console.log("Hola")
            console.log(this.idEmpleado)
            service.findEmpleado(this.idEmpleado).then(resolved => {
                console.log(resolved)
                this.empleado = resolved
            })
        }
      
    }
}
</script>
