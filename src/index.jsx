import React from 'react'
import ReactDOM from 'react-dom'


import TabMenu from './components/TabMenu'
import TabContent from './components/TabContent'


ReactDOM.render(
    <div>
        <TabMenu />
        <TabContent class='car' id='carId' title='Carros' description='Melhores carros para compras' />
        <TabContent class='motor' id='motorId' title='Motos' description='Melhores motos para compras'/>
    </div>,
    document.getElementById('app')
)