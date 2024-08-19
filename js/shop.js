//This will be the area to build out new shops
function ShopConstructInfo(name) {
    this.name = name;
}
function ShopConstructStats(amountOf,numLeft,cost,saleValue,shopGold) {
    this.amountOf = amountOf;
    this.numLeft = numLeft;
    this.cost = cost;
    this.saleValue = saleValue;
    this.shopGold = shopGold;
}
//Equipment (name, health, mana, strength, defense, endurance, agility, intelligence, numArrows)
let shopKeeper = new ShopConstructInfo('Rose');
let shopInfo = new ShopConstructInfo('Nothing');
let shopStats = new ShopConstructStats(0,0,0,0,0);
let storeItems = [];
let itemBought = [];
let itemSold = [];
let opened = 0;
let boughtArrows = 0;

function grabShopItems() {
    shopStats.shopGold = playerStats.gold;
    if (opened == 0) {
        getItems();
        opened = 1;
        return;
    }
}
function getItems() {
    for (i=0; i < equipArray.length; i++) {
        switch (playerInfo.classType) {
            case 'Warrior':
                    switch (equipArray[i]) {
                        case ironHelmet:
                            storeItems.push(ironHelmet);
                            shopInfo.name = ironHelmet.name;
                            shopStats.amountOf = storeItems[0].amountOf;
                            shopStats.numLeft = storeItems[0].numLeft;
                            shopStats.cost = storeItems[0].cost;
                            shopStats.saleValue = storeItems[0].saleValue;
                            break;
                        case ironArmor:
                            storeItems.push(ironArmor);
                            shopInfo.name1 = ironArmor.name;
                            shopStats.amountOf1 = storeItems[1].amountOf;
                            shopStats.numLeft1 = storeItems[1].numLeft;
                            shopStats.cost1 = storeItems[1].cost;
                            shopStats.saleValue1 = storeItems[1].saleValue;
                            break;
                        case ironHand:
                            storeItems.push(ironHand);
                            shopInfo.name2 = ironHand.name;
                            shopStats.amountOf2 = storeItems[2].amountOf;
                            shopStats.numLeft2 = storeItems[2].numLeft;
                            shopStats.cost2 = storeItems[2].cost;
                            shopStats.saleValue2 = storeItems[2].saleValue;
                            break;
                        case ironBelt:
                            storeItems.push(ironBelt);
                            shopInfo.name3 = ironBelt.name;
                            shopStats.amountOf3 = storeItems[3].amountOf;
                            shopStats.numLeft3 = storeItems[3].numLeft;
                            shopStats.cost3 = storeItems[3].cost;
                            shopStats.saleValue3 = storeItems[3].saleValue;
                            break;
                        case ironLeg:
                            storeItems.push(ironLeg);
                            shopInfo.name4 = ironLeg.name;
                            shopStats.amountOf4 = storeItems[4].amountOf;
                            shopStats.numLeft4 = storeItems[4].numLeft;
                            shopStats.cost4 = storeItems[4].cost;
                            shopStats.saleValue4 = storeItems[4].saleValue;
                            break;
                        case ironFoot:
                            storeItems.push(ironFoot);
                            shopInfo.name5 = ironFoot.name;
                            shopStats.amountOf5 = storeItems[5].amountOf;
                            shopStats.numLeft5 = storeItems[5].numLeft;
                            shopStats.cost5 = storeItems[5].cost;
                            shopStats.saleValue5 = storeItems[5].saleValue;
                            break;
                        case ironSword:
                            storeItems.push(ironSword);
                            shopInfo.name6 = ironSword.name;
                            shopStats.amountOf6 = storeItems[6].amountOf;
                            shopStats.numLeft6 = storeItems[6].numLeft;
                            shopStats.cost6 = storeItems[6].cost;
                            shopStats.saleValue6 = storeItems[6].saleValue;
                            break;
                        case ironShield:
                            storeItems.push(ironShield);
                            shopInfo.name7 = ironShield.name;
                            shopStats.amountOf7 = storeItems[7].amountOf;
                            shopStats.numLeft7 = storeItems[7].numLeft;
                            shopStats.cost7 = storeItems[7].cost;
                            shopStats.saleValue7 = storeItems[7].saleValue;
                            break;
                        case comfortableBoxers:
                            storeItems.push(comfortableBoxers);
                            shopInfo.name8 = comfortableBoxers.name;
                            shopStats.amountOf8 = storeItems[8].amountOf;
                            shopStats.numLeft8 = storeItems[8].numLeft;
                            shopStats.cost8 = storeItems[8].cost;
                            shopStats.saleValue8 = storeItems[8].saleValue;
                            break;
                        case comfortablePanties:
                            storeItems.push(comfortablePanties);
                            shopInfo.name9 = comfortablePanties.name;
                            shopStats.amountOf9 = storeItems[9].amountOf;
                            shopStats.numLeft9 = storeItems[9].numLeft;
                            shopStats.cost9 = storeItems[9].cost;
                            shopStats.saleValue9 = storeItems[9].saleValue;
                            break;
                        case healthPotion:
                            storeItems.push(healthPotion);
                            shopInfo.name27 = healthPotion.name;
                            shopStats.amountOf27 = storeItems[10].amountOf;
                            shopStats.numLeft27 = storeItems[10].numLeft;
                            shopStats.cost27 = storeItems[10].cost;
                            shopStats.saleValue27 = storeItems[10].saleValue;
                            break;
                        case staminaPotion:
                            storeItems.push(staminaPotion);
                            shopInfo.name28 = staminaPotion.name;
                            shopStats.amountOf28 = storeItems[11].amountOf;
                            shopStats.numLeft28 = storeItems[11].numLeft;
                            shopStats.cost28 = storeItems[11].cost;
                            shopStats.saleValue28 = storeItems[11].saleValue;
                            break;
                        case manaPotion:
                            storeItems.push(manaPotion);
                            shopInfo.name29 = manaPotion.name;
                            shopStats.amountOf29 = storeItems[12].amountOf;
                            shopStats.numLeft29 = storeItems[12].numLeft;
                            shopStats.cost29 = storeItems[12].cost;
                            shopStats.saleValue29 = storeItems[12].saleValue;
                            break;
                    }
                    break;
            case 'Archer':
                switch (equipArray[i]) {
                    case leatherHelmet:
                        storeItems.push(leatherHelmet);
                        shopInfo.name10 = leatherHelmet.name;
                        shopStats.amountOf10 = storeItems[0].amountOf;
                        shopStats.numLeft10 = storeItems[0].numLeft;
                        shopStats.cost10 = storeItems[0].cost;
                        shopStats.saleValue10 = storeItems[0].saleValue;
                        break;
                    case leatherArmor:
                        storeItems.push(leatherArmor);
                        shopInfo.name11 = leatherArmor.name;
                        shopStats.amountOf11 = storeItems[1].amountOf;
                        shopStats.numLeft11 = storeItems[1].numLeft;
                        shopStats.cost11 = storeItems[1].cost;
                        shopStats.saleValue11 = storeItems[1].saleValue;
                        break;
                    case leatherHand:
                        storeItems.push(leatherHand);
                        shopInfo.name12 = leatherHand.name;
                        shopStats.amountOf12 = storeItems[2].amountOf;
                        shopStats.numLeft12 = storeItems[2].numLeft;
                        shopStats.cost12 = storeItems[2].cost;
                        shopStats.saleValue12 = storeItems[2].saleValue;
                        break;
                    case leatherBelt:
                        storeItems.push(leatherBelt);
                        shopInfo.name13 = leatherBelt.name;
                        shopStats.amountOf13 = storeItems[3].amountOf;
                        shopStats.numLeft13 = storeItems[3].numLeft;
                        shopStats.cost13 = storeItems[3].cost;
                        shopStats.saleValue13 = storeItems[3].saleValue;
                        break;
                    case leatherLeg:
                        storeItems.push(leatherLeg);
                        shopInfo.name14 = leatherLeg.name;
                        shopStats.amountOf14 = storeItems[4].amountOf;
                        shopStats.numLeft14 = storeItems[4].numLeft;
                        shopStats.cost14 = storeItems[4].cost;
                        shopStats.saleValue14 = storeItems[4].saleValue;
                        break;
                    case leatherFoot:
                        storeItems.push(leatherFoot);
                        shopInfo.name15 = leatherFoot.name;
                        shopStats.amountOf15 = storeItems[5].amountOf;
                        shopStats.numLeft15 = storeItems[5].numLeft;
                        shopStats.cost15 = storeItems[5].cost;
                        shopStats.saleValue15 = storeItems[5].saleValue;
                        break;
                    case ironBow:
                        storeItems.push(ironBow);
                        shopInfo.name16 = ironBow.name;
                        shopStats.amountOf16 = storeItems[6].amountOf;
                        shopStats.numLeft16 = storeItems[6].numLeft;
                        shopStats.cost16 = storeItems[6].cost;
                        shopStats.saleValue16 = storeItems[6].saleValue;
                        break;
                    case ironArrows:
                        storeItems.push(ironArrows);
                        shopInfo.name17 = ironArrows.name;
                        shopStats.amountOf17 = storeItems[7].amountOf;
                        shopStats.numLeft17 = storeItems[7].numLeft;
                        shopStats.cost17 = storeItems[7].cost;
                        shopStats.saleValue17 = storeItems[7].saleValue;
                        break;
                    case comfortableBoxers:
                        storeItems.push(comfortableBoxers);
                        shopInfo.name8 = comfortableBoxers.name;
                        shopStats.amountOf8 = storeItems[8].amountOf;
                        shopStats.numLeft8 = storeItems[8].numLeft;
                        shopStats.cost8 = storeItems[8].cost;
                        shopStats.saleValue8 = storeItems[8].saleValue;
                        break;
                    case comfortablePanties:
                        storeItems.push(comfortablePanties);
                        shopInfo.name9 = comfortablePanties.name;
                        shopStats.amountOf9 = storeItems[9].amountOf;
                        shopStats.numLeft9 = storeItems[9].numLeft;
                        shopStats.cost9 = storeItems[9].cost;
                        shopStats.saleValue9 = storeItems[9].saleValue;
                        break;
                    case healthPotion:
                        storeItems.push(healthPotion);
                        shopInfo.name27 = healthPotion.name;
                        shopStats.amountOf27 = storeItems[10].amountOf;
                        shopStats.numLeft27 = storeItems[10].numLeft;
                        shopStats.cost27 = storeItems[10].cost;
                        shopStats.saleValue27 = storeItems[10].saleValue;
                        break;
                    case staminaPotion:
                        storeItems.push(staminaPotion);
                        shopInfo.name28 = staminaPotion.name;
                        shopStats.amountOf28 = storeItems[11].amountOf;
                        shopStats.numLeft28 = storeItems[11].numLeft;
                        shopStats.cost28 = storeItems[11].cost;
                        shopStats.saleValue28 = storeItems[11].saleValue;
                        break;
                    case manaPotion:
                        storeItems.push(manaPotion);
                        shopInfo.name29 = manaPotion.name;
                        shopStats.amountOf29 = storeItems[12].amountOf;
                        shopStats.numLeft29 = storeItems[12].numLeft;
                        shopStats.cost29 = storeItems[12].cost;
                        shopStats.saleValue29 = storeItems[12].saleValue;
                        break;
                }
                break;
            case 'Mage':
                switch (equipArray[i]) {
                    case mageHelmet:
                        storeItems.push(mageHelmet);
                        shopInfo.name18 = mageHelmet.name;
                        shopStats.amountOf18 = storeItems[0].amountOf;
                        shopStats.numLeft18 = storeItems[0].numLeft;
                        shopStats.cost18 = storeItems[0].cost;
                        shopStats.saleValue18 = storeItems[0].saleValue;
                        break;
                    case mageArmor:
                        storeItems.push(mageArmor);
                        shopInfo.name19 = mageArmor.name;
                        shopStats.amountOf19 = storeItems[1].amountOf;
                        shopStats.numLeft19 = storeItems[1].numLeft;
                        shopStats.cost19 = storeItems[1].cost;
                        shopStats.saleValue19 = storeItems[1].saleValue;
                        break;
                    case mageHand:
                        storeItems.push(mageHand);
                        shopInfo.name20 = mageHand.name;
                        shopStats.amountOf20 = storeItems[2].amountOf;
                        shopStats.numLeft20 = storeItems[2].numLeft;
                        shopStats.cost20 = storeItems[2].cost;
                        shopStats.saleValue20 = storeItems[2].saleValue;
                        break;
                    case mageBelt:
                        storeItems.push(mageBelt);
                        shopInfo.name21 = mageBelt.name;
                        shopStats.amountOf21 = storeItems[3].amountOf;
                        shopStats.numLeft21 = storeItems[3].numLeft;
                        shopStats.cost21 = storeItems[3].cost;
                        shopStats.saleValue21 = storeItems[3].saleValue;
                        break;
                    case mageLeg:
                        storeItems.push(mageLeg);
                        shopInfo.name22 = mageLeg.name;
                        shopStats.amountOf22 = storeItems[4].amountOf;
                        shopStats.numLeft22 = storeItems[4].numLeft;
                        shopStats.cost22 = storeItems[4].cost;
                        shopStats.saleValue22 = storeItems[4].saleValue;
                        break;
                    case mageFoot:
                        storeItems.push(mageFoot);
                        shopInfo.name23 = mageFoot.name;
                        shopStats.amountOf23 = storeItems[5].amountOf;
                        shopStats.numLeft23 = storeItems[5].numLeft;
                        shopStats.cost23 = storeItems[5].cost;
                        shopStats.saleValue23 = storeItems[5].saleValue;
                        break;
                    case mageWeapon:
                        storeItems.push(mageWeapon);
                        shopInfo.name24 = mageWeapon.name;
                        shopStats.amountOf24 = storeItems[6].amountOf;
                        shopStats.numLeft24 = storeItems[6].numLeft;
                        shopStats.cost24 = storeItems[6].cost;
                        shopStats.saleValue24 = storeItems[6].saleValue;
                        break;
                    case mageWeapon1:
                        storeItems.push(mageWeapon1);
                        shopInfo.name25 = mageWeapon1.name;
                        shopStats.amountOf25 = storeItems[7].amountOf;
                        shopStats.numLeft25 = storeItems[7].numLeft;
                        shopStats.cost25 = storeItems[7].cost;
                        shopStats.saleValue25 = storeItems[7].saleValue;
                        break;
                    case mageWeapon2:
                        storeItems.push(mageWeapon2);
                        shopInfo.name26 = mageWeapon2.name;
                        shopStats.amountOf26 = storeItems[8].amountOf;
                        shopStats.numLeft26 = storeItems[8].numLeft;
                        shopStats.cost26 = storeItems[8].cost;
                        shopStats.saleValue26 = storeItems[8].saleValue;
                        break;
                    case comfortableBoxers:
                        storeItems.push(comfortableBoxers);
                        shopInfo.name8 = comfortableBoxers.name;
                        shopStats.amountOf8 = storeItems[9].amountOf;
                        shopStats.numLeft8 = storeItems[9].numLeft;
                        shopStats.cost8 = storeItems[9].cost;
                        shopStats.saleValue8 = storeItems[9].saleValue;
                        break;
                    case comfortablePanties:
                        storeItems.push(comfortablePanties);
                        shopInfo.name9 = comfortablePanties.name;
                        shopStats.amountOf9 = storeItems[10].amountOf;
                        shopStats.numLeft9 = storeItems[10].numLeft;
                        shopStats.cost9 = storeItems[10].cost;
                        shopStats.saleValue9 = storeItems[10].saleValue;
                        break;
                    case healthPotion:
                        storeItems.push(healthPotion);
                        shopInfo.name27 = healthPotion.name;
                        shopStats.amountOf27 = storeItems[10].amountOf;
                        shopStats.numLeft27 = storeItems[10].numLeft;
                        shopStats.cost27 = storeItems[10].cost;
                        shopStats.saleValue27 = storeItems[10].saleValue;
                        break;
                    case staminaPotion:
                        storeItems.push(staminaPotion);
                        shopInfo.name28 = staminaPotion.name;
                        shopStats.amountOf28 = storeItems[11].amountOf;
                        shopStats.numLeft28 = storeItems[11].numLeft;
                        shopStats.cost28 = storeItems[11].cost;
                        shopStats.saleValue28 = storeItems[11].saleValue;
                        break;
                    case manaPotion:
                        storeItems.push(manaPotion);
                        shopInfo.name29 = manaPotion.name;
                        shopStats.amountOf29 = storeItems[12].amountOf;
                        shopStats.numLeft29 = storeItems[12].numLeft;
                        shopStats.cost29 = storeItems[12].cost;
                        shopStats.saleValue29 = storeItems[12].saleValue;
                        break;
                }
                break;
        }
    }
}
function buy() {
    itemBought.push(ironHelmet);
    if (playerStats.gold >= ironHelmet.cost && shopStats.numLeft > 0) {
        unequip();
        playerInfo.head = ironHelmet.name;
        playerStats.health += ironHelmet.health;
        playerStats.mana += ironHelmet.mana;
        playerStats.strength += ironHelmet.strength;
        playerStats.defense += ironHelmet.defense;
        playerStats.endurance += ironHelmet.endurance;
        playerStats.intelligence += ironHelmet.intelligence;
        shopStats.numLeft--;
        playerStats.gold -= ironHelmet.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(ironHelmet);
        $("<p>You bought " + ironHelmet.name + " for " + ironHelmet.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < ironHelmet.cost) {
        $("<p>Sorry, you do not have enough money for the " + ironHelmet.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + ironHelmet.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy1() {
    itemBought.push(ironArmor);
    if (playerStats.gold >= ironArmor.cost && shopStats.numLeft1 > 0) {
        unequip();
        playerInfo.armor = ironArmor.name;
        playerStats.health += ironArmor.health;
        playerStats.mana += ironArmor.mana;
        playerStats.strength += ironArmor.strength;
        playerStats.defense += ironArmor.defense;
        playerStats.endurance += ironArmor.endurance;
        playerStats.intelligence += ironArmor.intelligence;
        shopStats.numLeft1--;
        playerStats.gold -= ironArmor.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(ironArmor);
        $("<p>You bought " + ironArmor.name + " for " + ironArmor.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < ironArmor.cost) {
        $("<p>Sorry, you do not have enough money for the " + ironArmor.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + ironArmor.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy2() {
    itemBought.push(ironHand);
    if (playerStats.gold >= ironHand.cost && shopStats.numLeft2 > 0) {
        unequip();
        playerInfo.hands = ironHand.name;
        playerStats.health += ironHand.health;
        playerStats.mana += ironHand.mana;
        playerStats.strength += ironHand.strength;
        playerStats.defense += ironHand.defense;
        playerStats.endurance += ironHand.endurance;
        playerStats.intelligence += ironHand.intelligence;
        shopStats.numLeft2--;
        playerStats.gold -= ironHand.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(ironHand);
        $("<p>You bought " + ironHand.name + " for " + ironHand.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < ironHand.cost) {
        $("<p>Sorry, you do not have enough money for the " + ironHand.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + ironHand.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy3() {
    itemBought.push(ironBelt);
    if (playerStats.gold >= ironBelt.cost && shopStats.numLeft3 > 0) {
        unequip();
        playerInfo.waist = ironBelt.name;
        playerStats.health += ironBelt.health;
        playerStats.mana += ironBelt.mana;
        playerStats.strength += ironBelt.strength;
        playerStats.defense += ironBelt.defense;
        playerStats.endurance += ironBelt.endurance;
        playerStats.intelligence += ironBelt.intelligence;
        shopStats.numLeft3--;
        playerStats.gold -= ironBelt.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(ironBelt);
        $("<p>You bought " + ironBelt.name + " for " + ironBelt.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < ironBelt.cost) {
        $("<p>Sorry, you do not have enough money for the " + ironBelt.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + ironBelt.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy4() {
    itemBought.push(ironLeg);
    if (playerStats.gold >= ironLeg.cost && shopStats.numLeft4 > 0) {
        unequip();
        playerInfo.legs = ironLeg.name;
        playerStats.health += ironLeg.health;
        playerStats.mana += ironLeg.mana;
        playerStats.strength += ironLeg.strength;
        playerStats.defense += ironLeg.defense;
        playerStats.endurance += ironLeg.endurance;
        playerStats.intelligence += ironLeg.intelligence;
        shopStats.numLeft4--;
        playerStats.gold -= ironLeg.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(ironLeg);
        $("<p>You bought " + ironLeg.name + " for " + ironLeg.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < ironLeg.cost) {
        $("<p>Sorry, you do not have enough money for the " + ironLeg.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + ironLeg.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy5() {
    itemBought.push(ironFoot);
    if (playerStats.gold >= ironFoot.cost && shopStats.numLeft5 > 0) {
        unequip();
        playerInfo.feet = ironFoot.name;
        playerStats.health += ironFoot.health;
        playerStats.mana += ironFoot.mana;
        playerStats.strength += ironFoot.strength;
        playerStats.defense += ironFoot.defense;
        playerStats.endurance += ironFoot.endurance;
        playerStats.intelligence += ironFoot.intelligence;
        shopStats.numLeft5--;
        playerStats.gold -= ironFoot.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(ironFoot);
        $("<p>You bought " + ironFoot.name + " for " + ironFoot.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < ironFoot.cost) {
        $("<p>Sorry, you do not have enough money for the " + ironFoot.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + ironFoot.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy6() {
    itemBought.push(ironSword);
    if (playerStats.gold >= ironSword.cost && shopStats.numLeft6 > 0) {
        unequip();
        playerInfo.rightHand = ironSword.name;
        playerStats.health += ironSword.health;
        playerStats.mana += ironSword.mana;
        playerStats.strength += ironSword.strength;
        playerStats.defense += ironSword.defense;
        playerStats.endurance += ironSword.endurance;
        playerStats.intelligence += ironSword.intelligence;
        shopStats.numLeft6--;
        playerStats.gold -= ironSword.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(ironSword);
        $("<p>You bought " + ironSword.name + " for " + ironSword.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < ironSword.cost) {
        $("<p>Sorry, you do not have enough money for the " + ironSword.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + ironSword.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy7() {
    itemBought.push(ironShield);
    if (playerStats.gold >= ironShield.cost && shopStats.numLeft7 > 0) {
        unequip();
        playerInfo.leftHand = ironShield.name;
        playerStats.health += ironShield.health;
        playerStats.mana += ironShield.mana;
        playerStats.strength += ironShield.strength;
        playerStats.defense += ironShield.defense;
        playerStats.endurance += ironShield.endurance;
        playerStats.intelligence += ironShield.intelligence;
        shopStats.numLeft7--;
        playerStats.gold -= ironShield.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(ironShield);
        $("<p>You bought " + ironShield.name + " for " + ironShield.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < ironShield.cost) {
        $("<p>Sorry, you do not have enough money for the " + ironShield.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + ironShield.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy8() {
    if (shopStats.numLeft8 < 1) {
        $("<p>You have bought all of the " + comfortableBoxers.name + " we have right now.</p>").insertAfter("#shop-placeholder");
    }
    if (playerStats.gold < comfortableBoxers.cost) {
        $("<p>Sorry, you do not have enough money for the " + comfortableBoxers.name + ".</p>").insertAfter("#shop-placeholder");
    }
    if (playerInfo.gender != male.gender) {
        $("<p>Gurl... I can't let you do that.</p>").insertAfter("#shop-placeholder");
    }
    if (playerStats.gold >= comfortableBoxers.cost && shopStats.numLeft8 > 0 && playerInfo.gender == male.gender) {
        itemBought.push(comfortableBoxers);
        unequip();
        playerInfo.lowerClothes = comfortableBoxers.name;
        playerStats.health += comfortableBoxers.health;
        playerStats.mana += comfortableBoxers.mana;
        playerStats.strength += comfortableBoxers.strength;
        playerStats.defense += comfortableBoxers.defense;
        playerStats.endurance += comfortableBoxers.endurance;
        playerStats.intelligence += comfortableBoxers.intelligence;
        shopStats.numLeft8--;
        playerStats.gold -= comfortableBoxers.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(comfortableBoxers);
        $("<p>You bought " + comfortableBoxers.name + " for " + comfortableBoxers.cost + " gold.</p>").insertAfter("#shop-placeholder");
    }
    return;
}
function buy9() {
    if (shopStats.numLeft9 < 1) {
        $("<p>You have bought all of the " + comfortablePanties.name + " we have right now.</p>").insertAfter("#shop-placeholder");
    }
    if (playerStats.gold < comfortablePanties.cost) {
        $("<p>Sorry, you do not have enough money for the " + comfortablePanties.name + ".</p>").insertAfter("#shop-placeholder");
    }
    if (playerInfo.gender != female.gender) {
        $("<p>It's not that type of game bro.</p>").insertAfter("#shop-placeholder");
    }
    else if (playerStats.gold >= comfortablePanties.cost && shopStats.numLeft9 > 0 && playerInfo.gender == female.gender) {
        itemBought.push(comfortablePanties);
        unequip();
        playerInfo.lowerClothes = comfortablePanties.name;
        playerStats.health += comfortablePanties.health;
        playerStats.mana += comfortablePanties.mana;
        playerStats.strength += comfortablePanties.strength;
        playerStats.defense += comfortablePanties.defense;
        playerStats.endurance += comfortablePanties.endurance;
        playerStats.intelligence += comfortablePanties.intelligence;
        shopStats.numLeft9--;
        playerStats.gold -= comfortablePanties.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(comfortablePanties);
        $("<p>You bought " + comfortablePanties.name + " for " + comfortablePanties.cost + " gold.</p>").insertAfter("#shop-placeholder");
    }
    return;
}
function buy10() {
    itemBought.push(leatherHelmet);
    if (playerStats.gold >= leatherHelmet.cost && shopStats.numLeft10 > 0) {
        unequip();
        playerInfo.head = leatherHelmet.name;
        playerStats.health += leatherHelmet.health;
        playerStats.mana += leatherHelmet.mana;
        playerStats.strength += leatherHelmet.strength;
        playerStats.defense += leatherHelmet.defense;
        playerStats.endurance += leatherHelmet.endurance;
        playerStats.intelligence += leatherHelmet.intelligence;
        shopStats.numLeft10--;
        playerStats.gold -= leatherHelmet.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(leatherHelmet);
        $("<p>You bought " + leatherHelmet.name + " for " + leatherHelmet.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < leatherHelmet.cost) {
        $("<p>Sorry, you do not have enough money for the " + leatherHelmet.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + leatherHelmet.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy11() {
    itemBought.push(leatherArmor);
    if (playerStats.gold >= leatherArmor.cost && shopStats.numLeft11 > 0) {
        unequip();
        playerInfo.armor = leatherArmor.name;
        playerStats.health += leatherArmor.health;
        playerStats.mana += leatherArmor.mana;
        playerStats.strength += leatherArmor.strength;
        playerStats.defense += leatherArmor.defense;
        playerStats.endurance += leatherArmor.endurance;
        playerStats.intelligence += leatherArmor.intelligence;
        shopStats.numLeft11--;
        playerStats.gold -= leatherArmor.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(leatherArmor);
        $("<p>You bought " + leatherArmor.name + " for " + leatherArmor.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < leatherArmor.cost) {
        $("<p>Sorry, you do not have enough money for the " + leatherArmor.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + leatherArmor.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy12() {
    itemBought.push(leatherHand);
    if (playerStats.gold >= leatherHand.cost && shopStats.numLeft12 > 0) {
        unequip();
        playerInfo.hands = leatherHand.name;
        playerStats.health += leatherHand.health;
        playerStats.mana += leatherHand.mana;
        playerStats.strength += leatherHand.strength;
        playerStats.defense += leatherHand.defense;
        playerStats.endurance += leatherHand.endurance;
        playerStats.intelligence += leatherHand.intelligence;
        shopStats.numLeft12--;
        playerStats.gold -= leatherHand.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(leatherHand);
        $("<p>You bought " + leatherHand.name + " for " + leatherHand.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < leatherHand.cost) {
        $("<p>Sorry, you do not have enough money for the " + leatherHand.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + leatherHand.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy13() {
    itemBought.push(leatherBelt);
    if (playerStats.gold >= leatherBelt.cost && shopStats.numLeft13 > 0) {
        unequip();
        playerInfo.waist = leatherBelt.name;
        playerStats.health += leatherBelt.health;
        playerStats.mana += leatherBelt.mana;
        playerStats.strength += leatherBelt.strength;
        playerStats.defense += leatherBelt.defense;
        playerStats.endurance += leatherBelt.endurance;
        playerStats.intelligence += leatherBelt.intelligence;
        shopStats.numLeft13--;
        playerStats.gold -= leatherBelt.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(leatherBelt);
        $("<p>You bought " + leatherBelt.name + " for " + leatherBelt.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < leatherBelt.cost) {
        $("<p>Sorry, you do not have enough money for the " + leatherBelt.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + leatherBelt.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy14() {
    itemBought.push(leatherLeg);
    if (playerStats.gold >= leatherLeg.cost && shopStats.numLeft14 > 0) {
        unequip();
        playerInfo.legs = leatherLeg.name;
        playerStats.health += leatherLeg.health;
        playerStats.mana += leatherLeg.mana;
        playerStats.strength += leatherLeg.strength;
        playerStats.defense += leatherLeg.defense;
        playerStats.endurance += leatherLeg.endurance;
        playerStats.intelligence += leatherLeg.intelligence;
        shopStats.numLeft14--;
        playerStats.gold -= leatherLeg.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(leatherLeg);
        $("<p>You bought " + leatherLeg.name + " for " + leatherLeg.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < leatherLeg.cost) {
        $("<p>Sorry, you do not have enough money for the " + leatherLeg.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + leatherLeg.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy15() {
    itemBought.push(leatherFoot);
    if (playerStats.gold >= leatherFoot.cost && shopStats.numLeft15 > 0) {
        unequip();
        playerInfo.feet = leatherFoot.name;
        playerStats.health += leatherFoot.health;
        playerStats.mana += leatherFoot.mana;
        playerStats.strength += leatherFoot.strength;
        playerStats.defense += leatherFoot.defense;
        playerStats.endurance += leatherFoot.endurance;
        playerStats.intelligence += leatherFoot.intelligence;
        shopStats.numLeft15--;
        playerStats.gold -= leatherFoot.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(leatherFoot);
        $("<p>You bought " + leatherFoot.name + " for " + leatherFoot.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < leatherFoot.cost) {
        $("<p>Sorry, you do not have enough money for the " + leatherFoot.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + leatherFoot.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy16() {
    itemBought.push(ironBow);
    if (playerStats.gold >= ironBow.cost && shopStats.numLeft16 > 0) {
        unequip();
        playerInfo.leftHand = ironBow.name;
        playerStats.health += ironBow.health;
        playerStats.mana += ironBow.mana;
        playerStats.strength += ironBow.strength;
        playerStats.defense += ironBow.defense;
        playerStats.endurance += ironBow.endurance;
        playerStats.intelligence += ironBow.intelligence;
        shopStats.numLeft16--;
        playerStats.gold -= ironBow.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(ironBow);
        $("<p>You bought " + ironBow.name + " for " + ironBow.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < ironBow.cost) {
        $("<p>Sorry, you do not have enough money for the " + ironBow.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + ironBow.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy17() {
    if (playerStats.gold >= ironArrows.cost && shopStats.numLeft17 > 0) {
        if (boughtArrows == 0) {
            itemBought.push(ironArrows);
            unequip();
            playerInfo.rightHand = ironArrows.name;
            playerStats.health += ironArrows.health;
            playerStats.mana += ironArrows.mana;
            playerStats.strength += ironArrows.strength;
            playerStats.defense += ironArrows.defense;
            playerStats.endurance += ironArrows.endurance;
            playerStats.intelligence += ironArrows.intelligence;
            playerStats.numArrows += ironArrows.numArrows;
            shopStats.numLeft17--;
            playerStats.gold -= ironArrows.cost;
            shopStats.shopGold = playerStats.gold;
            equippedItems.push(ironArrows);
            boughtArrows = 1;
            $("<p>You bought " + ironArrows.name + " for " + ironArrows.cost + " gold.</p>").insertAfter("#shop-placeholder");
            return;
        }
        else if (boughtArrows == 1) {
            playerStats.numArrows += ironArrows.numArrows;
            shopStats.numLeft17--;
            playerStats.gold -= ironArrows.cost;
            shopStats.shopGold = playerStats.gold;
            $("<p>You bought " + ironArrows.name + " for " + ironArrows.cost + " gold.</p>").insertAfter("#shop-placeholder");
            return;
        }
    }
    if (playerStats.gold < ironArrows.cost) {
        $("<p>Sorry, you do not have enough money for the " + ironArrows.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + ironArrows.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy18() {
    if (playerStats.gold >= mageHelmet.cost && shopStats.numLeft18 > 0) {
        itemBought.push(mageHelmet);
        unequip();
        playerInfo.head = mageHelmet.name;
        playerStats.health += mageHelmet.health;
        playerStats.mana += mageHelmet.mana;
        playerStats.strength += mageHelmet.strength;
        playerStats.defense += mageHelmet.defense;
        playerStats.endurance += mageHelmet.endurance;
        playerStats.intelligence += mageHelmet.intelligence;
        shopStats.numLeft18--;
        playerStats.gold -= mageHelmet.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(mageHelmet);
        $("<p>You bought " + mageHelmet.name + " for " + mageHelmet.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < mageHelmet.cost) {
        $("<p>Sorry, you do not have enough money for the " + mageHelmet.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + mageHelmet.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy19() {
    if (playerStats.gold >= mageArmor.cost && shopStats.numLeft19 > 0) {
        itemBought.push(mageArmor);
        unequip();
        playerInfo.armor = mageArmor.name;
        playerStats.health += mageArmor.health;
        playerStats.mana += mageArmor.mana;
        playerStats.strength += mageArmor.strength;
        playerStats.defense += mageArmor.defense;
        playerStats.endurance += mageArmor.endurance;
        playerStats.intelligence += mageArmor.intelligence;
        shopStats.numLeft19--;
        playerStats.gold -= mageArmor.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(mageArmor);
        $("<p>You bought " + mageArmor.name + " for " + mageArmor.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < mageArmor.cost) {
        $("<p>Sorry, you do not have enough money for the " + mageArmor.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + mageArmor.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy20() {
    if (playerStats.gold >= mageHand.cost && shopStats.numLeft20 > 0) {
        itemBought.push(mageHand);
        unequip();
        playerInfo.hands = mageHand.name;
        playerStats.health += mageHand.health;
        playerStats.mana += mageHand.mana;
        playerStats.strength += mageHand.strength;
        playerStats.defense += mageHand.defense;
        playerStats.endurance += mageHand.endurance;
        playerStats.intelligence += mageHand.intelligence;
        shopStats.numLeft20--;
        playerStats.gold -= mageHand.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(mageHand);
        $("<p>You bought " + mageHand.name + " for " + mageHand.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < mageHand.cost) {
        $("<p>Sorry, you do not have enough money for the " + mageHand.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + mageHand.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy21() {
    if (playerStats.gold >= mageBelt.cost && shopStats.numLeft21 > 0) {
        itemBought.push(mageBelt);
        unequip();
        playerInfo.waist = mageBelt.name;
        playerStats.health += mageBelt.health;
        playerStats.mana += mageBelt.mana;
        playerStats.strength += mageBelt.strength;
        playerStats.defense += mageBelt.defense;
        playerStats.endurance += mageBelt.endurance;
        playerStats.intelligence += mageBelt.intelligence;
        shopStats.numLeft21--;
        playerStats.gold -= mageBelt.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(mageBelt);
        $("<p>You bought " + mageBelt.name + " for " + mageBelt.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < mageBelt.cost) {
        $("<p>Sorry, you do not have enough money for the " + mageBelt.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + mageBelt.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy22() {
    if (playerStats.gold >= mageLeg.cost && shopStats.numLeft22 > 0) {
        itemBought.push(mageLeg);
        unequip();
        playerInfo.legs = mageLeg.name;
        playerStats.health += mageLeg.health;
        playerStats.mana += mageLeg.mana;
        playerStats.strength += mageLeg.strength;
        playerStats.defense += mageLeg.defense;
        playerStats.endurance += mageLeg.endurance;
        playerStats.intelligence += mageLeg.intelligence;
        shopStats.numLeft22--;
        playerStats.gold -= mageLeg.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(mageLeg);
        $("<p>You bought " + mageLeg.name + " for " + mageLeg.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < mageLeg.cost) {
        $("<p>Sorry, you do not have enough money for the " + mageLeg.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + mageLeg.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy23() {
    if (playerStats.gold >= mageFoot.cost && shopStats.numLeft23 > 0) {
        itemBought.push(mageFoot);
        unequip();
        playerInfo.feet = mageFoot.name;
        playerStats.health += mageFoot.health;
        playerStats.mana += mageFoot.mana;
        playerStats.strength += mageFoot.strength;
        playerStats.defense += mageFoot.defense;
        playerStats.endurance += mageFoot.endurance;
        playerStats.intelligence += mageFoot.intelligence;
        shopStats.numLeft23--;
        playerStats.gold -= mageFoot.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(mageFoot);
        $("<p>You bought " + mageFoot.name + " for " + mageFoot.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < mageFoot.cost) {
        $("<p>Sorry, you do not have enough money for the " + mageFoot.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + mageFoot.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy24() {
    if (playerStats.amountOf24 < 1) {
        $("<p>You have bought all of the " + mageWeapon.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < mageWeapon.cost) {
        $("<p>Sorry, you do not have enough money for the " + mageWeapon.name + ".</p>").insertAfter("#shop-placeholder");
        return;
    }
    else if (playerStats.gold >= mageWeapon.cost && shopStats.numLeft24 > 0) {
        switch (playerInfo.rightHand) {
            case nonStaff.name:
                itemBought.push(mageWeapon);
                unequip();
                playerInfo.leftHand = mageWeapon.name;
                playerInfo.rightHand = mageWeapon.name;
                playerStats.health += mageWeapon.health;
                playerStats.mana += mageWeapon.mana;
                playerStats.strength += mageWeapon.strength;
                playerStats.defense += mageWeapon.defense;
                playerStats.endurance += mageWeapon.endurance;
                playerStats.intelligence += mageWeapon.intelligence;
                shopStats.numLeft24--;
                playerStats.gold -= mageWeapon.cost;
                shopStats.shopGold = playerStats.gold;
                equippedItems.push(mageWeapon);
                $("<p>You bought " + mageWeapon.name + " for " + mageWeapon.cost + " gold.</p>").insertAfter("#shop-placeholder");
                break;
            case mageWeapon1.name:
                $("<p>The " + mageWeapon1.name + " is better than the " + mageWeapon.name + ", so my integrity will not allow you to buy that item.</p>").insertAfter("#shop-placeholder");
                break;
            case mageWeapon2.name:
                $("<p>The " + mageWeapon2.name + " is better than the " + mageWeapon.name + ", so my integrity will not allow you to buy that item.</p>").insertAfter("#shop-placeholder");
                break;
        }
        return;
    }
}
function buy25() {
    if (playerStats.amountOf25 < 1) {
        $("<p>You have bought all of the " + mageWeapon1.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < mageWeapon1.cost) {
        $("<p>Sorry, you do not have enough money for the " + mageWeapon1.name + ".</p>").insertAfter("#shop-placeholder");
        return;
    }
    else if (playerStats.gold >= mageWeapon1.cost && shopStats.numLeft25 > 0) {
        switch (playerInfo.rightHand) {
            case nonStaff.name:
                itemBought.push(mageWeapon1);
                unequip();
                playerInfo.leftHand = mageWeapon1.name;
                playerInfo.rightHand = mageWeapon1.name;
                playerStats.health += mageWeapon1.health;
                playerStats.mana += mageWeapon1.mana;
                playerStats.strength += mageWeapon1.strength;
                playerStats.defense += mageWeapon1.defense;
                playerStats.endurance += mageWeapon1.endurance;
                playerStats.intelligence += mageWeapon1.intelligence;
                shopStats.numLeft25--;
                playerStats.gold -= mageWeapon1.cost;
                shopStats.shopGold = playerStats.gold;
                equippedItems.push(mageWeapon1);
                $("<p>You bought " + mageWeapon1.name + " for " + mageWeapon1.cost + " gold.</p>").insertAfter("#shop-placeholder");
                break;
            case mageWeapon.name:
                itemBought.push(mageWeapon1);
                unequip();
                playerInfo.leftHand = mageWeapon1.name;
                playerInfo.rightHand = mageWeapon1.name;
                playerStats.health += mageWeapon1.health;
                playerStats.mana += mageWeapon1.mana;
                playerStats.strength += mageWeapon1.strength;
                playerStats.defense += mageWeapon1.defense;
                playerStats.endurance += mageWeapon1.endurance;
                playerStats.intelligence += mageWeapon1.intelligence;
                shopStats.numLeft25--;
                playerStats.gold -= mageWeapon1.cost;
                shopStats.shopGold = playerStats.gold;
                equippedItems.push(mageWeapon1);
                $("<p>You bought " + mageWeapon1.name + " for " + mageWeapon1.cost + " gold.</p>").insertAfter("#shop-placeholder");
                break;
            case mageWeapon2.name:
                $("<p>The " + mageWeapon2.name + " is better than the " + mageWeapon1.name + ", so my integrity will not allow you to buy that item.</p>").insertAfter("#shop-placeholder");
                break;
        }
        return;
    }
}
function buy26() {
    if (playerStats.amountOf26 < 1) {
        $("<p>You have bought all of the " + mageWeapon2.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < mageWeapon2.cost) {
        $("<p>Sorry, you do not have enough money for the " + mageWeapon2.name + ".</p>").insertAfter("#shop-placeholder");
        return;
    }
    else if (playerStats.gold >= mageWeapon2.cost && shopStats.numLeft26 > 0) {
        switch (playerInfo.rightHand) {
            case nonStaff.name:
                itemBought.push(mageWeapon2);
                unequip();
                playerInfo.leftHand = mageWeapon2.name;
                playerInfo.rightHand = mageWeapon2.name;
                playerStats.health += mageWeapon2.health;
                playerStats.mana += mageWeapon2.mana;
                playerStats.strength += mageWeapon2.strength;
                playerStats.defense += mageWeapon2.defense;
                playerStats.endurance += mageWeapon2.endurance;
                playerStats.intelligence += mageWeapon2.intelligence;
                shopStats.numLeft26--;
                playerStats.gold -= mageWeapon2.cost;
                shopStats.shopGold = playerStats.gold;
                equippedItems.push(mageWeapon2);
                $("<p>You bought " + mageWeapon2.name + " for " + mageWeapon2.cost + " gold.</p>").insertAfter("#shop-placeholder");
                break;
            case mageWeapon.name:
                itemBought.push(mageWeapon2);
                unequip();
                playerInfo.leftHand = mageWeapon2.name;
                playerInfo.rightHand = mageWeapon2.name;
                playerStats.health += mageWeapon2.health;
                playerStats.mana += mageWeapon2.mana;
                playerStats.strength += mageWeapon2.strength;
                playerStats.defense += mageWeapon2.defense;
                playerStats.endurance += mageWeapon2.endurance;
                playerStats.intelligence += mageWeapon2.intelligence;
                shopStats.numLeft26--;
                playerStats.gold -= mageWeapon2.cost;
                shopStats.shopGold = playerStats.gold;
                equippedItems.push(mageWeapon2);
                $("<p>You bought " + mageWeapon2.name + " for " + mageWeapon2.cost + " gold.</p>").insertAfter("#shop-placeholder");
                break;
            case mageWeapon1.name:
                itemBought.push(mageWeapon2);
                unequip();
                playerInfo.leftHand = mageWeapon2.name;
                playerInfo.rightHand = mageWeapon2.name;
                playerStats.health += mageWeapon2.health;
                playerStats.mana += mageWeapon2.mana;
                playerStats.strength += mageWeapon2.strength;
                playerStats.defense += mageWeapon2.defense;
                playerStats.endurance += mageWeapon2.endurance;
                playerStats.intelligence += mageWeapon2.intelligence;
                shopStats.numLeft26--;
                playerStats.gold -= mageWeapon2.cost;
                shopStats.shopGold = playerStats.gold;
                equippedItems.push(mageWeapon2);
                $("<p>You bought " + mageWeapon2.name + " for " + mageWeapon2.cost + " gold.</p>").insertAfter("#shop-placeholder");
                break;
        }
        return;
    }
}
function buy27() {
    if (playerStats.gold >= healthPotion.cost && shopStats.numLeft27 > 0) {
        itemBought.push(healthPotion);
        playerStats.numHealthPotions++;
        shopStats.numLeft27--;
        playerStats.gold -= healthPotion.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(healthPotion);
        itemBought.splice(healthPotion,1);
        $("<p>You bought " + healthPotion.name + " for " + healthPotion.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < healthPotion.cost) {
        $("<p>Sorry, you do not have enough money for the " + healthPotion.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + healthPotion.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy28() {
    if (playerStats.gold >= staminaPotion.cost && shopStats.numLeft28 > 0) {
        itemBought.push(staminaPotion);
        playerStats.numStaminaPotions++;
        shopStats.numLeft28--;
        playerStats.gold -= staminaPotion.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(staminaPotion);
        itemBought.splice(staminaPotion,1);
        $("<p>You bought " + staminaPotion.name + " for " + staminaPotion.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < staminaPotion.cost) {
        $("<p>Sorry, you do not have enough money for the " + staminaPotion.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + staminaPotion.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function buy29() {
    if (playerStats.gold >= manaPotion.cost && shopStats.numLeft29 > 0) {
        itemBought.push(manaPotion);
        playerStats.numManaPotions++;
        shopStats.numLeft29--;
        playerStats.gold -= manaPotion.cost;
        shopStats.shopGold = playerStats.gold;
        equippedItems.push(manaPotion);
        itemBought.splice(manaPotion,1);
        $("<p>You bought " + manaPotion.name + " for " + manaPotion.cost + " gold.</p>").insertAfter("#shop-placeholder");
        return;
    }
    if (playerStats.gold < manaPotion.cost) {
        $("<p>Sorry, you do not have enough money for the " + manaPotion.name + ".</p>").insertAfter("#shop-placeholder");
    }
    else {
        $("<p>You have bought all of the " + manaPotion.name + " we have right now.</p>").insertAfter("#shop-placeholder");
        return;
    }
    return;
}
function sale() {

}
function unequip() {
    for (i=0; i < itemBought.length; i++) {
        switch (itemBought[i]) {
            case ironHelmet:
                itemBought.splice(ironHelmet,1);
                playerStats.health -= dilapidatedHelmet.health;
                playerStats.mana -= dilapidatedHelmet.mana;
                playerStats.strength -= dilapidatedHelmet.strength;
                playerStats.defense -= dilapidatedHelmet.defense;
                playerStats.endurance -= dilapidatedHelmet.endurance;
                playerStats.intelligence -= dilapidatedHelmet.intelligence;
                equippedItems.splice(dilapidatedHelmet,1);
                break;
            case ironArmor:
                itemBought.splice(ironArmor,1);
                playerStats.health -= dilapidatedArmor.health;
                playerStats.mana -= dilapidatedArmor.mana;
                playerStats.strength -= dilapidatedArmor.strength;
                playerStats.defense -= dilapidatedArmor.defense;
                playerStats.endurance -= dilapidatedArmor.endurance;
                playerStats.intelligence -= dilapidatedArmor.intelligence;
                equippedItems.splice(dilapidatedArmor,1);
                break;
            case ironHand:
                itemBought.splice(ironHand,1);
                playerStats.health -= dilapidatedHand.health;
                playerStats.mana -= dilapidatedHand.mana;
                playerStats.strength -= dilapidatedHand.strength;
                playerStats.defense -= dilapidatedHand.defense;
                playerStats.endurance -= dilapidatedHand.endurance;
                playerStats.intelligence -= dilapidatedHand.intelligence;
                equippedItems.splice(dilapidatedHand,1);
                break;
            case ironBelt:
                itemBought.splice(ironBelt,1);
                playerStats.health -= dilapidatedBelt.health;
                playerStats.mana -= dilapidatedBelt.mana;
                playerStats.strength -= dilapidatedBelt.strength;
                playerStats.defense -= dilapidatedBelt.defense;
                playerStats.endurance -= dilapidatedBelt.endurance;
                playerStats.intelligence -= dilapidatedBelt.intelligence;
                equippedItems.splice(dilapidatedBelt,1);
                break;
            case ironLeg:
                itemBought.splice(ironLeg,1);
                playerStats.health -= dilapidatedLeg.health;
                playerStats.mana -= dilapidatedLeg.mana;
                playerStats.strength -= dilapidatedLeg.strength;
                playerStats.defense -= dilapidatedLeg.defense;
                playerStats.endurance -= dilapidatedLeg.endurance;
                playerStats.intelligence -= dilapidatedLeg.intelligence;
                equippedItems.splice(dilapidatedLeg,1);
                break;
            case ironFoot:
                itemBought.splice(ironFoot,1);
                playerStats.health -= dilapidatedFoot.health;
                playerStats.mana -= dilapidatedFoot.mana;
                playerStats.strength -= dilapidatedFoot.strength;
                playerStats.defense -= dilapidatedFoot.defense;
                playerStats.endurance -= dilapidatedFoot.endurance;
                playerStats.intelligence -= dilapidatedFoot.intelligence;
                equippedItems.splice(dilapidatedFoot,1);
                break;
            case ironSword:
                itemBought.splice(ironSword,1);
                playerStats.health -= dilapidatedSword.health;
                playerStats.mana -= dilapidatedSword.mana;
                playerStats.strength -= dilapidatedSword.strength;
                playerStats.defense -= dilapidatedSword.defense;
                playerStats.endurance -= dilapidatedSword.endurance;
                playerStats.intelligence -= dilapidatedSword.intelligence;
                equippedItems.splice(dilapidatedSword,1);
                break;
            case ironShield:
                itemBought.splice(ironShield,1);
                playerStats.health -= dilapidatedShield.health;
                playerStats.mana -= dilapidatedShield.mana;
                playerStats.strength -= dilapidatedShield.strength;
                playerStats.defense -= dilapidatedShield.defense;
                playerStats.endurance -= dilapidatedShield.endurance;
                playerStats.intelligence -= dilapidatedShield.intelligence;
                equippedItems.splice(dilapidatedShield,1);
                break;
            case leatherHelmet:
                itemBought.splice(leatherHelmet,1);
                playerStats.health -= poorHelmet.health;
                playerStats.mana -= poorHelmet.mana;
                playerStats.strength -= poorHelmet.strength;
                playerStats.defense -= poorHelmet.defense;
                playerStats.endurance -= poorHelmet.endurance;
                playerStats.intelligence -= poorHelmet.intelligence;
                equippedItems.splice(poorHelmet,1);
                break;
            case leatherArmor:
                itemBought.splice(leatherArmor,1);
                playerStats.health -= poorArmor.health;
                playerStats.mana -= poorArmor.mana;
                playerStats.strength -= poorArmor.strength;
                playerStats.defense -= poorArmor.defense;
                playerStats.endurance -= poorArmor.endurance;
                playerStats.intelligence -= poorArmor.intelligence;
                equippedItems.splice(poorArmor,1);
                break;
            case leatherHand:
                itemBought.splice(leatherHand,1);
                playerStats.health -= poorHand.health;
                playerStats.mana -= poorHand.mana;
                playerStats.strength -= poorHand.strength;
                playerStats.defense -= poorHand.defense;
                playerStats.endurance -= poorHand.endurance;
                playerStats.intelligence -= poorHand.intelligence;
                equippedItems.splice(poorHand,1);
                break;
            case leatherBelt:
                itemBought.splice(leatherBelt,1);
                playerStats.health -= poorBelt.health;
                playerStats.mana -= poorBelt.mana;
                playerStats.strength -= poorBelt.strength;
                playerStats.defense -= poorBelt.defense;
                playerStats.endurance -= poorBelt.endurance;
                playerStats.intelligence -= poorBelt.intelligence;
                equippedItems.splice(poorBelt,1);
                break;
            case leatherLeg:
                itemBought.splice(leatherLeg,1);
                playerStats.health -= poorLeg.health;
                playerStats.mana -= poorLeg.mana;
                playerStats.strength -= poorLeg.strength;
                playerStats.defense -= poorLeg.defense;
                playerStats.endurance -= poorLeg.endurance;
                playerStats.intelligence -= poorLeg.intelligence;
                equippedItems.splice(poorLeg,1);
                break;
            case leatherFoot:
                itemBought.splice(leatherFoot,1);
                playerStats.health -= poorFoot.health;
                playerStats.mana -= poorFoot.mana;
                playerStats.strength -= poorFoot.strength;
                playerStats.defense -= poorFoot.defense;
                playerStats.endurance -= poorFoot.endurance;
                playerStats.intelligence -= poorFoot.intelligence;
                equippedItems.splice(poorFoot,1);
                break;
            case ironBow:
                itemBought.splice(ironBow,1);
                playerStats.health -= poorBow.health;
                playerStats.mana -= poorBow.mana;
                playerStats.strength -= poorBow.strength;
                playerStats.defense -= poorBow.defense;
                playerStats.endurance -= poorBow.endurance;
                playerStats.intelligence -= poorBow.intelligence;
                equippedItems.splice(poorBow,1);
                break;
            case ironArrows:
                itemBought.splice(ironArrows,1);
                playerStats.health -= poorArrows.health;
                playerStats.mana -= poorArrows.mana;
                playerStats.strength -= poorArrows.strength;
                playerStats.defense -= poorArrows.defense;
                playerStats.endurance -= poorArrows.endurance;
                playerStats.intelligence -= poorArrows.intelligence;
                playerStats.numArrows = 0;
                equippedItems.splice(poorArrows,1);
                break;
            case mageHelmet:
                itemBought.splice(mageHelmet,1);
                playerStats.health -= nonHelmet.health;
                playerStats.mana -= nonHelmet.mana;
                playerStats.strength -= nonHelmet.strength;
                playerStats.defense -= nonHelmet.defense;
                playerStats.endurance -= nonHelmet.endurance;
                playerStats.intelligence -= nonHelmet.intelligence;
                equippedItems.splice(nonHelmet,1);
                break;
            case mageArmor:
                itemBought.splice(mageArmor,1);
                playerStats.health -= nonArmor.health;
                playerStats.mana -= nonArmor.mana;
                playerStats.strength -= nonArmor.strength;
                playerStats.defense -= nonArmor.defense;
                playerStats.endurance -= nonArmor.endurance;
                playerStats.intelligence -= nonArmor.intelligence;
                equippedItems.splice(nonArmor,1);
                break;
            case mageHand:
                itemBought.splice(mageHand,1);
                playerStats.health -= nonHand.health;
                playerStats.mana -= nonHand.mana;
                playerStats.strength -= nonHand.strength;
                playerStats.defense -= nonHand.defense;
                playerStats.endurance -= nonHand.endurance;
                playerStats.intelligence -= nonHand.intelligence;
                equippedItems.splice(nonHand,1);
                break;
            case mageBelt:
                itemBought.splice(mageBelt,1);
                playerStats.health -= nonBelt.health;
                playerStats.mana -= nonBelt.mana;
                playerStats.strength -= nonBelt.strength;
                playerStats.defense -= nonBelt.defense;
                playerStats.endurance -= nonBelt.endurance;
                playerStats.intelligence -= nonBelt.intelligence;
                equippedItems.splice(nonBelt,1);
                break;
            case mageLeg:
                itemBought.splice(mageLeg,1);
                playerStats.health -= nonLeg.health;
                playerStats.mana -= nonLeg.mana;
                playerStats.strength -= nonLeg.strength;
                playerStats.defense -= nonLeg.defense;
                playerStats.endurance -= nonLeg.endurance;
                playerStats.intelligence -= nonLeg.intelligence;
                equippedItems.splice(nonLeg,1);
                break;
            case mageFoot:
                itemBought.splice(mageFoot,1);
                playerStats.health -= nonFoot.health;
                playerStats.mana -= nonFoot.mana;
                playerStats.strength -= nonFoot.strength;
                playerStats.defense -= nonFoot.defense;
                playerStats.endurance -= nonFoot.endurance;
                playerStats.intelligence -= nonFoot.intelligence;
                equippedItems.splice(nonFoot,1);
                break;
            case mageWeapon:
                switch (equippedItems[i]) {
                    case nonStaff:
                        itemBought.splice(mageWeapon,1);
                        playerStats.health -= nonStaff.health;
                        playerStats.mana -= nonStaff.mana;
                        playerStats.strength -= nonStaff.strength;
                        playerStats.defense -= nonStaff.defense;
                        playerStats.endurance -= nonStaff.endurance;
                        playerStats.intelligence -= nonStaff.intelligence;
                        equippedItems.splice(nonStaff,1);
                        break;
                }
                break;
            case mageWeapon1:
                switch (equippedItems[i]) {
                    case nonStaff:
                        itemBought.splice(mageWeapon1,1);
                        playerStats.health -= nonStaff.health;
                        playerStats.mana -= nonStaff.mana;
                        playerStats.strength -= nonStaff.strength;
                        playerStats.defense -= nonStaff.defense;
                        playerStats.endurance -= nonStaff.endurance;
                        playerStats.intelligence -= nonStaff.intelligence;
                        equippedItems.splice(nonStaff,1);
                        break;
                    case mageWeapon:
                        itemBought.splice(mageWeapon1,1);
                        playerStats.health -= mageWeapon.health;
                        playerStats.mana -= mageWeapon.mana;
                        playerStats.strength -= mageWeapon.strength;
                        playerStats.defense -= mageWeapon.defense;
                        playerStats.endurance -= mageWeapon.endurance;
                        playerStats.intelligence -= mageWeapon.intelligence;
                        equippedItems.splice(mageWeapon,1);
                        break;
                }
                break;
            case mageWeapon2:
                switch (equippedItems[i]) {
                    case nonStaff:
                        itemBought.splice(mageWeapon2,1);
                        playerStats.health -= nonStaff.health;
                        playerStats.mana -= nonStaff.mana;
                        playerStats.strength -= nonStaff.strength;
                        playerStats.defense -= nonStaff.defense;
                        playerStats.endurance -= nonStaff.endurance;
                        playerStats.intelligence -= nonStaff.intelligence;
                        equippedItems.splice(nonStaff,1);
                        break;
                    case mageWeapon:
                        itemBought.splice(mageWeapon2,1);
                        playerStats.health -= mageWeapon.health;
                        playerStats.mana -= mageWeapon.mana;
                        playerStats.strength -= mageWeapon.strength;
                        playerStats.defense -= mageWeapon.defense;
                        playerStats.endurance -= mageWeapon.endurance;
                        playerStats.intelligence -= mageWeapon.intelligence;
                        equippedItems.splice(mageWeapon,1);
                        break;
                    case mageWeapon1:
                        itemBought.splice(mageWeapon2,1);
                        playerStats.health -= mageWeapon1.health;
                        playerStats.mana -= mageWeapon1.mana;
                        playerStats.strength -= mageWeapon1.strength;
                        playerStats.defense -= mageWeapon1.defense;
                        playerStats.endurance -= mageWeapon1.endurance;
                        playerStats.intelligence -= mageWeapon1.intelligence;
                        equippedItems.splice(mageWeapon1,1);
                        break;
                }
                break;
            case comfortableBoxers:
                itemBought.splice(comfortableBoxers,1);
                break;
            case comfortablePanties:
                itemBought.splice(comfortablePanties,1);
                break;
        }
        return;
    }
    return;
}