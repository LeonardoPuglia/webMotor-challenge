import React, {Component} from 'react'

export default class CheckBoxFilter extends Component{
    render(){
        return(
            <div className='checkbox-container'>

                <div className='checkbox-container-element'>
                    <input  type='checkbox'/> 
                    <label>Novos</label>
                </div>
                
                <div className='checkbox-container-element'>
                    <input  type='checkbox'/> 
                    <label>Usados</label>
                </div>
                
            </div>

        
        )
    }
}