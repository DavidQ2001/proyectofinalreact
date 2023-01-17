export async  function generarToken(){
    const client_id = "client_id=e461d5ba212144e6b1d70c56d2e27bc5"
    const client_secret = "client_secret=97d97b0557f84d79bdad359e5ba11fc4"
    const grant_type = "grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+ client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:dataEnvio
    }

    let respuesta = await fetch(URL,PETICION)
    let token = await respuesta.json()

    let tokenDefinitivo= token.token_type+ " "+token.access_token

    return(tokenDefinitivo)
}