// This will just be the container for the equipment within the game
function Equipment (name, health, mana, strength, defense, endurance, agility, intelligence, numArrows, amountOf, numLeft, cost, saleValue) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.defense = defense;
    this.endurance = endurance;
    this.agility = agility;
    this.intelligence = intelligence;
    this.numArrows = numArrows;
    //Shop:
    this.amountOf = amountOf;
    this.numLeft = numLeft;
    this.cost = cost;
    this.saleValue = saleValue;
}
// Starting gear: >
// Warrior:
let dilapidatedHelmet = new Equipment ("Dilapidated Helmet", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 10);
let dilapidatedArmor = new Equipment ("Dilapidated Armor", 3, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 10);
let dilapidatedHand = new Equipment ("Dilapidated Greaves", 1, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 10);
let dilapidatedBelt = new Equipment ("Dilapidated Belt", 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 10);
let dilapidatedLeg = new Equipment ("Dilapidated Leg Armor", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 10);
let dilapidatedFoot = new Equipment ("Dilapidated Warrior Boots", 2, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 10);
let dilapidatedSword = new Equipment ("Rusted Sword", 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 10);
let dilapidatedShield = new Equipment ("Chipped Shield", 2, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 10);
// Archer:
let poorHelmet = new Equipment ("Rotten Hat", 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 10);
let poorArmor = new Equipment ("Rotten Leather Armor", 1, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 10);
let poorHand = new Equipment ("Rotten Gloves", 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 10);
let poorBelt = new Equipment ("Rotten Belt", 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 10);
let poorLeg = new Equipment ("Rotten Leg Armor", 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 10);
let poorFoot = new Equipment ("Rotten Boots", 1, 0, 0, 1, 0, 3, 0, 0, 0, 0, 0, 10);
let poorBow = new Equipment ("Cracked Bow", 0, 0, 2, 0, 5, 5, 0, 0, 0, 0, 0, 10);
let poorArrows = new Equipment ("Poorly Crafted Arrows", 0, 0, 1, 0, 0, 10, 0, 10, 0, 0, 0, 10);
// Mage:
let nonHelmet = new Equipment ("Bent Circlet", 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 10);
let nonArmor = new Equipment ("Moth-Eaten Robes", 1, 3, 0, 2, 0, 0, 2, 0, 0, 0, 0, 10);
let nonHand = new Equipment ("Wholely Gloves", 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 10);
let nonBelt = new Equipment ("Moth-Eaten Belt", 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 10);
let nonLeg = new Equipment ("Moth-Eaten Leg Armor", 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 10);
let nonFoot = new Equipment ("Moth-Eaten Shoes", 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 10);
let nonStaff = new Equipment ("Cracked Staff", 0, 12, 0, 1, 0, 0, 15, 0, 0, 0, 0, 10);
// End starting gear >

