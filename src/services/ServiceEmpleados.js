import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleados {
    api = Global.urlEmpleados

    getEmpleados() {
        return new Promise(resolve => {
            let empleados = [];
            let request = "api/empleados"
            let url = this.api + request;
            axios.get(url).then(response => {
                empleados = response.data;
                resolve(empleados)
            })
        })
    }

    findEmpleado(idEmpleado) {
        return new Promise(resolve => {
            console.log(idEmpleado)
            let empleado = {}
            let request = "api/empleados/" + idEmpleado
            let url = this.api + request;
            axios.get(url).then(response => {
                console.log(response)
                empleado = response.data;
                resolve(empleado)
            })
        })
    }

    getOficios() {
        return new Promise(resolve => {
            let oficios = [];
            let request = "api/empleados/oficios";
            let url = this.api + request;
            axios.get(url).then(response => {
                oficios = response.data;
                resolve(oficios)
            })
        })
    }

    getEmpleadosOficio(oficio) {
        return new Promise(resolve => {
            let empleados = [];
            let request = "api/empleados/empleadosoficio/" + oficio;
            let url = this.api + request;
            axios.get(url).then(response => {
                empleados = response.data;
                resolve(empleados)
            })

        })
    }



}