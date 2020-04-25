import React from 'react'

import TabContent from './TabContent'
import Header from './Header'

import '../asserts/css/style.css'

export default props =>{

    return(
        <>
            <Header />
            
            <TabContent class='car' id='carId' title='Carros' description='Melhores carros para compras' />
            
        </>
    )
}

//<TabContent class='motor' id='motorId' title='Motos' description='Melhores motos para compras'/>