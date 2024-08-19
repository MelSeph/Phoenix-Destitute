//This will be an area to build out any material needed to build or make something.
let materialName = function(ore,rawhide,silk,core,stone,wood,sand,metal,leather,silkCloth,magiCore) {
    this.ore = ore;
    this.rawhide = rawhide;
    this.silk = silk;
    this.core = core;
    this.stone = stone;
    this.wood = wood;
    this.sand = sand;
    this.metal = metal;
    this.leather = leather;
    this.silkCloth = silkCloth;
    this.magiCore = magiCore;
}
let materialStats = function(ore,rawhide,silk,core,stone,wood,sand,metal,leather,silkCloth,magiCore,stonehealth,woodhealth,sandhealth,stonemaxhealth,woodmaxhealth,sandmaxhealth) {
    this.ore = ore;
    this.rawhide = rawhide;
    this.silk = silk;
    this.core = core;
    this.stone = stone;
    this.wood = wood;
    this.sand = sand;
    this.metal = metal;
    this.leather = leather;
    this.silkCloth = silkCloth;
    this.magiCore = magiCore;
    this.stonehealth = stonehealth;
    this.woodhealth = woodhealth;
    this.sandhealth = sandhealth;
    this.stonemaxhealth = stonemaxhealth;
    this.woodmaxhealth = woodmaxhealth;
    this.sandmaxhealth = sandmaxhealth;
}

// Material Names:
materialName.ore = "Ore";
materialName.rawhide = "Raw Hide";
materialName.silk = "Silk";
materialName.core = "Core";
materialName.stone = "Stone";
materialName.wood = "Wood";
materialName.sand = "Sand";
// Amount of materials harvested:
materialStats.ore = 0;
materialStats.rawhide = 0;
materialStats.silk = 0;
materialStats.core = 0;
materialStats.stone = 0;
materialStats.wood = 0;
materialStats.sand = 0;
//Health of materials until harvested, changes:
materialStats.stonehealth = 100;
materialStats.woodhealth = 100;
materialStats.sandhealth = 100;
//Max health of raw materials, fixed:
materialStats.stonemaxhealth = 100;
materialStats.woodmaxhealth = 100;
materialStats.sandmaxhealth = 100;
// Misc status affects:
let multiplier = 2;
let massivematerials = 9999999; //Cheat
let timesMined = 0; //Times harvested stone.
let timesChopped = 0; //Times harvested wood.
let timesScooped = 0; //Times harvested sand.

applyChangeStone();
applyChangeWood();
applyChangeSand();

