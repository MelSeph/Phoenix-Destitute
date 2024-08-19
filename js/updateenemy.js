// (Arrow function) prepends "Player." to its string argument 
const mapPropNameToElementIdEnemyStats = (propName) => "enemyStats." + propName;
const mapPropNameToElementIdEnemyInfo = (propName) => "enemyInfo." + propName;
// Takes two strings, updates textContent of matching element if possible
function setElementTextById(id, text){
    element = document.getElementById(id);
    if(element){ // Makes sure element exists before proceeding
        element.textContent = text; // `.innerHTML` would also work
    }
};
setInterval(function printInfoToPage(){
    // Static `.keys` method on `Object` gets an object's property names
    const enemyStatsPropNames = Object.keys(enemyStats);
    const enemyInfoPropNames = Object.keys(enemyInfo);
    // `for...of` loops through array
    for(let prop of enemyStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdEnemyStats(prop);
        // Gets value
        const storedValue = formatNumber(enemyStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of enemyInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdEnemyInfo(prop);
        // Gets value
        const storedValue = enemyInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
},1);