// This is where the elements of battle exist:
let playerTurn = true;
let battleTurn = 'Initial';
let leveled = false;
let newhHealth = 0;
let newhStamina = 0;
let newhMana = 0;
let leveledHealthAmount = 0;
let leveledStaminaAmount = 0;
let leveledManaAmount = 0;
let newPlayerBattleHealth = 0;
let newPlayerBattleStamina = 0;
let newPlayerBattleMana = 0;

function combinedFocus(focus) {
    var focus = (playerStats.mana * playerStats.intelligence)/50;
	return focus;
}

let newEnemy = function() {
    jQuery(function ($, undefined) { var enemy = getEndoraEnemy(); applyChangeE();applyChangeES(); applyChangeEM(); });
}

let battle = function() {
    switch (mainArea) {
        case 'Endora':
            switch (battleTurn) {
                case 'Initial':
                    playerStats.battleHealth = playerStats.health;
                    playerStats.maxHealth = playerStats.health;
                    playerStats.battleStamina = playerStats.endurance;
                    playerStats.maxStamina = playerStats.endurance;
                    playerStats.battleMana = playerStats.mana;
                    playerStats.maxMana = playerStats.mana;
                    applyChange();
                    applyChangeHS();
                    applyChangeHM();
                    newEnemy();
                    break;
                case 'Next':
                    switch (leveled) {
                        case true:
                            newStats();
                            break;
                        case false:
							playerStats.battleHealth = playerStats.battleHealth;
							playerStats.maxHealth = playerStats.health;
							playerStats.battleStamina = playerStats.battleStamina;
							playerStats.maxStamina = playerStats.endurance;
							playerStats.battleMana = playerStats.battleMana;
							playerStats.maxMana = playerStats.mana;
                            applyChange();
                            applyChangeHS();
                            applyChangeHM();
                            break;
                    }
                    break;
                case 'New':
                    newStats();
                    break;
            }
            
    }
}

