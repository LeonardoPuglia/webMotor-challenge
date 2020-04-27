import axios from 'axios'

const BASE_URL = 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/'


export async function getMakes(){

     return await  axios.get(`${BASE_URL}Make`)
            .then((resp) =>{
                return resp.data
            })
            .catch((error) =>{
                console.log('Error: ' + error)  
                return null
            })
   

}

export async function getModels(makeId){
    return await axios.get(`${BASE_URL}Model?MakeID=${makeId}`)
            .then((resp) =>{
                return resp.data
            })
            .catch((error) =>{
                console.log('Error: ' + error)  
                return null
            })
}

export async function getVersions(modelId){
    return await axios.get(`${BASE_URL}Version?ModelID=${modelId}`)
            .then((resp) =>{
                return resp.data
            })
            .catch((error) =>{
                console.log('Error: ' + error)  
                return null
            })
}

export async function getVehicles(pageId){
    return await axios.get(`${BASE_URL}Vehicles?Page=${pageId}`)
            .then((resp) =>{
                return resp.data
            })
            .catch((error) =>{
                console.log('Error: ' + error)  
                return null
            })
}