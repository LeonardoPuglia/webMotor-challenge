import React, {Component} from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


import CheckBoxFilter from './checkBoxes/CheckBoxFilter'

import ComboBoxRadius from './comboBoxes/ComboBoxRadius'
import ComboBoxMake from './comboBoxes/ComboBoxMake'
import ComboBoxCarModel from './comboBoxes/ComboBoxCarModel'
import ComboBoxYears from './comboBoxes/ComboBoxYears'
import ComboBoxPrice from './comboBoxes/ComboBoxPrice'
import ComboBoxVersion from './comboBoxes/ComboBoxVersion'



class TabContent extends Component{

    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div className={`tab-content`} id={this.props.id}>
                
                <CheckBoxFilter />

                <div className='filter-container'>
                    
                    <div className='filter-container-element'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <input type='text'placeholder='Onde...' />
                    </div>
                    
                    <ComboBoxRadius />
                    <ComboBoxMake />
                    <ComboBoxCarModel /> 
                </div>

                <div className='filter-container'>

                    <ComboBoxYears />
                   
                   <ComboBoxPrice />
                    
                    <ComboBoxVersion />
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