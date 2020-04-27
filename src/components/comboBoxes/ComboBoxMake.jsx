import React, {Component} from 'react'

import {getMakes} from '../../api/WebMotorsAPI'

//import {prepareMakeList} from '../actions/SearchAction'
 
export default class ComboBoxMake extends Component{
    
    constructor(props){
        super(props)
        this.state = {makeList: []}
        this.init = this.init.bind(this)
        this.mountAllMakes = this.mountAllMakes.bind(this)        
    }

    
    init(){
        
        //const allMakes = getMakes()
        const allMakes =  [
            {
              "ID": 1,
              "Name": "Chevrolet"
            },
            {
              "ID": 2,
              "Name": "Honda"
            },
            {
              "ID": 3,
              "Name": "Ford"
            }
          ]

        console.log('return of getMake: '+ allMakes)

        if(allMakes === null){
            console.log('houve algum problema com a api')
            return
        }
            

        this.setState({makeList: allMakes })
        
    }


    componentWillMount(){

        this.init()
        
    }

    mountAllMakes() {
        console.log('mountAllMakes: ' + JSON.stringify(this.state.makeList))
        const allOptions = 
            this.state.makeList !== []
            ? this.state.makeList.map((item) => {
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
                <select name='brand'>
                <option value={0}>Marca: Todas</option>
                   {this.mountAllMakes()}
                </select>
            </div>
        
        )
    }
}

