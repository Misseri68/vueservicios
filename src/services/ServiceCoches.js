import Global from './../Global'
import axios from 'axios'
export default class ServiceCohes{
    getCoches = new Promise( function(resolve){
        let coches = [];
        let request = "webresources/coches";
        let url = Global.urlCoches + request;
        axios.get(url).then( response => {
            console.log("leyendo coches")
            coches = response.data;
            resolve(coches)
        })
    }
)
}