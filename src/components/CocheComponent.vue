<template>
    <div>
        <h1>Servicio coches</h1>
        <table className="table table-hover table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>ID Coche</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Conductor</th>
              <th>Imagen</th>

            </tr>
          </thead>
          <tbody>
              <tr v-for="coche in coches" :key="coche">
                <td>{{coche.idCoche}}</td>
                <td>{{coche.marca}}</td>
                <td>{{coche.modelo}}</td>
                <td>{{coche.conductor}}</td>
                <td>
                  <img
                    :src="coche.imagen"
                    className="img-thumbnail"
                    width="150"
                    height="100"
                  />
                </td>
              
              </tr>
          
          </tbody>
        </table>

    </div>
</template>

<script>
import ServiceCohes from '@/services/ServiceCoches';
const service = new ServiceCohes();
    export default {
        name: "CochesComponent",
        data() {
            return {
                coches: []
            }
        },
        mounted(){
            service.getCoches.then(resolve=> {
              this.coches = resolve;
            });
        }
    }
</script>

