// (Arrow function) prepends "Player." to its string argument 
const mapPropNameToElementIdShopKeeper = (propName) => "shopKeeper." + propName;
const mapPropNameToElementIdShopStats = (propName) => "shopStats." + propName;
const mapPropNameToElementIdShopInfo = (propName) => "shopInfo." + propName;
// Takes two strings, updates textContent of matching element if possible
function setElementTextById(id, text){
    element = document.getElementById(id);
    if(element){ // Makes sure element exists before proceeding
        element.textContent = text; // `.innerHTML` would also work
    }
};
setInterval(function printInfoToPage(){
    // Static `.keys` method on `Object` gets an object's property names
    const shopKeeperPropNames = Object.keys(shopKeeper);
    const shopStatsPropNames = Object.keys(shopStats);
    const shopInfoPropNames = Object.keys(shopInfo);
    // `for...of` loops through array
    for(let prop of shopKeeperPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdShopKeeper(prop);
        // Gets value
        const storedValue = shopKeeper[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of shopStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdShopStats(prop);
        // Gets value
        const storedValue = formatNumber(shopStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of shopInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdShopInfo(prop);
        // Gets value
        const storedValue = shopInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
}, 1);