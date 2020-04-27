import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {getModels} from '../../api/WebMotorsAPI'
 
export default class ComboBoxCarModel extends Component{
    
    constructor(props){
        super(props)
        this.mountAllCarModels = this.mountAllCarModels.bind(this)        
    }

    componentDidMount(){
        const promise = new Promise((resolve, reject) => {
            try{
                resolve( getModels(1))
            }catch(err){
                reject(err)
            }
        })

        promise.then((allModels) => {

            if(allModels === null){
                console.log('houve algum problema com a api')
                return
            }
                
            this.mountAllCarModels(allModels)
        })
    }

    mountAllCarModels(allModels) {
        const allOptions = 
            allModels.map((item) => {
                        return (
                            <option key={item.ID} value={item.ID}>{item.Name}</option>
                        )
                    })

        ReactDOM.render(
            <select name='model'>
                <option value={0}>Modelo: Todos</option>
                    {allOptions}
            </select>
            ,
            document.getElementById('carModelId')
        )
    }

    render(){
        return(
            <div id='carModelId' className='filter-container-element medium-select'></div>
        
        )
    }
}

