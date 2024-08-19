// This will house all the potions!
function PotionConstructorStats(name, health, stamina, mana, cost, numLeft, saleValue) {
    this.name = name;
    this.health = health;
    this.stamina = stamina;
    this.mana = mana;
    this.cost = cost;
    this.numLeft = numLeft;
    this.saleValue = saleValue;
}

let healthPotion = new PotionConstructorStats('Health Potion',.25,0,0,25,999,15);
let staminaPotion = new PotionConstructorStats('Stamina Potion',0,.25,0,25,999,15);
let manaPotion = new PotionConstructorStats('Mana Potion',0,0,.25,25,999,15);

