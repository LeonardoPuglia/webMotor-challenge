//function openTab(evt, tabId)  {
 const openTab = (evt, tabId) =>{
 
    const tabContents = document.getElementsByClassName('tabContent')

    for (let index = 0; index < tabContents.length; index++) 
        tabContents[index].style.display = 'none'
    
    const tabLinks = document.getElementsByClassName('tabButton')

    for (let index = 0; index < tabLinks.length; index++) 
        tabLinks[index].className = tabLinks[index].className.replace('active','')
        
    
    document.getElementById(tabId).style.display = 'block'
    evt.currentTarget.className += " active"
    
}
export default {openTab}