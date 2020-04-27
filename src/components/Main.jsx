import React from 'react'

import TabContent from './TabContent'
import Header from './Header'

import '../asserts/css/style.css'

export default props =>{

    return(
        <>
            <Header />
            
            <TabContent id='carId' isHided={false} />
            <TabContent  id='motorCycleId'  isHided={true} />
            
        </>
    )
}
