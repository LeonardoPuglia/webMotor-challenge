import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import {openTab, initTabMenu} from '../helper/TabHelper'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

export default class TabMenu extends Component {

    constructor(props){
        super(props)
        this.openTabComponent = this.openTabComponent.bind(this)
    }

  
    openTabComponent(e, tabId){
        openTab(e,tabId)
    }

    render(){
        return(
            <div className="tab">
                <button className="tab-button active" onClick={e => this.openTabComponent(e,'carId') } > 
                    
                    <div className='tab-button-container'>
                        <FontAwesomeIcon  icon={faCar}/>
                        <div className='tab-button-text-container'>
                            <p className='tab-button-subtitle-text'>COMPRAR</p> 
                            <p className='tab-button-title-text'>CARROS</p> 
                        </div>
                    </div>
                    
                </button>

                <button className="tab-button" onClick={e => this.openTabComponent(e,'motorId') }> 

                    <div className='tab-button-container'>
                        <FontAwesomeIcon className='tab-button-icon' icon={faMotorcycle}/>
                        <div className='tab-button-text-container'>
                            <p className='tab-button-subtitle-text'>COMPRAR</p> 
                            <p className='tab-button-title-text'>MOTOS</p> 
                        </div>
                    </div>
                        
                </button>
                <button className='sell-car-button' onClick=''>Vender meu carro</button>
                
            </div>
          
        )
    }
    

}



// const mapDispatchToProps = dispatch => bindActionCreators({openTab}, dispatch)

// export default connect(null, mapDispatchToProps)(TabMenu)