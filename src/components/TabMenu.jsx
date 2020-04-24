import React, {Component} from 'react'
import {openTab} from '../actions/TabAction'

class TabMenu extends Component{

    
    render(){
        return(
            <div className="tab">
                <button className="tabButton" onClick={this.props.openTab('car','carId')} >Carros</button>
                <button className="tabButton" onClick={this.props.openTab('motor','motorId')} >Motos</button>
            </div>
        )
    }
}

export default TabMenu