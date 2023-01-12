//RECETA PARA CONSUMIR UN API EN REACT

import { Await } from "react-router-dom"

export async function servicioCancionesTop(){

    //1.pa donde vas ya que vas 
    //escribir la url del servicio del api
    const URL = "https://api.spotify.com/v1/artists/3ygJTpJJIK7eEeC2EFRl9D/top-tracks?market=US"

    //2. QUE OPERACION VAS HACER EN LA BASE DE DATOS
    // CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR
    const PETICION = {
        method: "GET",
        headers:{Authorization:" Bearer BQC2k35kKxwNAqHwGIszsoR4IqGRvsA6AEDF8EBMJalKsPqIh6Fc_r7KKXuN_sR-IC0bcjd-GpCANneZZ177AlkwLvjqBOx-VvcFAfpBOF6tL-AK4IVTYrtxy9JrrVcwluskbS6u4bb_NaMRnDYRSbqT3vhWHdoN3fWC2a1kBRHvHpC7NjSPp2CU_BWKTx_jPY0"}


    }

    //30 nos vamos para el restaurante
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

   return(canciones)

}