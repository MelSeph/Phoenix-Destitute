function HeroInfo (area, gender, name, classType, head, armor, hands, waist, legs, feet, rightHand, leftHand, upperClothes, lowerClothes, legCoverings, friend, shop) {
    // This is the physical location of the player
    this.area = area;
    this.gender = gender;
    this.name = name;
    this.classType = classType;
    // This is the armor equip portion
    this.head = head;
    this.armor = armor;
    this.hands = hands;
    this.waist = waist;
    this.legs = legs;
    this.feet = feet;
    // This is the weapon equip portion
    this.rightHand = rightHand;
    this.leftHand = leftHand;
    // This is the clothing equip portion
    this.upperClothes = upperClothes;
    this.lowerClothes = lowerClothes;
    this.legCoverings = legCoverings;
    // This is just the players forced upon best friend
    this.friend = friend;
    this.shop = shop;
}
function HeroStats (health, mana, strength, defense, endurance, agility, intelligence, gold, numArrows, experience, level, battleHealth, battleStamina, battleMana, maxHealth, maxStamina, maxMana, won, lost, numHealthPotions, numStaminaPotions, numManaPotions) {
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.defense = defense;
    this.endurance = endurance;
    this.agility = agility;
    this.intelligence = intelligence;
    this.gold = gold;
    this.numArrows = numArrows;
    this.experience = experience;
    this.level = level;
    this.battleHealth = battleHealth;
    this.battleStamina = battleStamina;
    this.battleMana = battleMana;
    this.battleHealth = maxHealth;
    this.battleStamina = maxStamina;
    this.battleMana = maxMana;
    this.won = won;
    this.lost = lost;
    this.numHealthPotions = numHealthPotions;
    this.numStaminaPotions = numStaminaPotions;
    this.numManaPotions = numManaPotions;
}
function GenderRole (gender, health, mana, strength, defense, endurance, agility, intelligence, gold, upperClothes, lowerClothes, legCoverings, friend) {
    this.gender = gender;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.defense = defense;
    this.endurance = endurance;
    this.agility = agility;
    this.intelligence = intelligence;
    this.gold = gold;
    this.upperClothes = upperClothes;
    this.lowerClothes = lowerClothes;
    this.legCoverings = legCoverings;
    this.friend = friend;
}
function ClassRole (classType, health, mana, strength, defense, endurance, agility, intelligence, gold, numHealthPotions, numStaminaPotions, numManaPotions) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.defense = defense;
    this.endurance = endurance;
    this.agility = agility;
    this.intelligence = intelligence;
    this.gold = gold;
    this.numHealthPotions = numHealthPotions;
    this.numStaminaPotions = numStaminaPotions;
    this.numManaPotions = numManaPotions;
}

let playerStats = new HeroStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
let playerInfo = new HeroInfo("Pre-Start", "None", "Spirit", "Undetermined One", "Head", "Body", "Fists", "Waist", "Legs", "Feet", "Right Hand", "Left Hand", "Naked", "Naked", "None", "Friendless", "Endora");
let male = new GenderRole ('Male', 2, 1, 2, 2, 2, 1, 1, 2, "Moth-Eaten Shirt", "Tighty-Whiteys", "Hairy Legs", "Duncan");
let female = new GenderRole ('Female', 1, 2, 1, 1, 1, 1, 2, 2, "Barely-There Shirt", "Granny Panties", "Smooth Legs", "Morgana");
let warrior = new ClassRole ('Warrior', 5, 1, 3, 3, 30, 1, 1, 10, 5, 10, 0);
let archer = new ClassRole ('Archer', 3, 1, 2, 2, 25, 5, 1, 25, 5, 15, 0);
let mage = new ClassRole ('Mage', 2, 5, 1, 1, 2, 1, 3, 20, 10, 0, 20);