// Shop gear >
// Warrior:
let ironHelmet = new Equipment ("Iron Helmet", 2, 0, 0, 2, 0, 0, 0, 0, 1, 1, 25, 5);
let ironArmor = new Equipment ("Iron Armor", 3, 0, 1, 2, 0, 0, 0, 0, 1, 1, 100, 25);
let ironHand = new Equipment ("Iron Greaves", 1, 0, 3, 2, 0, 0, 0, 0, 1, 1, 25, 5);
let ironBelt = new Equipment ("Iron Belt", 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 5, 1);
let ironLeg = new Equipment ("Iron Leg Armor", 2, 0, 0, 2, 0, 0, 0, 0, 1, 1, 25, 5);
let ironFoot = new Equipment ("Iron Boots", 2, 0, 0, 2, 0, 1, 0, 0, 1, 1, 25, 5);
let ironSword = new Equipment ("Iron Sword", 0, 0, 10, 3, 0, 0, 0, 0, 1, 1, 100, 25);
let ironShield = new Equipment ("Iron Shield", 2, 0, 0, 15, 0, 0, 0, 0, 1, 1, 50, 15);
// Archer:
let leatherHelmet = new Equipment ("Leather Hat", .5, 0, 0, .5, 1, 1, 0, 0, 1, 1, 5, 1);
let leatherArmor = new Equipment ("Leather Armor", 2, 0, .5, 2, 5, 2, 0, 0, 1, 1, 25, 15);
let leatherHand = new Equipment ("Leather Gloves", .5, 0, 1, 1, .25, .25, 0, 0, 1, 1, 15, 10);
let leatherBelt = new Equipment ("Leather Belt", 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 5, 1);
let leatherLeg = new Equipment ("Leather Leg Armor", .5, 0, 0, 2, 1, 2, 0, 0, 1, 1, 25, 5);
let leatherFoot = new Equipment ("Leather Boots", 1, 0, 0, 1, 1, 5, 0, 0, 1, 1, 25, 5);
let ironBow = new Equipment ("Inlaid Birch Bow", 0, 0, 10, .75, 1, 3, 0, 0, 1, 1, 100, 25);
let ironArrows = new Equipment ("Iron Arrows", 0, 0, 3, 0, 0, 10, 0, 10, 99, 99, 10, 5);
// Mage:
let mageHelmet = new Equipment ("Nice Beginner's Circlet", .25, 2, 0, .25, 0, 1, 2, 0, 1, 1, 5, 1);
let mageArmor = new Equipment ("Nice Beginner's Robe", 1, 5, 0, 2, 0, 1, 5, 0, 1, 1, 25, 15);
let mageHand = new Equipment ("Mage's Leather Gloves", .5, 2, .5, .5, .25, .25, 1, 0, 1, 1, 15, 10);
let mageBelt = new Equipment ("Mage's Sash Belt", .25, .25, 0, .25, 0, .25, .75, 0, 1, 1, 5, 1);
let mageLeg = new Equipment ("Frayed Pants", .25, 2, 0, .5, .25, 1, 3, 0, 1, 1, 25, 5);
let mageFoot = new Equipment ("Nice Beginner's Shoes", 1, 0, 0, 1, 1, 5, 0, 0, 1, 1, 25, 5);
let mageWeapon = new Equipment ("Flame Staff", 2, 10, 5, .75, .25, 0, 10, 0, 1, 1, 100, 25);
let mageWeapon1 = new Equipment ("Water Staff", 0, 15, 10, 0, .25, 0, 10, 0, 1, 1, 150, 50);
let mageWeapon2 = new Equipment ("Spark Staff", 0, 20, 15, 0, .25, 0, 10, 0, 1, 1, 200, 75);
//Clothes:
let comfortableBoxers = new Equipment ("Comfortable Boxers", 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 5, 1);
let comfortablePanties = new Equipment ("Comfortable Panties", 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 5, 1);

//Special Equipment >
// Warrior:
let craftedWarriorsRespite = new Equipment ("Warrior's Respite", 999999, 999, 999999, 999999, 999, 999, 999, 0, 0, 0, 0, 999999999);

// Equipment Arrays >
//Warrior:
let equipArray = [dilapidatedHelmet, dilapidatedArmor, dilapidatedHand, dilapidatedBelt, dilapidatedLeg, dilapidatedFoot, dilapidatedSword, dilapidatedShield, poorHelmet, poorArmor, poorHand, poorBelt, poorLeg, poorFoot, poorBow, poorArrows, nonHelmet, nonArmor, nonHand, nonBelt, nonLeg, nonFoot, nonStaff, ironHelmet, ironArmor, ironHand, ironBelt, ironLeg, ironFoot, ironSword, ironShield, leatherHelmet, leatherArmor, leatherHand, leatherBelt, leatherLeg, leatherFoot, ironBow, ironArrows, mageHelmet,  mageArmor, mageHand, mageBelt, mageLeg, mageFoot, mageWeapon, mageWeapon1, mageWeapon2, craftedWarriorsRespite, comfortableBoxers, comfortablePanties, healthPotion, staminaPotion, manaPotion];

let callEquipArray;
let equippedItems = [];

