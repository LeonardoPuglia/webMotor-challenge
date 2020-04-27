  export function openTab (evt, tabId){
 
    const tabContents = document.getElementsByClassName('tab-content')

    for (let index = 0; index < tabContents.length; index++) 
        tabContents[index].style.display = 'none'
    
    const tabLinks = document.getElementsByClassName('tab-button')

    for (let index = 0; index < tabLinks.length; index++) 
        tabLinks[index].className = tabLinks[index].className.replace('active','')
        
    
    document.getElementById(tabId).style.display = 'block'
    evt.currentTarget.className += " active"
    
}

  

export function initTabMenu(tabId){
    console.log('tab: ' + tabId + 'content: ' + document.getElementById(tabId))
    //document.getElementsByClassName('defaultOpen').clicked();
}