// Attacks:
function Punch() {
	if (playerStats.battleStamina < 2) {
		$("<p>Your don't have the Stamina to use punch.</p>").insertAfter("#battle-placeholder");
		checkE();
		return;
	}
	if (enemyStats.defense > playerStats.strength) {
		$("<p>Your punch had no effect on the " + enemyInfo.name + ".</p>").insertAfter("#battle-placeholder");
		playerStats.battleStamina -= 2;
		applyChangeHS();
		checkE();
		return;
	}
	else {
		$("<p>You punched the " + enemyInfo.name + " in the face for " + formatNumber(playerStats.strength) + " damage!<br />The enemy defends " + formatNumber(enemyStats.defense) + " damage.</p>").insertAfter("#battle-placeholder");
		enemyStats.battleHealth = Math.round ((enemyStats.battleHealth + enemyStats.defense) - (playerStats.strength));
		playerStats.battleStamina -= 2;
		applyChangeHS();
		checkE();
		return;
	}
}
function Kick() {
	if (playerStats.battleStamina < 2 || playerStats.battleStamina < 5) {
		$("<p>Your don't have the Stamina to use kick.</p>").insertAfter("#battle-placeholder");
		checkE();
		return;
	}
	if (enemyStats.defense > playerStats.strength * 2 && playerStats.battleStamina >= 2) {
		$("<p>Your kick had no effect on the " + enemyInfo.name + ".</p>").insertAfter("#battle-placeholder");
		playerStats.battleStamina -= 2;
		applyChangeHS();
		checkE();
		return;
	}
	else {
		$("<p>You just kicked the shit out of the " + enemyInfo.name + " for " + formatNumber(playerStats.strength * 2) + "! The enemy took damage to the testicles!<br />The enemy defends " + formatNumber(enemyStats.defense) + " damage.</p>").insertAfter("#battle-placeholder");
		enemyStats.battleHealth = Math.round ((enemyStats.battleHealth + enemyStats.defense) - (playerStats.strength * 2));
		playerStats.battleStamina -= 5;
		applyChangeHS();
		checkE();
		return;
	}
}
function Attack() {
	if (playerStats.battleStamina < 10 || playerStats.battleStamina < 15 && playerInfo.classType == "Warrior") {
		$("<p>Your attempt to use " + playerInfo.rightHand + ", but you don't have the Stamina to do so.</p>").insertAfter("#battle-placeholder");
		checkE();
		return;
	}
	if (playerStats.battleStamina < 10 || playerStats.battleStamina < 15 && playerInfo.classType == "Archer") {
		$("<p>Your attempt to draw back " + playerInfo.LeftHand + ", but you don't have the Stamina to do so.</p>").insertAfter("#battle-placeholder");
		applyChangeHS();
		checkH();
		return;
	}
	if (playerInfo.classType == "Archer" && playerStats.numArrows <= 0) {
		$("<p>Sorry, you cannot use this attack, as you have no more arrows in stock.</p>").insertAfter("#battle-placeholder");
		checkE();
		return;
	}
	if (enemyStats.defense > playerStats.strength * 5 && playerInfo.classType == "Archer") {
		$("<p>Your attack had no effect on the " + enemyInfo.name + ".</p>").insertAfter("#battle-placeholder");
		playerStats.battleStamina -= 10;
		applyChangeHS();
		checkE();
		return;
	}
	if (enemyStats.defense > playerStats.strength * 5 && playerInfo.classType == "Warrior") {
		$("<p>Your attack had no effect on the " + enemyInfo.name + ".</p>").insertAfter("#battle-placeholder");
		playerStats.battleStamina -= 15;
		applyChangeHS();
		checkE();
		return;
	}
	else {
		if (playerInfo.classType == "Archer" && playerStats.numArrows > 0) {
			$("<p>You just used your " + playerInfo.leftHand + " and " + playerStats.rightHand + " and damaged " + enemyInfo.name + " for " + formatNumber(playerStats.strength * 5) + " damage!<br />The enemy defends " + formatNumber(enemyStats.defense) + " damage.</p>").insertAfter("#battle-placeholder");
			playerStats.numArrows--;
			enemyStats.battleHealth = Math.round ((enemyStats.battleHealth + enemyStats.defense) - (playerStats.strength * 5));
			playerStats.battleStamina -= 10;
			applyChangeHS();
			checkE();
			return;
		}
		if (playerInfo.classType == "Warrior"){
			$("<p>You just used your " + playerInfo.rightHand + " and damaged " + enemyInfo.name + " for " + formatNumber(playerStats.strength * 5) + " damage!<br />The enemy defends " + formatNumber(enemyStats.defense) + " damage.</p>").insertAfter("#battle-placeholder");
			enemyStats.battleHealth = Math.round ((enemyStats.battleHealth + enemyStats.defense) - (playerStats.strength * 5));
			playerStats.battleStamina -= 15;
			applyChangeHS();
			checkE();
			return;
		}
	}
}
function FireMagic() {
	if (playerStats.battleMana < 2) {
		$("<p>You don't have enough mana to support the flames, the embers of your flame are dead.</p>").insertAfter("#battle-placeholder");
		checkE();
		return;
	}
	if (enemyStats.defense > combinedFocus()) {
		$("<p>Fire had no effect on the " + enemyInfo.name + ".</p>").insertAfter("#battle-placeholder");
		playerStats.battleMana -= 2;
		applyChangeHM();
		checkE();
		return;
	}
	else{
		$("<p>The flames you cast burn the flesh of the " + enemyInfo.name + "! The smell of burning flesh sinking deep within your nose. Struck for " + formatNumber(combinedFocus()) + " points!<br />The enemy defends " + formatNumber(enemyStats.defense) + " damage.</p>").insertAfter("#battle-placeholder");
		enemyStats.battleHealth = Math.round ((enemyStats.battleHealth + enemyStats.defense) - (combinedFocus()));
		playerStats.battleMana -= 2;
		applyChangeHM();
		checkE();
		return;
	}
}
function WindMagic() {
	if (playerStats.battleMana < 5) {
		$("<p>You don't have enough mana, the wind that could cut your enemies is all but a gentle breeze.</p>").insertAfter("#battle-placeholder");
		checkE();
		return;
	}
	if (enemyStats.defense > combinedFocus() * 1.5) {
		$("<p>Wind had no effect on the " + enemyInfo.name + ".</p>").insertAfter("#battle-placeholder");
		playerStats.battleMana -= 5;
		applyChangeHM();
		checkE();
		return;
	}
	else {
		$("<p>The wind you cast created vacuums to seep the blood from the minor scrapes the " + enemyInfo.name + " has! Struck for " + formatNumber(combinedFocus() * 1.5) + " points!<br />The enemy defends " + formatNumber(enemyStats.defense) + " damage.</p>").insertAfter("#battle-placeholder");
		enemyStats.battleHealth = Math.round ((enemyStats.battleHealth + enemyStats.defense) - (combinedFocus() * 1.5));
		playerStats.battleMana -= 5;
		applyChangeHM();
		checkE();
		return;
	}
}
function IceMagic() {
	if (playerStats.battleMana < 10) {
		$("<p>You don't have enough mana, the amount of ice you can create from the air is so abysmal, you cannot even create ice cubes for your drink.</p>").insertAfter("#battle-placeholder");
		checkE();
		return;
	}
	if (enemyStats.defense > combinedFocus() * 2) {
		$("<p>Frost had no effect on the " + enemyInfo.name + ".</p>").insertAfter("#battle-placeholder");
		playerStats.battleMana -= 10;
		applyChangeHM();
		checkE();
		return;
	}
	else {
		$("<p>The " + enemyInfo.name + " has been struck by the power of arctic arcanum! That is always chilling to see. Struck for " + formatNumber(combinedFocus() * 2) + " points!<br />The enemy defends " + formatNumber(enemyStats.defense) + " damage.</p>").insertAfter("#battle-placeholder");
		enemyStats.battleHealth = Math.round ((enemyStats.battleHealth + enemyStats.defense) - (combinedFocus() * 2));
		playerStats.battleMana -= 10;
		applyChangeHM();
		checkE();
		return;
	}
}
function enemyAttack() {
	if (enemyStats.strength < playerStats.defense) {
		$("<p>The enemy is so weak, you can't even feel their attack.</p>").insertAfter("#battle-placeholder");
		checkH();
		return;
	}
	else {
		$("<p>The enemy hit you for " + formatNumber(enemyStats.strength) + "!<br />You defend for " + formatNumber(playerStats.defense) + "!</p>").insertAfter("#battle-placeholder");
		playerStats.battleHealth = Math.round ((playerStats.battleHealth + playerStats.defense) - enemyStats.strength);
		checkH();
		return;
	}
}

