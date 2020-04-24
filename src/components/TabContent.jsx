import React, {Component} from 'react'

class TabContent extends Component{

    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div className={this.state.class} id={this.state.id}>
                <h3>{this.state.title}</h3>
                <p>{this.state.description}</p>
            </div>
        )
    }
}


export default TabContent