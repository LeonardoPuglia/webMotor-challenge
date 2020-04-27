import React, {Component} from 'react'

import {getVersions} from '../../api/WebMotorsAPI'

//import {prepareMakeList} from '../actions/SearchAction'
 
export default class ComboBoxCarModel extends Component{
    
    constructor(props){
        super(props)
        this.state = {carVersionList: []}
        this.init = this.init.bind(this)
        this.mountAllVersionModels = this.mountAllVersionModels.bind(this)        
    }

    
    init(){
        
        //const allMakes = getMakes()
        const allCarVersions =  [
            {
              "ModelID": 1,
              "ID": 6,
              "Name": "1.5 DX 16V FLEX 4P AUTOMÁTICO"
            },
            {
              "ModelID": 1,
              "ID": 7,
              "Name": "1.5 LX 16V FLEX 4P MANUAL"
            },
            {
              "ModelID": 1,
              "ID": 9,
              "Name": "1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO"
            },
            {
              "ModelID": 1,
              "ID": 10,
              "Name": "1.0 MPI EL 8V FLEX 4P MANUAL"
            }
          ]

        this.setState({carVersionList: allCarVersions })
        
    }


    componentWillMount(){

        this.init()
        
    }

    mountAllVersionModels() {
        const allOptions = 
            this.state.carVersionList !== []
            ? this.state.carVersionList.map((item) => {
                    return (
                        <option key={item.ID} value={item.ID}>{item.Name}</option>
                    )
                })
                : null

        return allOptions
    }

    render(){
        return(
            <div className='filter-container-element big-select'>
            <select name='version'>
                {this.mountAllVersionModels()}
            </select>
        </div>
        
        )
    }
}

