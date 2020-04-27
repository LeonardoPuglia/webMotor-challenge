import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {getMakes} from '../../api/WebMotorsAPI'
 
export default class ComboBoxMake extends Component{
    
    constructor(props){
        super(props)
        this.mountAllMakes = this.mountAllMakes.bind(this)        
    }

    componentDidMount(){
        const promise = new Promise((resolve, reject) => {
            try{
                resolve( getMakes())
            }catch(err){
                reject(err)
            }
        })

        promise.then((allMakes) => {

            if(allMakes === null){
                console.log('houve algum problema com a api')
                return
            }
                
            this.mountAllMakes(allMakes)
        })
    }
    


    mountAllMakes(allMakes) {
        const allOptions = 
            allMakes.map((item) => {
                        return (
                            <option key={item.ID} value={item.ID}>{item.Name}</option>
                        )
                    })
        

        ReactDOM.render(
            <select name='brand'>
                    <option value={0}>Marca: Todas</option>
                    {allOptions}
            </select>
            ,
            document.getElementById('brandId')
        )
        
    }

    render(){
        return(
            <div id='brandId' className='filter-container-element medium-select'></div>
        )
    }
}

