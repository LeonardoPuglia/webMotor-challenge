import React from 'react'

import TabMenu from './TabMenu'

export default prop => {
    return(
        <div className='header'>
            <h1>Web Motors</h1>
            <div className='header-elements'>
                <TabMenu />
                
            </div>
            
        </div>
    )
}