// Potions:
function HealthPotion() {
	if (playerStats.numHealthPotions < 1) {
		$("<p>Sorry, you have no more of those.</p>").insertAfter("#battle-placeholder");
		return;
	}
	if (playerStats.battleHealth >= (playerStats.maxHealth * .75) && playerStats.numHealthPotions >= 1) {
		$("<p>Your health isn't low enough to use this right now.</p>").insertAfter("#battle-placeholder");
		return;
	}
	else {
		$("<p>You healed for " + (healthPotion.health * playerStats.maxHealth) + " health.</p>").insertAfter("#battle-placeholder");
		playerStats.battleHealth += healthPotion.health * playerStats.maxHealth;
		playerStats.numHealthPotions--;
		applyChange();
		return;
	}
}
function StaminaPotion() {
	if (playerStats.numStaminaPotions < 1) {
		$("<p>Sorry, you have no more of those.</p>").insertAfter("#battle-placeholder");
		return;
	}
	if (playerStats.battleStamina >= (playerStats.maxStamina * .75) && playerStats.numStaminaPotions >= 1) {
		$("<p>Your stamina isn't low enough to use this right now.</p>").insertAfter("#battle-placeholder");
		return;
	}
	else {
		$("<p>You recovered " + (staminaPotion.stamina * playerStats.maxStamina) + " stamina.</p>").insertAfter("#battle-placeholder");
		playerStats.battleStamina += staminaPotion.stamina * playerStats.maxStamina;
		playerStats.numStaminaPotions--;
		applyChangeHS();
		return;
	}
}
function ManaPotion() {
	if (playerStats.numManaPotions < 1) {
		$("<p>Sorry, you have no more of those.</p>").insertAfter("#battle-placeholder");
		return;
	}
	if (playerStats.battleMana >= (playerStats.maxMana * .75) && playerStats.numManaPotions >= 1) {
		$("<p>Your mana isn't low enough to use this right now.</p>").insertAfter("#battle-placeholder");
		return;
	}
	else {
		$("<p>You recovered " + (manaPotion.mana * playerStats.maxMana) + " mana.</p>").insertAfter("#battle-placeholder");
		playerStats.battleMana += manaPotion.mana * playerStats.maxMana;
		playerStats.numManaPotions--;
		applyChangeHM();
		return;
	}
}

// Still Alive, or Dead:
function checkE() {
	if (enemyStats.battleHealth > 0) {
		battleTurn = 'Next';
		applyChangeE();
        enemyAttack();
		return;
	}
	else if (enemyStats.battleHealth <= 0) {
		enemyStats.battleHealth = 0;
		applyChangeE();
		playerStats.won++;
		playerTurn = true;
		battleTurn = 'New';
        Death()
		return;
	}
}
function checkH() {
	if (playerStats.battleHealth >= 1) {
		applyChange();
		playerTurn = true;
		battleTurn = 'Next';
		return;
	}
	else if (playerStats.battleHealth <= 0) {
		playerStats.battleHealth = 0;
		applyChange();
		playerStats.lost++;
		battleTurn = 'New';
        Death();
		return;
	}
}
function Death() {
	if (enemyStats.battleHealth <= 0) {
		$("<p>You defeated the " + enemyInfo.name + " and gained " + enemyStats.gold + " gold, and " + enemyStats.experience + " experience.<br />Would you like to gather some resource material (g), return to battle (b), or continue on to the town's gates (c)?</p>").insertAfter("#placeholder");
		if (toggleShopButtonStatus == false) {
			toggleShopButton();
			playerStats.gold += enemyStats.gold;
			materialStats.rawhide += enemyStats.rawhide;
			materialStats.silk += enemyStats.silk;
			materialStats.core += enemyStats.core;
			playerStats.experience += enemyStats.experience;
			levelUp();
			newEnemy();
			toggleBattleMenu();
			playerInfo.area = "Post-Battle-Reprieve";
			return;
		} else {
			playerStats.gold += enemyStats.gold;
			materialStats.rawhide += enemyStats.rawhide;
			materialStats.silk += enemyStats.silk;
			materialStats.core += enemyStats.core;
			playerStats.experience += enemyStats.experience;
			levelUp();
			newEnemy();
			toggleBattleMenu();
			playerInfo.area = "Post-Battle-Reprieve";
			return;
		}
	}
	if (playerStats.battleHealth <= 0) {
		$("<p>That " + enemyInfo.name + " kicked your ass! Get ready for some more!</p>").insertAfter("#battle-placeholder");
        playerStats.battleHealth = playerStats.health;
        playerStats.maxHealth = playerStats.health;
        playerStats.battleStamina = playerStats.endurance;
        playerStats.maxStamina = playerStats.endurance;
        playerStats.battleMana = playerStats.mana;
        playerStats.maxMana = playerStats.mana;
        applyChange();
        applyChangeHS();
        applyChangeHM();
		newEnemy();
		return;
	}
}

