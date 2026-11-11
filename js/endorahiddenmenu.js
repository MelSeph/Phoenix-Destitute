// This menu is only accessible if the player decides to help with the rebuilding of the weapon smith, armor smith, and/or apothecary in Endora.

let creationName = function(warriorRespiteCore) {
    this.warriorRespiteCore = warriorRespiteCore;
}
let creationStats = function(warriorRespiteCore) {
    this.warriorRespiteCore = warriorRespiteCore;
}

// Production material list (anything not found here is found in material.js):
// Material Name:
materialName.metal = "Metal";
materialName.leather = "Leather";
materialName.silkCloth = "Silk Cloth";
materialName.magiCore = "Magical Core";
creationName.warriorRespiteCore = "Warrior Respite's Core";
creationName.warriorRespiteHilt = "Warrior Respite's Hilt";
creationName.warriorRespiteSheath = "Warrior Respite's Sheath";
creationName.warriorRespite = "Warrior's Respite";
// Material Amount:
materialStats.metal = 0;
materialStats.leather = 0;
materialStats.silkCloth = 0;
materialStats.magiCore = 0;
materialStats.forgedMetal = 0;
materialStats.tannedLeather = 0;
materialStats.etchedCloth = 0;
materialStats.condensedCore = 0;
creationStats.warriorRespiteCore = 0;
creationStats.warriorRespiteHilt = 0;
creationStats.warriorRespiteSheath = 0;
creationStats.warriorRespite = 0;
materialStats.magiCoreCost = 3;
materialStats.metalCost = 3;
materialStats.leatherCost = 3;
materialStats.silkClothCost = 3;
creationStats.warriorRespiteCoreMagiCoreCoreCost = 100;
creationStats.warriorRespiteCoreMagiCoreHiltCost = 100;
creationStats.warriorRespiteCoreMagiCoreSheathCost = 50;
creationStats.warriorRespiteCoreForgedMetalCoreCost = 300;
creationStats.warriorRespiteCoreForgedMetalHiltCost = 200;
creationStats.warriorRespiteCoreForgedForgedMetalSheathCost = 100;
creationStats.warriorRespiteCoreEtchedSilkClothCost = 50;
// Have Base Material:
noOreTic = 0;
noRawhideTic = 0;

// Forge:
function Smelt() {
    if (materialStats.ore >= materialStats.metalCost) {
        materialStats.ore -= materialStats.metalCost;
        materialStats.metal++;
        materialStats.forgedMetal = materialStats.metal;
    } else if (materialStats.ore < materialStats.metalCost) {
        switch (noOreTic) {
            case 1:
                break;
            case 0:
                $("<p>You do not have enough material for that. Go fight some more.</p>").insertAfter("#endora-secret-placeholder");
                noOre = 1;
                break;
        }
    }
}
function Condense() {
    if (materialStats.core >= materialStats.magiCoreCost) {
        materialStats.core -= materialStats.magiCoreCost;
        materialStats.magiCore++;
        materialStats.condensedCore = materialStats.magiCore;
        // $("<p>You smelted some ore.</p>").insertAfter("#endora-secret-placeholder");
    } else if (materialStats.core < materialStats.magiCoreCost) {
        $("<p>You do not have enough material for that. Go fight some more.</p>").insertAfter("#endora-secret-placeholder");
    }
}
// Tannery:
function Tan() {
    if (materialStats.rawhide >= materialStats.leatherCost) {
        materialStats.rawhide -= materialStats.leatherCost;
        materialStats.leather++;
        materialStats.tannedLeather = materialStats.leather;
    } else if (materialStats.rawhide < materialStats.leather) {
        switch (noRawhideTic) {
            case 1:
                break;
            case 0:
                $("<p>You do not have enough material for that. Go fight some more.</p>").insertAfter("#endora-secret-placeholder");
                noOre = 1;
                break;
        }
    }
}
function Spindle() {
    if (materialStats.silk >= materialStats.silkClothCost) {
        materialStats.silk -= materialStats.silkClothCost;
        materialStats.silkCloth++;
        materialStats.etchedCloth = materialStats.silkCloth;
    } else if (materialStats.silk < materialStats.silkClothCost) {
        $("<p>You do not have enough material for that. Go fight some more.</p>").insertAfter("#endora-secret-placeholder");
    }
}

