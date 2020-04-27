import axios from 'axios'

const BASE_URL = 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/'


export async function getMakes(){
    let payload

     await axios.get(`${BASE_URL}Make`)
            .then((resp) =>{
                //console.log('retorno da API: ' + JSON.stringify(resp))
                payload = resp.data
            })
            .catch((error) =>{
                console.log('Error: ' + error)  
                payload = null
            })
   

    return payload

}

export function getModels(makeId){
    return axios.get(`${BASE_URL}Model?MakeID=${makeId}`)
}

export function getVersions(modelId){
    return axios.get(`${BASE_URL}Version?ModelID=${modelId}`)
}

export function getVehicles(pageId){
    return axios.get(`${BASE_URL}Vehicles?Page=${pageId}`)
}