//updates Battle Data in real time
function applyChange() { //Player Health
	var a = playerStats.battleHealth * (100 /playerStats.maxHealth);
	$(".healthBar").animate({'width': a + "%"}, 500);
	$(".healthBarBlue").animate({'width': a + "%"}, 300);
	$('#playerHealth').html(formatNumber(playerStats.battleHealth) + "/" + formatNumber(playerStats.maxHealth));
}
function applyChangeHS() { //Player Stamina
	var a = playerStats.battleStamina * (100 /playerStats.maxStamina);
	$(".staminaBar").animate({'width': a + "%"}, 500);
	$(".staminaBarBlue").animate({'width': a + "%"}, 300);
	$('#playerStamina').html(formatNumber(playerStats.battleStamina) + "/" + formatNumber(playerStats.maxStamina));
}
function applyChangeHM() { //Player Mana
	var a = playerStats.battleMana * (100 /playerStats.maxMana);
	$(".manaBar").animate({'width': a + "%"}, 500);
	$(".manaBarBlue").animate({'width': a + "%"}, 300);
	$('#playerMana').html(formatNumber(playerStats.battleMana) + "/" + formatNumber(playerStats.maxMana));
}
function applyChangeE() { //Enemy Health
    var a = enemyStats.battleHealth * (100 /enemyStats.maxHealth);
    $(".healthBarE").animate({'width': a + "%"}, 500);
    $(".healthBarBlueE").animate({'width': a + "%"}, 300);
	$('#enemyHealth').html(formatNumber(enemyStats.battleHealth) + "/" + formatNumber(enemyStats.maxHealth));
}
function applyChangeES() { //Enemy Stamina
	var a = enemyStats.battleStamina* (100 /enemyStats.maxStamina);
	$(".staminaBarE").animate({'width': a + "%"}, 500);
	$(".staminaBarBlueE").animate({'width': a + "%"}, 300);
	$('#enemyStamina').html(formatNumber(enemyStats.battleStamina) + "/" + formatNumber(enemyStats.maxStamina));
}
function applyChangeEM() { //Enemy Mana
	var a = enemyStats.battleMana* (100 /enemyStats.maxMana);
	$(".manaBarE").animate({'width': a + "%"}, 500);
	$(".manaBarBlueE").animate({'width': a + "%"}, 300);
	$('#enemyMana').html(formatNumber(enemyStats.battleMana) + "/" + formatNumber(enemyStats.maxMana));
}
function applyChangeEx() { //Apply Experience Gained
	var a = playerStats.experience * (100 / expLevelCost);
	$(".experienceBar").animate({'width': a + "%"}, 100);
	$('#experience').html(formatNumber(playerStats.experience) + "/" + formatNumber(expLevelCost));
}
//Resets Leveled stats to 0 after pushing them through during battle.
function newStats() {
	if (playerStats.battleHealth + leveledHealthAmount <= newPlayerBattleHealth) {
		playerStats.battleHealth = playerStats.battleHealth + leveledHealthAmount;
		playerStats.maxHealth = playerStats.health;
		applyChange();
		if (playerStats.battleStamina + leveledStaminaAmount <= newPlayerBattleStamina) {
			playerStats.battleStamina = playerStats.battleStamina + leveledStaminaAmount;
			playerStats.maxStamina = playerStats.endurance;
			applyChangeHS();
			if (playerStats.battleMana + leveledManaAmount <= newPlayerBattleMana) {
				playerStats.battleMana = playerStats.battleMana + leveledManaAmount;
				playerStats.maxMana = playerStats.mana;
				applyChangeHM();
				return;
			}
		}
	}
}
