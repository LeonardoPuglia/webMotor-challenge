import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {getVersions} from '../../api/WebMotorsAPI'

 
export default class ComboBoxCarModel extends Component{
    
    constructor(props){
        super(props)
        this.mountAllVersionModels = this.mountAllVersionModels.bind(this)        
    }

    
    componentDidMount(){
        const promise = new Promise((resolve, reject) => {
            try{
                resolve( getVersions(1))
            }catch(err){
                reject(err)
            }
        })

        promise.then((allVersions) => {

            if(allVersions === null){
                console.log('houve algum problema com a api')
                return
            }
                
            this.mountAllVersionModels(allVersions)
        })
    }

    mountAllVersionModels(allVersions) {
        const allOptions = 
            allVersions.map((item) => {
                    return (
                        <option key={item.ID} value={item.ID}>{item.Name}</option>
                    )
                })

        ReactDOM.render(
            <select name='version'>
                <option value={0}>Versão: Todas</option>
                {allOptions}
            </select>,
            document.getElementById('carVersionId')
        )
    }

    render(){
        return(
            <div id='carVersionId' className='filter-container-element big-select'>  </div>
        
        )
    }
}