function gender() {
    switch (input) {
        case 'm':
        case 'male':
            $("<p>A handsome man! What is your name, sir?</p>").insertAfter("#placeholder");
            playerInfo.gender = male.gender;
            playerStats.health += male.health;
            playerStats.mana += male.mana;
            playerStats.strength += male.strength;
            playerStats.defense += male.defense;
            playerStats.endurance += male.endurance;
            playerStats.agility += male.agility;
            playerStats.intelligence += male.intelligence;
            playerStats.gold += male.gold;
            playerInfo.upperClothes = male.upperClothes;
            playerInfo.lowerClothes = male.lowerClothes;
            playerInfo.legCoverings = male.legCoverings;
            playerInfo.friend = male.friend;
            playerInfo.area = "Set Name";
            break;
        case 'f':
        case 'female':
            $("<p>A beautiful lady! What is your name, madam?</p>").insertAfter("#placeholder");
            playerInfo.gender = female.gender;
            playerStats.health += female.health;
            playerStats.mana += female.mana;
            playerStats.strength += female.strength;
            playerStats.defense += female.defense;
            playerStats.endurance += female.endurance;
            playerStats.agility += female.agility;
            playerStats.intelligence += female.intelligence;
            playerStats.gold += female.gold;
            playerInfo.upperClothes = female.upperClothes;
            playerInfo.lowerClothes = female.lowerClothes;
            playerInfo.legCoverings = female.legCoverings;
            playerInfo.friend = female.friend;
            playerInfo.area = "Set Name";
            break;
        default:
            $("<p>Not sure what you mean... in this game you are either male or female.</p>").insertAfter("#placeholder");
            break;
    }
}
function setName() {
    var max_len = 20;
    var min_len = 2;
    for (i = 0; i < playerInfo.name.length; i++) {
        if (playerInfo.name.length < min_len) {
            $("<p>We need to call you something... what is your name? \r\nNo one in 'this world' only has a one letter name.</p>").insertAfter("#placeholder");
            playerInfo.name = "Spirit";
            break;
        }
        else if (playerInfo.name.length > max_len) {
            $("<p>There is a maximum number of " + max_len + " characters, your name is too long, please try again.</p>").insertAfter("#placeholder");
            playerInfo.name = "Spirit";
            break;
        }
        else if (playerInfo.name.length <= max_len && playerInfo.name.length >= min_len) {
            $("<p>What would you like to be, a warrior, an archer, or a mage?</p>").insertAfter("#placeholder");
            playerInfo.name = titleCase(input);
            playerInfo.area = "Set Class";
            break;
        }
    }
}
function setClass() {
    switch (input) {
        case 'w':
        case 'warrior':
            $("<p>Hello " + playerInfo.name + "! So you are a Warrior, Proud and true. This concludes the character creation cycle. Be prepared for an epic adventure!<br />You awake beneath an expansive tree, your hands clasped behind your head. The weather is perfect for sleeping.<br />Would you like to wake up or fall back to sleep? Type sleep or wake up.</p>").insertAfter("#placeholder");
            playerInfo.classType = warrior.classType;
            playerStats.health += warrior.health;
            playerStats.mana += warrior.mana;
            playerStats.strength += warrior.strength;
            playerStats.defense += warrior.defense;
            playerStats.endurance += warrior.endurance;
            playerStats.agility += warrior.agility;
            playerStats.intelligence += warrior.intelligence;
            playerStats.gold += warrior.gold;
            playerStats.numHealthPotions += warrior.numHealthPotions;
            playerStats.numStaminaPotions += warrior.numStaminaPotions;
            playerStats.numManaPotions += warrior.numManaPotions;
            grabEquip();
            playerInfo.area = "Start";
            break;
        case 'a':
        case 'archer':
            $("<p>Hello " + playerInfo.name + "! So you are an Archer, Quiet, Stealthy, and Deadly! This concludes the character creation cycle. Be prepared for an epic adventure!<br />You awake beneath an expansive tree, your hands clasped behind your head. The weather is perfect for sleeping.<br />Would you like to wake up or fall back to sleep? Type sleep or wake up.</p>").insertAfter("#placeholder");
            playerInfo.classType = archer.classType;
            playerStats.health += archer.health;
            playerStats.mana += archer.mana;
            playerStats.strength += archer.strength;
            playerStats.defense += archer.defense;
            playerStats.endurance += archer.endurance;
            playerStats.agility += archer.agility;
            playerStats.intelligence += archer.intelligence;
            playerStats.gold += archer.gold;
            playerStats.numHealthPotions += archer.numHealthPotions;
            playerStats.numStaminaPotions += archer.numStaminaPotions;
            playerStats.numManaPotions += archer.numManaPotions;
            grabEquip();
            playerInfo.area = "Start";
            break;
        case 'm':
        case 'mage':
            $("<p>Hello " + playerInfo.name + "! So you are a Mage, calling upon the forces of the arcane to vanquish their foes! This concludes the character creation cycle. Be prepared for an epic adventure!<br />You awake beneath an expansive tree, your hands clasped behind your head. The weather is perfect for sleeping.<br />Would you like to wake up or fall back to sleep? Type sleep or wake up.</p>").insertAfter("#placeholder");
            playerInfo.classType = mage.classType;
            playerStats.health += mage.health;
            playerStats.mana += mage.mana;
            playerStats.strength += mage.strength;
            playerStats.defense += mage.defense;
            playerStats.endurance += mage.endurance;
            playerStats.agility += mage.agility;
            playerStats.intelligence += mage.intelligence;
            playerStats.gold += mage.gold;
            playerStats.numHealthPotions += mage.numHealthPotions;
            playerStats.numStaminaPotions += mage.numStaminaPotions;
            playerStats.numManaPotions += mage.numManaPotions;
            grabEquip();
            playerInfo.area = "Start";
            break;
        default:
            $("<p>Nope, sorry " + playerInfo.name + ", that's not a valid command. Are you a Warrior, Archer, or a Mage?</p>").insertAfter("#placeholder");
            break;
    }
}