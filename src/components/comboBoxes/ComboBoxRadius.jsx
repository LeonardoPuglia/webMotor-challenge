import React, {Component} from 'react'

export default class ComboBoxRadius extends Component{
    render(){
        return(
            <div className='filter-container-element small-select'>
                <select name='radius'>
                    <option >10 Km</option>
                    <option >25 Km</option>
                    <option >50 Km</option>
                    <option >100 Km</option>
                    <option >+100 Km</option>
                </select>
            </div>

        
        )
    }
}