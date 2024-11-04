<template>
    <h1>Hola! Aquí los customers</h1>
    <div style="display: flex;">
        <table>
            <thead>
                <tr>
                    <td>Customer</td>
                    <td>Compañía</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer">
                    <td>{{ customer.contactName }}</td>
                    <td>{{ customer.companyName }}</td>
                </tr>
            </tbody>
        </table>
        <div>
            <h3>Busca aquí a un empleado para ver sus detalles.</h3>
            <input type="text" v-model="id" />
            <button v-on:click="buscarCustomer">Buscar</button>
            <div v-if="seleccionado != null">
                <p><strong>Nombre de la Empresa:</strong> {{ seleccionado.companyName }}</p>
                <p><strong>Nombre de Contacto:</strong> {{ seleccionado.contactName }}</p>
                <p><strong>Título de Contacto:</strong> {{ seleccionado.contactTitle }}</p>
                <p><strong>Dirección:</strong> {{ seleccionado.address }}</p>
                <p><strong>Ciudad:</strong> {{ seleccionado.city }}</p>
                <p><strong>Código Postal:</strong> {{ seleccionado.postalCode }}</p>
                <p><strong>País:</strong> {{ seleccionado.country }}</p>
                <p><strong>Teléfono:</strong> {{ seleccionado.phone }}</p>
                <p><strong>Fax:</strong> {{ seleccionado.fax }}</p>
            </div>
        </div>

    </div>
</template>

<script>
import Global from '@/Global';
import axios from 'axios';

export default {
    name: "CustomersComponent",
    data() {
        return {
            customers: [],
            id: "",
            seleccionado: null
        }
    },
    mounted() {
        var request = "customers/";
        var url = Global.urlCustomers + request;
        axios.get(url).then(response => {
            console.log(response.data)
            this.customers = response.data.results
        })
    },
    methods: {
        buscarCustomer() {
            var request = "customers/" + this.id;
            var url = Global.urlCustomers + request;
            axios.get(url).then(response => {
                console.log(response.data)
                this.seleccionado = response.data.customer
            })
            console.log(this.seleccionado)
        }
    }


}
</script>
