import React, {Component} from 'react'

export default class ComboBoxYears extends Component{

    constructor(props){
        super(props)
        this.state = {yearsList: []}
        this.mountYearsList = this.mountYearsList.bind(this)
    }

    mountYearsList(){
        let allOptionYears = []
        for (let year = 2010; year <= 2020; year++) {
            let key = year-1999

            allOptionYears.push({key , year})
        }
        const allOptions = allOptionYears.map( (item) => {
            return (
                <option key={item.key} value={item.key} >{item.year}</option>
            )
        })

        return allOptions
    }


    render(){
        return(
            <div className='filter-container-element medium-select'>
                <select name='year'>
                    <option value={0}>Ano desejado</option>
                    {this.mountYearsList()}
                </select>
            </div>
        
        )
    }
}