function stone() {
    if(materialStats.stonehealth > 0) {
        materialStats.stonehealth -= playerStats.strength;
        if(materialStats.stonehealth <= 0 && timesMined >= 0) {
            //materialStats.stone++; //Uncomment to run game normally.
            materialStats.stone += massivematerials; //Comment out to run game normally, after uncommenting materialStats.stone++.
            materialStats.stone1 = materialStats.stone;
            //materialStats.ore++; //Uncomment to run game normally.
            materialStats.ore += massivematerials; //Comment out to run game normally, after uncommenting materialStats.stone++.
            timesMined = materialStats.stone1;
            materialStats.stonehealth = materialStats.stonemaxhealth;
            if(materialStats.stonehealth <= 0 && timesMined >= 100) {
                materialStats.stone += 2;
                materialStats.ore += 2;
                materialStats.stone1 = materialStats.stone;
                timesMined = materialStats.stone1;
                materialStats.stonehealth -= (playerStats.strength * multiplier);
                materialStats.stonehealth = materialStats.stonemaxhealth;
                if(materialStats.stonehealth <= 0 && materialStats.stone >= 100000) {
                    materialStats.stone += 4;
                    materialStats.ore += 4;
                    materialStats.stone1 = materialStats.stone;
                    timesMined = materialStats.stone1;
                    materialStats.stonehealth = materialStats.stonemaxhealth;
                    materialStats.stonehealth -= (playerStats.strength * (multiplier * 2));
                    if(materialStats.stone >= 1000000) {
                        materialStats.stone += 6;
                        materialStats.ore += 6;
                        materialStats.stone1 = materialStats.stone;
                        timesMined = materialStats.stone1;
                        materialStats.stonehealth = materialStats.stonemaxhealth;
                        materialStats.stonehealth -= (playerStats.strength * (multiplier * 4));
                        applyChangeStone();
                        return;
                    }
                    applyChangeStone();
                    return;
                }
                applyChangeStone();
                return;
            }
            applyChangeStone();
            return;
        }
        applyChangeStone();
        return;
    }
}
function wood() {
    if(materialStats.woodhealth > 0) {
        materialStats.woodhealth -= playerStats.strength;
        if(materialStats.woodhealth <= 0 && timesChopped >= 0) {
            //materialStats.wood++;
            materialStats.wood += massivematerials;
            materialStats.wood1 = materialStats.wood;
            timesChopped = materialStats.wood1;
            materialStats.woodhealth = materialStats.woodmaxhealth;
            if(materialStats.woodhealth <= 0 && timesChopped >= 100) {
                materialStats.wood += multiplier;
                materialStats.wood1 = materialStats.wood;
                timesChopped = materialStats.wood1;
                materialStats.woodhealth = materialStats.woodmaxhealth;
                if(materialStats.woodhealth <= 0 && timesChopped >= 100000) {
                    materialStats.wood += (multiplier*5);
                    materialStats.wood1 = materialStats.wood;
                    timesChopped = materialStats.wood1;
                    materialStats.woodhealth = materialStats.woodmaxhealth;
                    if(materialStats.woodhealth <= 0 && timesChopped >= 1000000) {
                        materialStats.wood += (multiplier*10);
                        materialStats.wood1 = materialStats.wood;
                        timesChopped = materialStats.wood1;
                        materialStats.woodhealth = materialStats.woodmaxhealth;
                        applyChangeWood();
                        return;
                    }
                    applyChangeWood();
                    return;
                }
                applyChangeWood();
                return;
            }
            applyChangeWood();
            return;
        }
        applyChangeWood();
        return;
    }
}
function sand() {
    if(materialStats.sandhealth > 0) {
        materialStats.sandhealth -= playerStats.strength;
        if(materialStats.sandhealth <= 0 && timesScooped >= 0) {
            //materialStats.sand++;
            materialStats.sand += massivematerials;
            materialStats.sand1 = materialStats.sand;
            timesScooped = materialStats.sand1;
            materialStats.sandhealth = materialStats.sandmaxhealth;
            if(materialStats.sandhealth <= 0 && timesScooped >= 100) {
                materialStats.sand += multiplier;
                materialStats.sand1 = materialStats.sand;
                timesScooped = materialStats.sand1;
                materialStats.sandhealth = materialStats.sandmaxhealth;
                if(materialStats.sandhealth <= 0 && timesScooped >= 100000) {
                    materialStats.sand += (multiplier*5);
                    materialStats.sand1 = materialStats.sand;
                    timesScooped = materialStats.sand1;
                    materialStats.sandhealth = materialStats.sandmaxhealth;
                    if(materialStats.sandhealth <= 0 && timesScooped >= 1000000) {
                        materialStats.sand += (multiplier*10);
                        materialStats.sand1 = materialStats.sand;
                        timesScooped = materialStats.sand1;
                        materialStats.sandhealth = materialStats.sandmaxhealth;
                        applyChangeSand();
                        return;
                    }
                    applyChangeSand();
                    return;
                }
                applyChangeSand();
                return;
            }
            applyChangeSand();
            return;
        }
        applyChangeSand();
        return;
    }
}

function applyChangeStone() { //Stone Health
	var a = materialStats.stonehealth * (100 /materialStats.stonemaxhealth);
	$(".stoneHealthBar").animate({'width': a + "%"}, 500);
	$('#stoneHealth').html(formatNumber(materialStats.stonehealth) + "/" + formatNumber(materialStats.stonemaxhealth));
}
function applyChangeWood() { //Wood Health
	var a = materialStats.woodhealth * (100 /materialStats.woodmaxhealth);
	$(".woodHealthBar").animate({'width': a + "%"}, 500);
	$('#woodHealth').html(formatNumber(materialStats.woodhealth) + "/" + formatNumber(materialStats.woodmaxhealth));
}
function applyChangeSand() { //Sand Health
	var a = materialStats.sandhealth * (100 /materialStats.sandmaxhealth);
	$(".sandHealthBar").animate({'width': a + "%"}, 500);
	$('#sandHealth').html(formatNumber(materialStats.sandhealth) + "/" + formatNumber(materialStats.sandmaxhealth));
}