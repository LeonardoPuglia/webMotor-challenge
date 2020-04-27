import React, {Component} from 'react'

export default class ComboBoxPrice extends Component{
    render(){
        return(
            <div className='filter-container-element medium-select'> 
                <select name='price'>
                    <option >Faixa de Preço</option>
                    <option >Até R$ 10.000</option>
                    <option >Até R$ 30.000</option>
                    <option >Até R$ 50.000</option>
                    <option >Até R$ 100.000</option>
                    <option >Mais de R$ 100.000</option>
                </select>
            </div>
        
        )
    }
}