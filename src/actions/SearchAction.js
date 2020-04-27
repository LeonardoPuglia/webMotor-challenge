import {getMake} from '../api/WebMotorsAPI'

export async function prepareMakeList(){
    let allMakes = null
    try{
        allMakes = await getMake()

        console.log(`searchAction, response: ${JSON.stringify(allMakes)}`)
    }catch(err){
        console.log('searchAction, erro ao obter as marcas: ' + err)
    }

    return allMakes
}