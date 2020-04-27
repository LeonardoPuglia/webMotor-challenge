import React, {Component} from 'react'

import {getModels} from '../../api/WebMotorsAPI'

//import {prepareMakeList} from '../actions/SearchAction'
 
export default class ComboBoxCarModel extends Component{
    
    constructor(props){
        super(props)
        this.state = {carModelsList: []}
        this.init = this.init.bind(this)
        this.mountAllCarModels = this.mountAllCarModels.bind(this)        
    }

    
    init(){
        
        //const allMakes = getMakes()
        const allCarsModels =  [
            {
              "MakeID": 1,
              "ID": 1,
              "Name": "Agile"
            },
            {
              "MakeID": 1,
              "ID": 2,
              "Name": "Astra"
            },
            {
              "MakeID": 1,
              "ID": 3,
              "Name": "Onix"
            }
          ]


        this.setState({carModelsList: allCarsModels })
        
    }


    componentWillMount(){

        this.init()
        
    }

    mountAllCarModels() {
        const allOptions = 
            this.state.carModelsList !== []
            ? this.state.carModelsList.map((item) => {
                    return (
                        <option key={item.ID} value={item.ID}>{item.Name}</option>
                    )
                })
                : null

        return allOptions
    }

    render(){
        return(
            <div className='filter-container-element medium-select'>
            <select name='model'>
                <option value={0}>Modelo: Todos</option>
                {this.mountAllCarModels()}
            </select>
        </div>
        
        )
    }
}