// Function to auto equip items
function grabEquip() {
    for (i = 0; i < equipArray.length; i++) {
        switch (playerInfo.classType) {
            case 'Warrior':
                switch (equipArray[i]) {
                    case dilapidatedHelmet:
                        playerInfo.head = dilapidatedHelmet.name;
                        playerStats.health += dilapidatedHelmet.health;
                        playerStats.mana += dilapidatedHelmet.mana;
                        playerStats.strength += dilapidatedHelmet.strength;
                        playerStats.defense += dilapidatedHelmet.defense;
                        playerStats.endurance += dilapidatedHelmet.endurance;
                        playerStats.agility += dilapidatedHelmet.agility;
                        playerStats.intelligence += dilapidatedHelmet.intelligence;
                        equippedItems.push(dilapidatedHelmet);
                        break;
                    case dilapidatedArmor:
                        playerInfo.armor = dilapidatedArmor.name;
                        playerStats.health += dilapidatedArmor.health;
                        playerStats.mana += dilapidatedArmor.mana;
                        playerStats.strength += dilapidatedArmor.strength;
                        playerStats.defense += dilapidatedArmor.defense;
                        playerStats.endurance += dilapidatedArmor.endurance;
                        playerStats.agility += dilapidatedArmor.agility;
                        playerStats.intelligence += dilapidatedArmor.intelligence;
                        equippedItems.push(dilapidatedArmor);
                        break;
                    case dilapidatedHand:
                        playerInfo.hands = dilapidatedHand.name;
                        playerStats.health += dilapidatedHand.health;
                        playerStats.mana += dilapidatedHand.mana;
                        playerStats.strength += dilapidatedHand.strength;
                        playerStats.defense += dilapidatedHand.defense;
                        playerStats.endurance += dilapidatedHand.endurance;
                        playerStats.agility += dilapidatedHand.agility;
                        playerStats.intelligence += dilapidatedHand.intelligence;
                        equippedItems.push(dilapidatedHand);
                        break;
                    case dilapidatedBelt:
                        playerInfo.waist = dilapidatedBelt.name;
                        playerStats.health += dilapidatedBelt.health;
                        playerStats.mana += dilapidatedBelt.mana;
                        playerStats.strength += dilapidatedBelt.strength;
                        playerStats.defense += dilapidatedBelt.defense;
                        playerStats.endurance += dilapidatedBelt.endurance;
                        playerStats.agility += dilapidatedBelt.agility;
                        playerStats.intelligence += dilapidatedBelt.intelligence;
                        equippedItems.push(dilapidatedBelt);
                        break;
                    case dilapidatedLeg:
                        playerInfo.legs = dilapidatedLeg.name;
                        playerStats.health += dilapidatedLeg.health;
                        playerStats.mana += dilapidatedLeg.mana;
                        playerStats.strength += dilapidatedLeg.strength;
                        playerStats.defense += dilapidatedLeg.defense;
                        playerStats.endurance += dilapidatedLeg.endurance;
                        playerStats.agility += dilapidatedLeg.agility;
                        playerStats.intelligence += dilapidatedLeg.intelligence;
                        equippedItems.push(dilapidatedLeg);
                        break;
                    case dilapidatedFoot:
                        playerInfo.feet = dilapidatedFoot.name;
                        playerStats.health += dilapidatedFoot.health;
                        playerStats.mana += dilapidatedFoot.mana;
                        playerStats.strength += dilapidatedFoot.strength;
                        playerStats.defense += dilapidatedFoot.defense;
                        playerStats.endurance += dilapidatedFoot.endurance;
                        playerStats.agility += dilapidatedFoot.agility;
                        playerStats.intelligence += dilapidatedFoot.intelligence;
                        equippedItems.push(dilapidatedFoot);
                        break;
                    case dilapidatedSword:
                        playerInfo.rightHand = dilapidatedSword.name;
                        playerStats.health += dilapidatedSword.health;
                        playerStats.mana += dilapidatedSword.mana;
                        playerStats.strength += dilapidatedSword.strength;
                        playerStats.defense += dilapidatedSword.defense;
                        playerStats.endurance += dilapidatedSword.endurance;
                        playerStats.agility += dilapidatedSword.agility;
                        playerStats.intelligence += dilapidatedSword.intelligence;
                        equippedItems.push(dilapidatedSword);
                        break;
                    case dilapidatedShield:
                        playerInfo.leftHand = dilapidatedShield.name;
                        playerStats.health += dilapidatedShield.health;
                        playerStats.mana += dilapidatedShield.mana;
                        playerStats.strength += dilapidatedShield.strength;
                        playerStats.defense += dilapidatedShield.defense;
                        playerStats.endurance += dilapidatedShield.endurance;
                        playerStats.agility += dilapidatedShield.agility;
                        playerStats.intelligence += dilapidatedShield.intelligence;
                        equippedItems.push(dilapidatedShield);
                        break;
                }
                break;
            case 'Archer':
                switch (equipArray[i]) {
                    case poorHelmet:
                        playerInfo.head = poorHelmet.name;
                        playerStats.health += poorHelmet.health;
                        playerStats.mana += poorHelmet.mana;
                        playerStats.strength += poorHelmet.strength;
                        playerStats.defense += poorHelmet.defense;
                        playerStats.endurance += poorHelmet.endurance;
                        playerStats.agility += poorHelmet.agility;
                        playerStats.intelligence += poorHelmet.intelligence;
                        equippedItems.push(poorHelmet);
                        break;
                    case poorArmor:
                        playerInfo.armor = poorArmor.name;
                        playerStats.health += poorArmor.health;
                        playerStats.mana += poorArmor.mana;
                        playerStats.strength += poorArmor.strength;
                        playerStats.defense += poorArmor.defense;
                        playerStats.endurance += poorArmor.endurance;
                        playerStats.agility += poorArmor.agility;
                        playerStats.intelligence += poorArmor.intelligence;
                        equippedItems.push(poorArmor);
                        break;
                    case poorHand:
                        playerInfo.hands = poorHand.name;
                        playerStats.health += poorHand.health;
                        playerStats.mana += poorHand.mana;
                        playerStats.strength += poorHand.strength;
                        playerStats.defense += poorHand.defense;
                        playerStats.endurance += poorHand.endurance;
                        playerStats.agility += poorHand.agility;
                        playerStats.intelligence += poorHand.intelligence;
                        equippedItems.push(poorHand);
                        break;
                    case poorBelt:
                        playerInfo.waist = poorBelt.name;
                        playerStats.health += poorBelt.health;
                        playerStats.mana += poorBelt.mana;
                        playerStats.strength += poorBelt.strength;
                        playerStats.defense += poorBelt.defense;
                        playerStats.endurance += poorBelt.endurance;
                        playerStats.agility += poorBelt.agility;
                        playerStats.intelligence += poorBelt.intelligence;
                        equippedItems.push(poorBelt);
                        break;
                    case poorLeg:
                        playerInfo.legs = poorLeg.name;
                        playerStats.health += poorLeg.health;
                        playerStats.mana += poorLeg.mana;
                        playerStats.strength += poorLeg.strength;
                        playerStats.defense += poorLeg.defense;
                        playerStats.endurance += poorLeg.endurance;
                        playerStats.agility += poorLeg.agility;
                        playerStats.intelligence += poorLeg.intelligence;
                        equippedItems.push(poorLeg);
                        break;
                    case poorFoot:
                        playerInfo.feet = poorFoot.name;
                        playerStats.health += poorFoot.health;
                        playerStats.mana += poorFoot.mana;
                        playerStats.strength += poorFoot.strength;
                        playerStats.defense += poorFoot.defense;
                        playerStats.endurance += poorFoot.endurance;
                        playerStats.agility += poorFoot.agility;
                        playerStats.intelligence += poorFoot.intelligence;
                        equippedItems.push(poorFoot);
                        break;
                    case poorArrows:
                        playerInfo.rightHand = poorArrows.name;
                        playerStats.health += poorArrows.health;
                        playerStats.mana += poorArrows.mana;
                        playerStats.strength += poorArrows.strength;
                        playerStats.defense += poorArrows.defense;
                        playerStats.endurance += poorArrows.endurance;
                        playerStats.agility += poorArrows.agility;
                        playerStats.intelligence += poorArrows.intelligence;
                        playerStats.numArrows += poorArrows.numArrows;
                        equippedItems.push(poorArrows);
                        break;
                    case poorBow:
                        playerInfo.leftHand = poorBow.name;
                        playerStats.health += poorBow.health;
                        playerStats.mana += poorBow.mana;
                        playerStats.strength += poorBow.strength;
                        playerStats.defense += poorBow.defense;
                        playerStats.endurance += poorBow.endurance;
                        playerStats.agility += poorBow.agility;
                        playerStats.intelligence += poorBow.intelligence;
                        equippedItems.push(poorBow);
                        break;
                }
                break;
            case 'Mage':
                switch (equipArray[i]) {
                    case nonHelmet:
                        playerInfo.head = nonHelmet.name;
                        playerStats.health += nonHelmet.health;
                        playerStats.mana += nonHelmet.mana;
                        playerStats.strength += nonHelmet.strength;
                        playerStats.defense += nonHelmet.defense;
                        playerStats.endurance += nonHelmet.endurance;
                        playerStats.agility += nonHelmet.agility;
                        playerStats.intelligence += nonHelmet.intelligence;
                        equippedItems.push(nonHelmet);
                        break;
                    case nonArmor:
                        playerInfo.armor = nonArmor.name;
                        playerStats.health += nonArmor.health;
                        playerStats.mana += nonArmor.mana;
                        playerStats.strength += nonArmor.strength;
                        playerStats.defense += nonArmor.defense;
                        playerStats.endurance += nonArmor.endurance;
                        playerStats.agility += nonArmor.agility;
                        playerStats.intelligence += nonArmor.intelligence;
                        equippedItems.push(nonArmor);
                        break;
                    case nonHand:
                        playerInfo.hands = nonHand.name;
                        playerStats.health += nonHand.health;
                        playerStats.mana += nonHand.mana;
                        playerStats.strength += nonHand.strength;
                        playerStats.defense += nonHand.defense;
                        playerStats.endurance += nonHand.endurance;
                        playerStats.agility += nonHand.agility;
                        playerStats.intelligence += nonHand.intelligence;
                        equippedItems.push(nonHand);
                        break;
                    case nonBelt:
                        playerInfo.waist = nonBelt.name;
                        playerStats.health += nonBelt.health;
                        playerStats.mana += nonBelt.mana;
                        playerStats.strength += nonBelt.strength;
                        playerStats.defense += nonBelt.defense;
                        playerStats.endurance += nonBelt.endurance;
                        playerStats.agility += nonBelt.agility;
                        playerStats.intelligence += nonBelt.intelligence;
                        equippedItems.push(nonBelt);
                        break;
                    case nonLeg:
                        playerInfo.legs = nonLeg.name;
                        playerStats.health += nonLeg.health;
                        playerStats.mana += nonLeg.mana;
                        playerStats.strength += nonLeg.strength;
                        playerStats.defense += nonLeg.defense;
                        playerStats.endurance += nonLeg.endurance;
                        playerStats.agility += nonLeg.agility;
                        playerStats.intelligence += nonLeg.intelligence;
                        equippedItems.push(nonLeg);
                        break;
                    case nonFoot:
                        playerInfo.feet = nonFoot.name;
                        playerStats.health += nonFoot.health;
                        playerStats.mana += nonFoot.mana;
                        playerStats.strength += nonFoot.strength;
                        playerStats.defense += nonFoot.defense;
                        playerStats.endurance += nonFoot.endurance;
                        playerStats.agility += nonFoot.agility;
                        playerStats.intelligence += nonFoot.intelligence;
                        equippedItems.push(nonFoot);
                        break;
                    case nonStaff:
                        playerInfo.rightHand = nonStaff.name;
                        playerInfo.leftHand = nonStaff.name;
                        playerStats.health += nonStaff.health;
                        playerStats.mana += nonStaff.mana;
                        playerStats.strength += nonStaff.strength;
                        playerStats.defense += nonStaff.defense;
                        playerStats.endurance += nonStaff.endurance;
                        playerStats.agility += nonStaff.agility;
                        playerStats.intelligence += nonStaff.intelligence;
                        equippedItems.push(nonStaff);
                        break;
                }
                break;
        }
    }
}