// Weapons:
function warriorsWeaponCreationCore() {
    switch(creationStats.warriorRespiteCore != 1) {
        case true:
            switch(materialStats.magiCore >= creationStats.warriorRespiteCoreMagiCoreCoreCost && materialStats.metal >= creationStats.warriorRespiteCoreForgedMetalCoreCost) {
                case true:
                    materialStats.magiCore -= creationStats.warriorRespiteCoreMagiCoreCoreCost;
                    materialStats.metal -= creationStats.warriorRespiteCoreForgedMetalCoreCost;
                    creationStats.warriorRespiteCore++;
                    $("<p>You have forged the Warrior's Respite's Core! Almost there! Please forge the hilt and sheath, then complete the forging.</p>").insertAfter("#endora-secret-placeholder");
                    break;
                case false:
                    $("<p>You do not have enough material for that. If you have more Cores, forge those into MagiCores, otherwise go fight some more for cores or smelt more metal.</p>").insertAfter("#endora-secret-placeholder");
                    break;
            }
        case false:
            $("<p>Sorry, but you have already finished making the core, please forge another piece or complete the forging process.</p>").insertAfter("#endora-secret-placeholder");
            break;
    }
}
function warriorsWeaponCreationHilt() {
    switch(creationStats.warriorRespiteHilt != 1) {
        case true:
            switch(materialStats.magiCore >= creationStats.warriorRespiteCoreMagiCoreHiltCost && materialStats.metal >= creationStats.warriorRespiteCoreForgedMetalHiltCost) {
                case true:
                    materialStats.magiCore -= creationStats.warriorRespiteCoreMagiCoreHiltCost;
                    materialStats.metal -= creationStats.warriorRespiteCoreForgedMetalHiltCost;
                    creationStats.warriorRespiteHilt++;
                    $("<p>You have forged the Warrior's Respite's Hilt! Almost there! Please forge the hilt and sheath, then complete the forging.</p>").insertAfter("#endora-secret-placeholder");
                    break;
                case false:
                    $("<p>You do not have enough material for that. If you have more Cores, forge those into MagiCores, otherwise go fight some more for cores or smelt more metal.</p>").insertAfter("#endora-secret-placeholder");
                    break;
            }
        case false:
            $("<p>Sorry, but you have already finished making the hilt, please forge another piece or complete the forging process.</p>").insertAfter("#endora-secret-placeholder");
            break;
    }
}
function warriorsWeaponCreationSheath() {
    switch(creationStats.warriorRespiteSheath != 1) {
        case true:
            switch(materialStats.magiCore >= creationStats.warriorRespiteCoreMagiCoreSheathCost && materialStats.metal >= creationStats.warriorRespiteCoreForgedForgedMetalSheathCost && materialStats.silkCloth >= creationStats.warriorRespiteCoreEtchedSilkClothCost) {
                case true:
                    materialStats.magiCore -= creationStats.warriorRespiteCoreMagiCoreSheathCost;
                    materialStats.metal -= creationStats.warriorRespiteCoreForgedForgedMetalSheathCost;
                    materialStats.silkCloth -= creationStats.warriorRespiteCoreEtchedSilkClothCost;
                    creationStats.warriorRespiteSheath++;
                    $("<p>You have forged the Warrior's Respite's Sheath! Almost there! Please forge the hilt and/or core, then complete the forging.</p>").insertAfter("#endora-secret-placeholder");
                    break;
                case false:
                    $("<p>You do not have enough material for that. If you have more Cores, forge those into MagiCores, otherwise go fight some more for cores or smelt more metal.</p>").insertAfter("#endora-secret-placeholder");
                    break;
            }
        case false:
            $("<p>Sorry, but you have already finished making the hilt, please forge another piece or complete the forging process.</p>").insertAfter("#endora-secret-placeholder");
            break;
    }
}
function warriorsRespite() {
    switch(creationStats.warriorRespiteSheath == 1 && creationStats.warriorRespiteCore == 1 && creationStats.warriorRespiteHilt == 1) {
        case true:
            creationStats.warriorRespiteCore--;
            creationStats.warriorRespiteHilt--;
            creationStats.warriorRespiteSheath--;
            creationStats.warriorRespite++;
            toggleRespite();
            createdEquip();
            $("<p>You have forged the Warrior's Respite! May all tremble in fear of your sword's awe!</p>").insertAfter("#endora-secret-placeholder");
            break;
        case false:
            $("<p>You have not forged the components to complete the Warrior's Respite. Please complete the Core, Hilt, and Sheath before attempting this forge.</p>").insertAfter("#endora-secret-placeholder");
            break;
    }
}