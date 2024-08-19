// This will be the rebuilding area.
function BuildingInfo(name,owner) {
    this.name = name;
    this.owner = owner;
}
function BuildingStats(min,max,stone,wood,glass,rebuilt,maxStone,maxWood,gold) {
    this.min = min;
    this.max = max;
    this.stone = stone;
    this.wood = wood;
    this.glass = glass;
    this.rebuilt = rebuilt;
    this.maxStone = maxStone;
    this.maxWood = maxWood;
    this.gold = gold;
}
//Residents:
let janceInfo = new BuildingInfo("Jance House","Belladonna Jance");
let janceStats = new BuildingStats(0,100,0,0,0,0,0,0,99999); //default gold: 50
let renoInfo = new BuildingInfo("Reno House","Raymond Reno");
let renoStats = new BuildingStats(0,100,0,0,0,0,0,0,99999);
let rajInfo = new BuildingInfo("Raj House","Daniel Raj");
let rajStats = new BuildingStats(0,100,0,0,0,0,0,0,99999);
let greyInfo = new BuildingInfo("Grey House","Abigail Grey");
let greyStats = new BuildingStats(0,100,0,0,0,0,0,0,99999);
let thaneInfo = new BuildingInfo("Thane House","Helena Thane");
let thaneStats = new BuildingStats(0,100,0,0,0,0,0,0,99999);
let hildtInfo = new BuildingInfo("Hildt House","John Hildt");
let hildtStats = new BuildingStats(0,100,0,0,0,0,0,0,99999);
//Production:
let weaponSmithyInfo = new BuildingInfo("Weapon Smithy","Drog");
let weaponSmithyStats = new BuildingStats(0,100,0,0,0,0,0,0,99999);
let armorSmithyInfo = new BuildingInfo("Armor Smithy","Ariel");
let armorSmithyStats = new BuildingStats(0,100,0,0,0,0,0,0,99999);
let apothecaryInfo = new BuildingInfo("Apothecary","Cait");
let apothecaryStats = new BuildingStats(0,100,0,0,0,0,0,0,99999);
//Rebuild Material Exceeded:
janceStoneMax = 0;
janceWoodMax = 0;
renoStoneMax = 0;
renoWoodMax = 0;
rajStoneMax = 0;
rajWoodMax = 0;
greyStoneMax = 0;
greyWoodMax = 0;
thaneStoneMax = 0;
thaneWoodMax = 0;
hildtStoneMax = 0;
hildtWoodMax = 0;
weaponSmithStoneMax = 0;
weaponSmithWoodMax = 0;
armorSmithStoneMax = 0;
armorSmithWoodMax = 0;
apothecaryStoneMax = 0;
apothecaryWoodMax = 0;

