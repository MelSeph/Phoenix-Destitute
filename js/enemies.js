// This is where the enemies will be built out.
function NemesisInfo(name) {
    this.name = name;
}
function NemesisStats(health, stamina, mana, defense, strength, rawhide, silk, core, gold, experience, battleHealth, battleStamina, battleMana, maxHealth, maxStamina, maxMana) {
    this.health = health;
    this.stamina = stamina;
    this.mana = mana;
    this.defense = defense;
    this.strength = strength;
    this.rawhide = rawhide;
    this.silk = silk;
    this.core = core;
    this.gold = gold;
    this.experience = experience;
    this.battleHealth = battleHealth;
    this.battleStamina = battleStamina;
    this.battleMana = battleMana;
    this.battleHealth = maxHealth;
    this.battleStamina = maxStamina;
    this.battleMana = maxMana;
}

let enemyInfo = new NemesisInfo ('None');
let enemyStats = new NemesisStats (0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

let impName = new NemesisInfo ('Imp');
let impStats = new NemesisStats (10,5,10,2,5,5,1,1,300,5,10,5,10,10,5,10);
let banditName = new NemesisInfo ('Bandit');
let banditStats = new NemesisStats (25,20,0,5,10,5,1,2,300,30,25,20,0,25,20,0);
let banditBossName = new NemesisInfo ('Bandit Boss');
let banditBossStats = new NemesisStats (50,50,0,15,30,999999,99999,9999,999999999,99999999,50,50,0,50,50,0);

let endoraEnemyArray = [
    'Imp', 'Bandit', 'Bandit Boss'
]

function selectEnemy() { //Selects an enemy from the array.
    if (mainArea == 'Endora') {
        min = Math.ceil(0);
        max = Math.floor(endoraEnemyArray.length);
        return endoraEnemyArray[Math.floor(Math.random() * (max - min)) + min];
    }
}

function getEndoraEnemy() { //Gives the enemy their stats.
    switch (selectEnemy()) {
        case "Imp":
            enemyInfo.name = impName.name;
            enemyStats.battleHealth = impStats.battleHealth;
            enemyStats.battleStamina = impStats.battleStamina;
            enemyStats.battleMana = impStats.battleMana;
            enemyStats.maxHealth = impStats.health;
            enemyStats.maxStamina = impStats.stamina;
            enemyStats.maxMana = impStats.mana;
            enemyStats.defense = impStats.defense;
            enemyStats.strength = impStats.strength;
            enemyStats.gold = impStats.gold;
            enemyStats.experience = impStats.experience;
            enemyStats.rawhide = impStats.rawhide;
            enemyStats.silk = impStats.silk;
            enemyStats.core = impStats.core;
            //Enemy.SpecialSkills = ["Immolation"];
            break;
        case "Bandit":
            enemyInfo.name = banditName.name;
            enemyStats.battleHealth = banditStats.battleHealth;
            enemyStats.battleStamina = banditStats.battleStamina;
            enemyStats.battleMana = banditStats.battleMana;
            enemyStats.maxHealth = banditStats.health;
            enemyStats.maxStamina = banditStats.stamina;
            enemyStats.maxMana = banditStats.mana;
            enemyStats.defense = banditStats.defense;
            enemyStats.strength = banditStats.strength;
            enemyStats.gold = banditStats.gold;
            enemyStats.experience = banditStats.experience;
            enemyStats.rawhide = banditStats.rawhide;
            enemyStats.silk = banditStats.silk;
            enemyStats.core = banditStats.core;
            // Enemy.SpecialSkills = [];
            break;
        case "Bandit Boss":
            enemyInfo.name = banditBossName.name;
            enemyStats.battleHealth = banditBossStats.battleHealth;
            enemyStats.battleStamina = banditBossStats.battleStamina;
            enemyStats.battleMana = banditBossStats.battleMana;
            enemyStats.maxHealth = banditBossStats.health;
            enemyStats.maxStamina = banditBossStats.stamina;
            enemyStats.maxMana = banditBossStats.mana;
            enemyStats.defense = banditBossStats.defense;
            enemyStats.strength = banditBossStats.strength;
            enemyStats.gold = banditBossStats.gold;
            enemyStats.experience = banditBossStats.experience;
            enemyStats.rawhide = banditBossStats.rawhide;
            enemyStats.silk = banditBossStats.silk;
            enemyStats.core = banditBossStats.core;
            // Enemy.SpecialSkills = [];
            break;
    }
}