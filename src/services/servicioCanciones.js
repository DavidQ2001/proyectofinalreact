//RECETA PARA CONSUMIR UN API EN REACT

import { Await } from "react-router-dom"
import { generarToken } from "./servicioToken"
export async function servicioCancionesTop(){
   let token= await  generarToken()

    //1.pa donde vas ya que vas 
    //escribir la url del servicio del api
    const URL = "https://api.spotify.com/v1/artists/3ygJTpJJIK7eEeC2EFRl9D/top-tracks?market=US"

    //2. QUE OPERACION VAS HACER EN LA BASE DE DATOS
    // CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR
    const PETICION = {
        method: "GET",
        headers:{Authorization:token}


    }

    //30 nos vamos para el restaurante
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

   return(canciones)

}