//Repair:
function janceStone() {
    if (materialStats.stone == 0) {
        $("<p>You have no stone to rebuild with. Please go gather more stone.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(janceStats.min < 100 && materialStats.stone != 0) {
        if(janceStats.maxStone != 50) {
            materialStats.stone--;
            janceStats.maxStone++;
            janceStats.min++;
            return;
        }
        if (janceStats.maxStone == 50 && janceStoneMax == 0) {
            janceStoneMax = 1;
            $("<p>You have built as much as you can with stone, try wood.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(janceStats.min == 100 && janceStats.rebuilt != 1) {
        playerStats.gold += janceStats.gold;
        janceStats.rebuilt = 1;
        $("<p> "+ janceInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Jance House!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function janceWood() {
    if (materialStats.wood == 0) {
        $("<p>You have no wood to rebuild with. Please go gather more wood.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(janceStats.min < 100 && materialStats.wood != 0) {
        if(janceStats.maxWood != 50) {
            materialStats.wood--;
            janceStats.maxWood++;
            janceStats.min++;
            return;
        }
        if (janceStats.maxWood == 50 && janceWoodMax == 0) {
            janceWoodMax = 1;
            $("<p>You have built as much as you can with wood, try stone.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(janceStats.min == 100 && janceStats.rebuilt != 1) {
        playerStats.gold += janceStats.gold;
        janceStats.rebuilt = 1;
        $("<p> "+ janceInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Jance House!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function renoStone() {
    if (materialStats.stone == 0) {
        $("<p>You have no stone to rebuild with. Please go gather more stone.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(renoStats.min < 100 && materialStats.stone != 0) {
        if(renoStats.maxStone != 50) {
            materialStats.stone--;
            renoStats.maxStone++;
            renoStats.min++;
            return;
        }
        if (renoStats.maxStone == 50 && renoStoneMax == 0) {
            renoStoneMax = 1;
            $("<p>You have built as much as you can with stone, try wood.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(renoStats.min == 100 && renoStats.rebuilt != 1) {
        playerStats.gold += renoStats.gold;
        renoStats.rebuilt = 1;
        $("<p> "+ renoInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Reno House!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function renoWood() {
    if (materialStats.wood == 0) {
        $("<p>You have no wood to rebuild with. Please go gather more wood.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(renoStats.min < 100 && materialStats.wood != 0) {
        if(renoStats.maxWood != 50) {
            materialStats.wood--;
            renoStats.maxWood++;
            renoStats.min++;
            return;
        }
        if (renoStats.maxWood == 50 && renoWoodMax == 0) {
            renoWoodMax = 1;
            $("<p>You have built as much as you can with wood, try stone.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(renoStats.min == 100 && renoStats.rebuilt != 1) {
        playerStats.gold += renoStats.gold;
        renoStats.rebuilt = 1;
        $("<p> "+ renoInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Reno House!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function rajStone() {
    if (materialStats.stone == 0) {
        $("<p>You have no stone to rebuild with. Please go gather more stone.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(rajStats.min < 100 && materialStats.stone != 0) {
        if(rajStats.maxStone != 50) {
            materialStats.stone--;
            rajStats.maxStone++;
            rajStats.min++;
            return;
        }
        if (rajStats.maxStone == 50 && rajStoneMax == 0) {
            rajStoneMax = 1;
            $("<p>You have built as much as you can with stone, try wood.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(rajStats.min == 100 && rajStats.rebuilt != 1) {
        playerStats.gold += rajStats.gold;
        rajStats.rebuilt = 1;
        $("<p> "+ rajInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Raj House!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function rajWood() {
    if (materialStats.wood == 0) {
        $("<p>You have no wood to rebuild with. Please go gather more wood.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(rajStats.min < 100 && materialStats.wood != 0) {
        if(rajStats.maxWood != 50) {
            materialStats.wood--;
            rajStats.maxWood++;
            rajStats.min++;
            return;
        }
        if (rajStats.maxWood == 50 && rajWoodMax == 0) {
            rajWoodMax = 1;
            $("<p>You have built as much as you can with wood, try stone.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(rajStats.min == 100 && rajStats.rebuilt != 1) {
        playerStats.gold += rajStats.gold;
        rajStats.rebuilt = 1;
        $("<p> "+ rajInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Raj House!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function greyStone() {
    if (materialStats.stone == 0) {
        $("<p>You have no stone to rebuild with. Please go gather more stone.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(greyStats.min < 100 && materialStats.stone != 0) {
        if(greyStats.maxStone != 50) {
            materialStats.stone--;
            greyStats.maxStone++;
            greyStats.min++;
            return;
        }
        if (greyStats.maxStone == 50 && greyStoneMax == 0) {
            greyStoneMax = 1;
            $("<p>You have built as much as you can with stone, try wood.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(greyStats.min == 100 && greyStats.rebuilt != 1) {
        toggleWeaponSmith();
        playerStats.gold += greyStats.gold;
        greyStats.rebuilt = 1;
        $("<p> "+ greyInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Grey House! The Grey family also own a weapon smith that needs to be repaired.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function greyWood() {
    if (materialStats.wood == 0) {
        $("<p>You have no wood to rebuild with. Please go gather more wood.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(greyStats.min < 100 && materialStats.wood != 0) {
        if(greyStats.maxWood != 50) {
            materialStats.wood--;
            greyStats.maxWood++;
            greyStats.min++;
            return;
        }
        if (greyStats.maxWood == 50 && greyWoodMax == 0) {
            greyWoodMax = 1;
            $("<p>You have built as much as you can with wood, try stone.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(greyStats.min == 100 && greyStats.rebuilt != 1) {
        toggleWeaponSmith();
        playerStats.gold += greyStats.gold;
        greyStats.rebuilt = 1;
        $("<p> "+ greyInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Grey House! The Grey family also own a weapon smith that needs to be repaired.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function thaneStone() {
    if (materialStats.stone == 0) {
        $("<p>You have no stone to rebuild with. Please go gather more stone.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(thaneStats.min < 100 && materialStats.stone != 0) {
        if(thaneStats.maxStone != 50) {
            materialStats.stone--;
            thaneStats.maxStone++;
            thaneStats.min++;
            return;
        }
        if(thaneStats.maxStone == 50 && thaneStoneMax == 0) {
            thaneStoneMax = 1;
            $("<p>You have built as much as you can with stone, try wood.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(thaneStats.min == 100 && thaneStats.rebuilt != 1) {
        toggleArmorSmith();
        playerStats.gold += thaneStats.gold;
        thaneStats.rebuilt = 1;
        $("<p> "+ thaneInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Thane House! The Thane family also own an armor smith that needs to be repaired.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function thaneWood() {
    if (materialStats.wood == 0) {
        $("<p>You have no wood to rebuild with. Please go gather more wood.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(thaneStats.min < 100 && materialStats.wood != 0) {
        if(thaneStats.maxWood != 50) {
            materialStats.wood--;
            thaneStats.maxWood++;
            thaneStats.min++;
            return;
        }
        if (thaneStats.maxWood == 50 && thaneWoodMax == 0) {
            thaneWoodMax = 1;
            $("<p>You have built as much as you can with wood, try stone.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(thaneStats.min == 100 && thaneStats.rebuilt != 1) {
        toggleArmorSmith();
        playerStats.gold += thaneStats.gold;
        thaneStats.rebuilt = 1;
        $("<p> "+ thaneInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Thane House! The Thane family also own an armor smith that needs to be repaired.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function hildtStone() {
    if (materialStats.stone == 0) {
        $("<p>You have no stone to rebuild with. Please go gather more stone.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(hildtStats.min < 100 && materialStats.stone != 0) {
        if(hildtStats.maxStone != 50) {
            materialStats.stone--;
            hildtStats.maxStone++;
            hildtStats.min++;
            return;
        }
        if (hildtStats.maxStone == 50 && hildtStoneMax == 0) {
            hildtStoneMax = 1;
            $("<p>You have built as much as you can with stone, try wood.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(hildtStats.min == 100 && hildtStats.rebuilt != 1) {
        toggleApothecaryBuilding();
        playerStats.gold += hildtStats.gold;
        hildtStats.rebuilt = 1;
        $("<p> "+ hildtInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Hildt House! The Hildt family also own an apothecary that needs to be repaired.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function hildtWood() {
    if (materialStats.wood == 0) {
        $("<p>You have no wood to rebuild with. Please go gather more wood.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(hildtStats.min < 100 && materialStats.wood != 0) {
        if(hildtStats.maxWood != 50) {
            materialStats.wood--;
            hildtStats.maxWood++;
            hildtStats.min++;
            return;
        }
        if (hildtStats.maxWood == 50 && hildtWoodMax == 0) {
            hildtWoodMax = 1;
            $("<p>You have built as much as you can with wood, try stone.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(hildtStats.min == 100 && hildtStats.rebuilt != 1) {
        toggleApothecaryBuilding();
        playerStats.gold += hildtStats.gold;
        hildtStats.rebuilt = 1;
        $("<p> "+ hildtInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Hildt House! The Hildt family also own an apothecary that needs to be repaired.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function weaponSmithyStone() {
    if (materialStats.stone == 0) {
        $("<p>You have no stone to rebuild with. Please go gather more stone.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(weaponSmithyStats.min < 100 && materialStats.stone != 0) {
        if(weaponSmithyStats.maxStone != 50) {
            materialStats.stone--;
            weaponSmithyStats.maxStone++;
            weaponSmithyStats.min++;
            return;
        }
        if (weaponSmithyStats.maxStone == 50 && weaponSmithStoneMax == 0) {
            weaponSmithStoneMax = 1;
            $("<p>You have built as much as you can with stone, try wood.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(weaponSmithyStats.min == 100 && weaponSmithyStats.rebuilt != 1) {
        toggleForge();
        playerStats.gold += weaponSmithyStats.gold;
        weaponSmithyStats.rebuilt = 1;
        $("<p> "+ weaponSmithyInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Weapon Smithy!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function weaponSmithyWood() {
    if (materialStats.wood == 0) {
        $("<p>You have no wood to rebuild with. Please go gather more wood.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(weaponSmithyStats.min < 100 && materialStats.wood != 0) {
        if(weaponSmithyStats.maxWood != 50) {
            materialStats.wood--;
            weaponSmithyStats.maxWood++;
            weaponSmithyStats.min++;
            return;
        }
        if (weaponSmithyStats.maxWood == 50 && weaponSmithWoodMax == 0) {
            weaponSmithWoodMax = 1;
            $("<p>You have built as much as you can with wood, try stone.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(weaponSmithyStats.min == 100 && weaponSmithyStats.rebuilt != 1) {
        toggleForge();
        playerStats.gold += weaponSmithyStats.gold;
        weaponSmithyStats.rebuilt = 1;
        $("<p> "+ weaponSmithyInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Weapon Smithy!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function armorSmithyStone() {
    if (materialStats.stone == 0) {
        $("<p>You have no stone to rebuild with. Please go gather more stone.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(armorSmithyStats.min < 100 && materialStats.stone != 0) {
        if(armorSmithyStats.maxStone != 50) {
            materialStats.stone--;
            armorSmithyStats.maxStone++;
            armorSmithyStats.min++;
            return;
        }
        if (armorSmithyStats.maxStone == 50 && armorSmithStoneMax == 0) {
            armorSmithStoneMax = 1;
            $("<p>You have built as much as you can with stone, try wood.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(armorSmithyStats.min == 100 && armorSmithyStats.rebuilt != 1) {
        toggleTanner();
        playerStats.gold += armorSmithyStats.gold;
        armorSmithyStats.rebuilt = 1;
        $("<p> "+ armorSmithyInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Armor Smithy!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function armorSmithyWood() {
    if (materialStats.wood == 0) {
        $("<p>You have no wood to rebuild with. Please go gather more wood.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(armorSmithyStats.min < 100 && materialStats.wood != 0) {
        if(armorSmithyStats.maxWood != 50) {
            materialStats.wood--;
            armorSmithyStats.maxWood++;
            armorSmithyStats.min++;
            return;
        }
        if (armorSmithyStats.maxWood == 50 && armorSmithWoodMax == 0) {
            armorSmithWoodMax = 1;
            $("<p>You have built as much as you can with wood, try stone.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(armorSmithyStats.min == 100 && armorSmithyStats.rebuilt != 1) {
        toggleTanner();
        playerStats.gold += armorSmithyStats.gold;
        armorSmithyStats.rebuilt = 1;
        $("<p> "+ armorSmithyInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Armor Smithy!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function apothecaryStone() {
    if (materialStats.stone == 0) {
        $("<p>You have no stone to rebuild with. Please go gather more stone.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(apothecaryStats.min < 100 && materialStats.stone != 0) {
        if(apothecaryStats.maxStone != 50) {
            materialStats.stone--;
            apothecaryStats.maxStone++;
            apothecaryStats.min++;
            return;
        }
        if (apothecaryStats.maxStone == 50 && apothecaryStoneMax == 0) {
            apothecaryStoneMax = 1;
            $("<p>You have built as much as you can with stone, try wood.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(apothecaryStats.min == 100 && apothecaryStats.rebuilt != 1) {
        toggleApothecary();
        playerStats.gold += apothecaryStats.gold;
        apothecaryStats.rebuilt = 1;
        $("<p> "+ apothecaryInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Apothecary!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}
function apothecaryWood() {
    if (materialStats.wood == 0) {
        $("<p>You have no wood to rebuild with. Please go gather more wood.</p>").insertAfter("#rebuild-placeholder");
        return;
    }
    if(apothecaryStats.min < 100 && materialStats.wood != 0) {
        if(apothecaryStats.maxWood != 50) {
            materialStats.wood--;
            apothecaryStats.maxWood++;
            apothecaryStats.min++;
            return;
        }
        if (apothecaryStats.maxWood == 50 && apothecaryWoodMax == 0) {
            apothecaryWoodMax = 1;
            $("<p>You have built as much as you can with wood, try stone.</p>").insertAfter("#rebuild-placeholder");
            return;
        }
    }
    if(apothecaryStats.min == 100 && apothecaryStats.rebuilt != 1) {
        toggleApothecary();
        playerStats.gold += apothecaryStats.gold;
        apothecaryStats.rebuilt = 1;
        $("<p> "+ apothecaryInfo.owner +" gives you a little something as a thankyou. You have successfully rebuilt Apothecary!</p>").insertAfter("#rebuild-placeholder");
        return;
    }
}