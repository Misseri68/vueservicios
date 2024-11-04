<template>
    <div>
        <h1>{{mensaje}}</h1>
    </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo';
const service = new ServiceEjemplo()
export default {
    name: "HomeComponent",
    data() {
        return {
            mensaje: ""
        }
    },
    mounted(){
        this.mensaje = service.getSaludo("Ari");
    }
}
</script>

<style lang="scss" scoped></style>