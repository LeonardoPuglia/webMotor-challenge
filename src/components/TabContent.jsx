import React, {Component} from 'react'

import ComboBoxMake from './comboboxs/ComboBoxMake'
import ComboBoxCarModel from './comboboxs/ComboBoxCarModel'
import ComboBoxVersion from './comboboxs/ComboBoxVersion'

class TabContent extends Component{

    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div className={`tab-content`} id={this.props.id}>
                
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

                <div className='filter-container'>
                    
                    <div className='filter-container-element'>
                        <input type='text' value='São Paulo' />
                    </div>
                    
                    <div className='filter-container-element small-select'>
                        <select name='radius'>
                            <option >10 Km</option>
                            <option >25 Km</option>
                            <option >50 Km</option>
                            <option >100 Km</option>
                            <option >+100 Km</option>
                        </select>
                    </div>

                    {/* <div className='filter-container-element medium-select'>
                        <select name='brand'>
                            <option >Chevrolet</option>
                            <option >Fiat</option>
                            <option >Ford</option>
                            <option >Honda</option>
                            <option >Nissan</option>
                        </select>
                    </div> */}

                    <ComboBoxMake />

                    <ComboBoxCarModel /> 
                    
                    {/* <div className='filter-container-element medium-select'>
                        <select name='model'>
                            <option >modelo 1</option>
                            <option >modelo 2</option>
                            <option >modelo 3</option>
                            <option >modelo 4</option>
                            <option >modelo 5</option>
                        </select>
                    </div> */}
                </div>

                <div className='filter-container'>

                    <div className='filter-container-element medium-select'>
                        <select name='year'>
                            <option >2020</option>
                            <option >2019</option>
                            <option >2018</option>
                        </select>
                    </div>
                   
                    <div className='filter-container-element medium-select'> 
                        <select name='price'>
                            <option >Até R$ 10.000</option>
                            <option >Até R$ 30.000</option>
                            <option >Até R$ 50.000</option>
                            <option >Até R$ 100.000</option>
                            <option >Mais de R$ 100.000</option>
                        </select>
                    </div>
                    
                    <ComboBoxVersion />
{/* 
                    <div className='filter-container-element big-select'>
                        <select name='version'>
                            <option >versão 1</option>
                            <option >versão 2</option>
                            <option >versão 3</option>
                            <option >versão 4</option>
                        </select>
                    </div>
                     */}
                </div>

                <div className='filter-container'>

                    <div className='filter-container-element link-advanced'>
                        <a href='https://www.w3schools.com/html/html_links.asp'> Busca Avançada</a>
                    </div>
                    
                    <div className='filter-container-element link-clean-filter'>
                        <button onClick=''>Limpar filtros</button>
                    </div>
                    
                    <div className='filter-container-element button-view-offers'>
                        <button onClick=''>Ver Ofertas</button>   
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default TabContent