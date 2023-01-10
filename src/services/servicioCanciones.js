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
        headers:{Authorization:"Bearer BQD0_v5kLqrMclNVk4pjePHpHZAvqQCJdPg5RVd0X8i3dILMpUnIg8OnAHDelgWHXiosBP0LOTluFMGFSqwD116tciNhnkgn7h2Tmd_iBr35xVRK0QsvpNWrychaUS8N_fA0T0Jet2bZn1U5ZC6S2FkBKEhG07cO3QN6JIzk9JBzIIqEwvFlyeKWHEIuIj8Ll1k"}


    }

    //30 nos vamos para el restaurante
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    console.log(canciones)

}