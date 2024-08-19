// This menu is only accessible if the player decides to help with the rebuilding of the weapon smith, armor smith, and/or apothecary in Endora.

// Production material list (anything not found here is found in material.js):
// Material Name:
materialName.metal = "Metal";
materialName.leather = "Leather";
materialName.silkCloth = "Silk Cloth";
materialName.magiCore = "Magical Core";
// Material Amount:
materialStats.metal = 0;
materialStats.forgedMetal = 0;
materialStats.leather = 0;
materialStats.tannedLeather = 0;
materialStats.silkCloth = 0;
materialStats.etchedSilkCloth = 0;
materialStats.magiCore = 0;
materialStats.condensedMagiCore = 0;
// Have Base Material:
noOreTic = 0;
noRawhideTic = 0;

// Forge:
function Smelt() {
    if (materialStats.ore >= 3) {
        materialStats.ore -= 3;
        materialStats.metal += 1;
        materialStats.forgedMetal = materialStats.metal;
    } else if (materialStats.ore < 3) {
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
    if (materialStats.core >= 3) {
        materialStats.core -= 3;
        materialStats.magiCore += 1;
        materialStats.condensedMagiCore = materialStats.magiCore;
        // $("<p>You smelted some ore.</p>").insertAfter("#endora-secret-placeholder");
    } else if (materialStats.core < 3) {
        $("<p>You do not have enough material for that. Go fight some more.</p>").insertAfter("#endora-secret-placeholder");
    }
}
// Tannery:
function Tan() {
    if (materialStats.rawhide >= 3) {
        materialStats.rawhide -= 3;
        materialStats.leather += 1;
        materialStats.tannedLeather = materialStats.leather;
        // $("<p>You smelted some ore.</p>").insertAfter("#endora-secret-placeholder");
    } else if (materialStats.rawhide < 3) {
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
    if (materialStats.silk >= 3) {
        materialStats.silk -= 3;
        materialStats.silkCloth += 1;
        materialStats.etchedSilkCloth = materialStats.silkCloth;
        // $("<p>You smelted some ore.</p>").insertAfter("#endora-secret-placeholder");
    } else if (materialStats.silk < 3) {
        $("<p>You do not have enough material for that. Go fight some more.</p>").insertAfter("#endora-secret-placeholder");
    }
}