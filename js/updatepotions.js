// (Arrow function) prepends "Player." to its string argument
const mapPropNameToElementIdPotionStats = (propName) => "potionStats." + propName;
// Takes two strings, updates textContent of matching element if possible
function setElementTextById(id, text){
    element = document.getElementById(id);
    if(element){ // Makes sure element exists before proceeding
        element.textContent = text; // `.innerHTML` would also work
    }
};
setInterval(function printInfoToPage(){
    // Static `.keys` method on `Object` gets an object's property names
    const potionStatsPropNames = Object.keys(potionStats);
    // `for...of` loops through array
    for(let prop of potionStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdPotionStats(prop);
        // Gets value
        const storedValue = potionStats[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
}, 1);