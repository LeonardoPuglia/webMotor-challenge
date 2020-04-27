import React from 'react'

import TabMenu from './TabMenu'

export default prop => {
    return(
        <div className='header'>
            <img src='https://logodownload.org/wp-content/uploads/2018/03/webmotors-logo.png'  />
            <div className='header-elements'>
                <TabMenu />
            </div>
        </div>
    )
}