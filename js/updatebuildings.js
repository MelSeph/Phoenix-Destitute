// (Arrow function) prepends "Player." to its string argument
//Residential:
const mapPropNameToElementIdJanceInfo = (propName) => "janceInfo." + propName;
const mapPropNameToElementIdJanceStats = (propName) => "janceStats." + propName;
const mapPropNameToElementIdRenoInfo = (propName) => "renoInfo." + propName;
const mapPropNameToElementIdRenoStats = (propName) => "renoStats." + propName;
const mapPropNameToElementIdRajInfo = (propName) => "rajInfo." + propName;
const mapPropNameToElementIdRajStats = (propName) => "rajStats." + propName;
const mapPropNameToElementIdGreyInfo = (propName) => "greyInfo." + propName;
const mapPropNameToElementIdGreyStats = (propName) => "greyStats." + propName;
const mapPropNameToElementIdThaneInfo = (propName) => "thaneInfo." + propName;
const mapPropNameToElementIdThaneStats = (propName) => "thaneStats." + propName;
const mapPropNameToElementIdHildtInfo = (propName) => "hildtInfo." + propName;
const mapPropNameToElementIdHildtStats = (propName) => "hildtStats." + propName;
//Production:
const mapPropNameToElementIdWeaponSmithyInfo = (propName) => "weaponSmithyInfo." + propName;
const mapPropNameToElementIdWeaponSmithyStats = (propName) => "weaponSmithyStats." + propName;
const mapPropNameToElementIdArmorSmithyInfo = (propName) => "armorSmithyInfo." + propName;
const mapPropNameToElementIdArmorSmithyStats = (propName) => "armorSmithyStats." + propName;
const mapPropNameToElementIdApothecaryInfo = (propName) => "apothecaryInfo." + propName;
const mapPropNameToElementIdApothecaryStats = (propName) => "apothecaryStats." + propName;
// Takes two strings, updates textContent of matching element if possible
function setElementTextById(id, text){
    element = document.getElementById(id);
    if(element){ // Makes sure element exists before proceeding
        element.textContent = text; // `.innerHTML` would also work
    }
};
setInterval(function printInfoToPage(){
    // Static `.keys` method on `Object` gets an object's property names
    const janceInfoPropNames = Object.keys(janceInfo);
    const janceStatsPropNames = Object.keys(janceStats);
    const renoInfoPropNames = Object.keys(renoInfo);
    const renoStatsPropNames = Object.keys(renoStats);
    const rajInfoPropNames = Object.keys(rajInfo);
    const rajStatsPropNames = Object.keys(rajStats);
    const greyInfoPropNames = Object.keys(greyInfo);
    const greyStatsPropNames = Object.keys(greyStats);
    const thaneInfoPropNames = Object.keys(thaneInfo);
    const thaneStatsPropNames = Object.keys(thaneStats);
    const hildtInfoPropNames = Object.keys(hildtInfo);
    const hildtStatsPropNames = Object.keys(hildtStats);
    const weaponSmithyInfoPropNames = Object.keys(weaponSmithyInfo);
    const weaponSmithyStatsPropNames = Object.keys(weaponSmithyStats);
    const armorSmithyInfoPropNames = Object.keys(armorSmithyInfo);
    const armorSmithyStatsPropNames = Object.keys(armorSmithyStats);
    const apothecaryInfoPropNames = Object.keys(apothecaryInfo);
    const apothecaryStatsPropNames = Object.keys(apothecaryStats);
    // `for...of` loops through array
    for(let prop of janceInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdJanceInfo(prop);
        // Gets value
        const storedValue = janceInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of janceStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdJanceStats(prop);
        // Gets value
        const storedValue = formatNumber(janceStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of renoInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdRenoInfo(prop);
        // Gets value
        const storedValue = renoInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of renoStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdRenoStats(prop);
        // Gets value
        const storedValue = formatNumber(renoStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of rajInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdRajInfo(prop);
        // Gets value
        const storedValue = rajInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of rajStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdRajStats(prop);
        // Gets value
        const storedValue = formatNumber(rajStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of greyInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdGreyInfo(prop);
        // Gets value
        const storedValue = greyInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of greyStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdGreyStats(prop);
        // Gets value
        const storedValue = formatNumber(greyStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of thaneInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdThaneInfo(prop);
        // Gets value
        const storedValue = thaneInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of thaneStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdThaneStats(prop);
        // Gets value
        const storedValue = formatNumber(thaneStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of hildtInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdHildtInfo(prop);
        // Gets value
        const storedValue = hildtInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of hildtStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdHildtStats(prop);
        // Gets value
        const storedValue = formatNumber(hildtStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of weaponSmithyInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdWeaponSmithyInfo(prop);
        // Gets value
        const storedValue = weaponSmithyInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of weaponSmithyStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdWeaponSmithyStats(prop);
        // Gets value
        const storedValue = formatNumber(weaponSmithyStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of armorSmithyInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdArmorSmithyInfo(prop);
        // Gets value
        const storedValue = armorSmithyInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of armorSmithyStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdArmorSmithyStats(prop);
        // Gets value
        const storedValue = formatNumber(armorSmithyStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of apothecaryInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdApothecaryInfo(prop);
        // Gets value
        const storedValue = apothecaryInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of apothecaryStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdApothecaryStats(prop);
        // Gets value
        const storedValue = formatNumber(apothecaryStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
}, 1);