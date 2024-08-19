//Level up system
let expLevelCost = Math.round(100 * (playerStats.level * playerStats.level));   //Takes the baseline exp for the first level up and multiplies it.
applyChangeEx();	//Changes the Exp bar as you gain exp.

function levelUp() {
	applyChangeEx();
	while (playerStats.experience >= expLevelCost) {
		playerStats.level++;
		leveled = true;
		playerStats.experience -= expLevelCost;
		playerStats.health += 25;
		playerStats.mana += 10;
		playerStats.strength += 5;
		playerStats.defense += 5;
		playerStats.endurance += 4;
		playerStats.intelligence += 4;
		leveledHealthAmount += 25;
		leveledStaminaAmount += 3;
		leveledManaAmount += 10;
		newPlayerBattleHealth = playerStats.health;
		newPlayerBattleStamina = playerStats.endurance;
		newPlayerBattleMana = playerStats.mana;
		expLevelCost = Math.round(100 * (playerStats.level * playerStats.level));
		$("<p>You Leveled Up! You are now Level " + playerStats.level + "!</p>").insertAfter("#battle-placeholder");
		applyChangeEx();
	}
}