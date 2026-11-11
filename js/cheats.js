// This is the cheats storehouse

function cheatName(name) {
    this.name = name;
}
function cheatStats(amount) {
    this.amount = amount;
}

cheatName.moneyCheatName = "Money Cheat";
cheatName.resourceCheatName = "Resource Cheat";
cheatName.statsCheatName = "Stats Cheat";
cheatName.potionCheatName = "Potion Cheat";
cheatName.endoraResedenceRebuilt = "Endora Residences";
cheatStats.amount = 999999999;
cheatStats.building = 100;

function MoneyCheat() {
    playerStats.gold += cheatStats.amount;
    return;
}
function ResourceCheat() {
    materialStats.ore += cheatStats.amount;
    materialStats.sand += cheatStats.amount;
    materialStats.wood += cheatStats.amount;
    materialStats.stone += cheatStats.amount;
    materialStats.glass += cheatStats.amount;
    return;
}
function StatCheat() {
    playerStats.health += cheatStats.amount;
    playerStats.mana += cheatStats.amount;
    playerStats.agility += cheatStats.amount;
    playerStats.defense += cheatStats.amount;
    playerStats.endurance += cheatStats.amount;
    playerStats.intelligence += cheatStats.amount;
    playerStats.strength += cheatStats.amount;
    return;
}
function PotionCheat() {
    playerStats.numHealthPotions += cheatStats.amount;
    playerStats.numManaPotions += cheatStats.amount;
    playerStats.numStaminaPotions += cheatStats.amount;
    return;
}
function ExperienceCheat() {
    playerStats.experience += cheatStats.amount;
    levelUp();
    return;
}
function BeastDropsCheat() {
    materialStats.core += cheatStats.amount;
    materialStats.rawhide += cheatStats.amount;
    materialStats.silk += cheatStats.amount;
    return;
}
function ProductionItemsCheat() {
    materialStats.metal += cheatStats.amount;
    materialStats.silkCloth += cheatStats.amount;
    materialStats.leather += cheatStats.amount;
    materialStats.magiCore += cheatStats.amount;
    return;
}
function EndoraResedencesRebuilt() {
    janceStats.min = cheatStats.building;
    renoStats.min = cheatStats.building;
    rajStats.min = cheatStats.building;
    greyStats.min = cheatStats.building;
    thaneStats.min = cheatStats.building;
    hildtStats.min = cheatStats.building;
    return;
}
function EndoraBusinessesRebuilt() {
    weaponSmithyStats.min = cheatStats.building;
    armorSmithyStats.min = cheatStats.building;
    apothecaryStats.min = cheatStats.building;
    return;
}