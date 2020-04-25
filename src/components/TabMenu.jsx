import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import {openTab, initTabMenu} from '../actions/TabAction'

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
                <button className="tab-button active" onClick={e => this.openTabComponent(e,'carId') } > CARROS</button>
                <button className="tab-button" onClick={e => this.openTabComponent(e,'motorId') }> MOTOS</button>
                <button className='sell-car-button' onClick=''>Vender meu carro</button>
                
            </div>
          
        )
    }
    

}



// const mapDispatchToProps = dispatch => bindActionCreators({openTab}, dispatch)

// export default connect(null, mapDispatchToProps)(TabMenu)