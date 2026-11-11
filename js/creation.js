//This is the area to showcase the craftable items

let itemCreated = [];

function createdEquip() {
    for(i=0; i < equippedItems.length; i++) {
        switch(equippedItems[i].name) {
            case "Right Hand":
                itemCreated.splice(craftedWarriorsRespite,1);
                playerInfo.rightHand = craftedWarriorsRespite.name;
                playerStats.health -= dilapidatedSword.health;
                playerStats.mana -= dilapidatedSword.mana;
                playerStats.strength -= dilapidatedSword.strength;
                playerStats.defense -= dilapidatedSword.defense;
                playerStats.endurance -= dilapidatedSword.endurance;
                playerStats.intelligence -= dilapidatedSword.intelligence;
                playerStats.health += craftedWarriorsRespite.health;
                playerStats.mana += craftedWarriorsRespite.mana;
                playerStats.strength += craftedWarriorsRespite.strength;
                playerStats.defense += craftedWarriorsRespite.defense;
                playerStats.endurance += craftedWarriorsRespite.endurance;
                playerStats.intelligence += craftedWarriorsRespite.intelligence;
                equippedItems.splice(craftedWarriorsRespite,1);
                break;
            case dilapidatedSword.name:
                itemCreated.splice(craftedWarriorsRespite,1);
                playerInfo.rightHand = craftedWarriorsRespite.name;
                playerStats.health -= dilapidatedSword.health;
                playerStats.mana -= dilapidatedSword.mana;
                playerStats.strength -= dilapidatedSword.strength;
                playerStats.defense -= dilapidatedSword.defense;
                playerStats.endurance -= dilapidatedSword.endurance;
                playerStats.intelligence -= dilapidatedSword.intelligence;
                playerStats.health += craftedWarriorsRespite.health;
                playerStats.mana += craftedWarriorsRespite.mana;
                playerStats.strength += craftedWarriorsRespite.strength;
                playerStats.defense += craftedWarriorsRespite.defense;
                playerStats.endurance += craftedWarriorsRespite.endurance;
                playerStats.intelligence += craftedWarriorsRespite.intelligence;
                equippedItems.splice(craftedWarriorsRespite,1);
                break;
            case ironSword.name:
                itemCreated.splice(craftedWarriorsRespite,1);
                playerInfo.rightHand = craftedWarriorsRespite.name;
                playerStats.health -= ironSword.health;
                playerStats.mana -= ironSword.mana;
                playerStats.strength -= ironSword.strength;
                playerStats.defense -= ironSword.defense;
                playerStats.endurance -= ironSword.endurance;
                playerStats.intelligence -= ironSword.intelligence;
                playerStats.health += craftedWarriorsRespite.health;
                playerStats.mana += craftedWarriorsRespite.mana;
                playerStats.strength += craftedWarriorsRespite.strength;
                playerStats.defense += craftedWarriorsRespite.defense;
                playerStats.endurance += craftedWarriorsRespite.endurance;
                playerStats.intelligence += craftedWarriorsRespite.intelligence;
                equippedItems.splice(craftedWarriorsRespite,1);
                break;
        }
    }
}