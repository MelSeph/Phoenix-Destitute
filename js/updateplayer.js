// (Arrow function) prepends "Player." to its string argument 
const mapPropNameToElementIdPlayerStats = (propName) => "playerStats." + propName;
const mapPropNameToElementIdPlayerInfo = (propName) => "playerInfo." + propName;
const mapPropNameToElementIdMale = (propName) => "male." + propName;
const mapPropNameToElementIdFemale = (propName) => "female." + propName;
const mapPropNameToElementIdWarrior = (propName) => "warrior." + propName;
const mapPropNameToElementIdArcher = (propName) => "archer." + propName;
const mapPropNameToElementIdMage = (propName) => "mage." + propName;
const mapPropNameToElementIdMaterialName = (propName) => "materialName." + propName;
const mapPropNameToElementIdMaterial = (propName) => "materialStats." + propName;
const mapPropNameToElementIdCreationName = (propName) => "creationName." + propName;
const mapPropNameToElementIdCreation = (propName) => "creationStats." + propName;
const mapPropNameToElementIdCheatStats = (propName) => "cheatStats." + propName;
const mapPropNameToElementIdCheatName = (propName) => "cheatName." + propName;
// Takes two strings, updates textContent of matching element if possible
function setElementTextById(id, text){
    element = document.getElementById(id);
    if(element){ // Makes sure element exists before proceeding
        element.textContent = text; // `.innerHTML` would also work
    }
};
setInterval(function printInfoToPage(){
    // Static `.keys` method on `Object` gets an object's property names
    const playerStatsPropNames = Object.keys(playerStats);
    const playerInfoPropNames = Object.keys(playerInfo);
    const malePropNames = Object.keys(male);
    const femalePropNames = Object.keys(female);
    const warriorPropNames = Object.keys(warrior);
    const archerPropNames = Object.keys(archer);
    const magePropNames = Object.keys(mage);
    const materialNamePropNames = Object.keys(materialName);
    const materialPropNames = Object.keys(materialStats);
    const creationNamePropNames = Object.keys(creationName);
    const creationPropNames = Object.keys(creationStats);
    const cheatNamePropNames = Object.keys(cheatName);
    const cheatStatsPropNames = Object.keys(cheatStats);
    // `for...of` loops through array
    for(let prop of playerStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdPlayerStats(prop);
        // Gets value
        const storedValue = formatNumber(playerStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of playerInfoPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdPlayerInfo(prop);
        // Gets value
        const storedValue = playerInfo[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of malePropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdMale(prop);
        // Gets value
        const storedValue = male[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of femalePropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdFemale(prop);
        // Gets value
        const storedValue = female[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of warriorPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdWarrior(prop);
        // Gets value
        const storedValue = warrior[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of archerPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdArcher(prop);
        // Gets value
        const storedValue = archer[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of magePropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdMage(prop);
        // Gets value
        const storedValue = mage[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of materialNamePropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdMaterialName(prop);
        // Gets value
        const storedValue = materialName[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of materialPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdMaterial(prop);
        // Gets value
        const storedValue = formatNumber(materialStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of creationNamePropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdCreationName(prop);
        // Gets value
        const storedValue = creationName[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of creationPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdCreation(prop);
        // Gets value
        const storedValue = formatNumber(creationStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of cheatNamePropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdCheatName(prop);
        // Gets value
        const storedValue = cheatStats[prop];
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
    for(let prop of cheatStatsPropNames){
        // Gets IDs
        const elementId = mapPropNameToElementIdCheatStats(prop);
        // Gets value
        const storedValue = formatNumber(cheatStats[prop]);
        // Updates element on page
        setElementTextById(elementId, storedValue);
    }
}, 1);