// This is a section dedicated to button toggle functions

// This declares the boolean structure (true or false statements)
// Unlocked:
let isShopUnlocked = false;
let isGatherUnlocked = false;
let isRebuildUnlocked = false;
let isProductionUnlocked = false;
// Buttons:
let toggleShopButtonStatus = false;
let toggleGatherButtonStatus = false;
let toggleRebuildButtonStatus = false;
let toggleProductionButtonStatus = false;
// Menus:
let toggleMenuStatus = false;
let toggleInventoryMenuStatus = false;
let toggleBattleMenuStatus = false;
let toggleShopMenuStatus = false;
let toggleGatherMenuStatus = false;
let toggleRebuildMenuStatus = false;
let gatherButtonToggled = false;
let toggleProductionMenuStatus = false;
let toggleWeaponSmithOn = false;
let toggleArmorSmithOn = false;
let toggleApothecaryBuildingOn = false;
let toggleForgeOn = false;
let toggleTannerOn = false;
let toggleApothecaryOn = false;

// Define Get elements:
// Buttons:
let getShopButton = document.querySelector(".btn-toggle-shop");
let getGatherButton = document.querySelector(".btn-toggle-gather");
let getRebuildButton = document.querySelector(".btn-toggle-rebuild");
let getProductionButton = document.querySelector(".btn-toggle-production");
// Menus:
let getMain = document.querySelector("main");
let getStatsMenu = document.querySelector(".wrapper-stats");
let getConsoleWrapper = document.querySelector(".console-box-wrapper");
let getInventoryMenu = document.querySelector(".inventory-wrapper");
let getBattleMenu = document.querySelector(".battle-wrapper");
let getStamAttack = document.querySelector(".stamina-attack");
let getManaAttack = document.querySelector(".mana-attack");
let getShopMenu = document.querySelector(".shop-wrapper");
let getWarriorShop = document.querySelector(".warrior-shop");
let getArcherShop = document.querySelector(".archer-shop");
let getMageShop = document.querySelector(".mage-shop");
let getMiscShop = document.querySelector(".misc-shop");
let getGatherMenu = document.querySelector(".gather-wrapper");
let getRebuildMenu = document.querySelector(".rebuild-wrapper");
let getProductionMenu = document.querySelector(".endora-secret-wrapper");
let getWeaponSmithMenu = document.querySelector(".weaponsmith-building-visible");
let getArmorSmithMenu = document.querySelector(".armorsmith-building-visible");
let getApothecaryBuildingMenu = document.querySelector(".apothecary-building-visible");
let getForgeMenu = document.querySelector(".forge-visible");
let getTannerMenu = document.querySelector(".tanner-visible");
let getApothecaryMenu = document.querySelector(".apothecary-visible");

// Buttons:
// Shop Button
let toggleShopButton = function() {
    switch (toggleShopButtonStatus) {
        case false:
            getShopButton.style.display = "block";
            toggleShopButtonStatus = true;
            break;
        case true:
            getShopButton.style.display = "none";
            toggleShopButtonStatus = false;
            break;
    }
}
// Gather Button
let toggleGatherButton = function() {
    switch (toggleGatherButtonStatus) {
        case false:
            getGatherButton.style.display = "block";
            toggleGatherButtonStatus = true;
            break;
        case true:
            getGatherButton.style.display = "none";
            toggleGatherButtonStatus = false;
            break;
    }
}
// Rebuild Button
let toggleRebuildButton = function() {
    switch (toggleRebuildButtonStatus) {
        case false:
            getRebuildButton.style.display = "block";
            toggleRebuildButtonStatus = true;
            break;
        case true:
            getRebuildButton.style.display = "none";
            toggleRebuildButtonStatus = false;
            break;
    }
}
// Production Button
let toggleProductionButton = function() {
    switch (toggleProductionButtonStatus) {
        case false:
            getProductionButton.style.display = "block";
            toggleProductionButtonStatus = true;
            break;
        case true:
            getProductionButton.style.display = "none";
            toggleProductionButtonStatus = false;
            break;
    }
}

// Menus:
// Stats Menu
let toggleStatsMenu = function() {
    if (toggleMenuStatus === false) {
        switch (toggleInventoryMenuStatus) {
            case false:
                switch (toggleBattleMenuStatus) {
                    case false:
                        getStatsMenu.style.display = "flex";
                        getStatsMenu.style.width = "13%";
                        getConsoleWrapper.style.width = "86.5%";
                        break;
                    case true:
                        getStatsMenu.style.display = "none";
                        break;
                }
                break;
            case true:
                switch (toggleBattleMenuStatus) {
                    case false:
                        getStatsMenu.style.display = "none";
                        break;
                    case true:
                        getStatsMenu.style.display = "none";
                        break;
                }
                break;
        }
        toggleMenuStatus = true;
    } else if (toggleMenuStatus === true) {
        switch (toggleInventoryMenuStatus) {
            case false:
                switch (toggleBattleMenuStatus) {
                    case false:
                        getConsoleWrapper.style.width = "100%";
                        getStatsMenu.style.display = "none";
                        break;
                    case true:
                        getStatsMenu.style.display = "none";
                        break;
                }
                break;
            case true:
                switch (toggleBattleMenuStatus) {
                    case false:
                        getStatsMenu.style.display = "none";
                        break;
                    case true:
                        getStatsMenu.style.display = "none";
                        break;
                }
                break;
        }
        toggleMenuStatus = false;
    }
}
// Inventory Menu
let toggleInventoryMenu = function() {
    if (toggleInventoryMenuStatus === false) {
        switch (toggleBattleMenuStatus) {
            case false:
                switch (toggleShopMenuStatus) {
                    case false:
                    getInventoryMenu.style.display = "flex";
                    getMain.style.display = "none";
                    break;
                    case true:
                        getInventoryMenu.style.display = "flex";
                        getMain.style.display = "none";
                        break;
                }
                break;
            case true:
                switch (toggleShopMenuStatus) {
                    case false:
                    getInventoryMenu.style.display = "flex";
                    getMain.style.display = "none";
                    break;
                    case true:
                        getInventoryMenu.style.display = "flex";
                        getMain.style.display = "none";
                        break;
                }
                break;
        }
        toggleInventoryMenuStatus = true;
    } else if (toggleInventoryMenuStatus === true) {
        switch (toggleBattleMenuStatus) {
            case false:
                switch (toggleShopMenuStatus) {
                    case false:
                        getInventoryMenu.style.display = "none";
                        getMain.style.display = "flex";
                        break;
                    case true:
                        getInventoryMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                }
                break;
            case true:
                switch (toggleShopMenuStatus) {
                    case false:
                        getInventoryMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                    case true:
                        getInventoryMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                }
                break;
        }
        toggleInventoryMenuStatus = false;
    }
}
// Battle menu
let toggleBattleMenu = function() {
    if (toggleBattleMenuStatus === false) {
        getBattleMenu.style.display = "block";
        getMain.style.display = "none";
        getInventoryMenu.style.display = "none";
        switch (playerInfo.classType) {
            case 'Warrior':
            case 'Archer':
                getStamAttack.style.display = "block";
                break;
            case 'Mage':
                getManaAttack.style.display = "block";
                break;
        }
        toggleBattleMenuStatus = true;
    } 
    else if (toggleBattleMenuStatus === true) {
        getBattleMenu.style.display = "none";
        if (toggleInventoryMenuStatus === true) {
            getInventoryMenu.style.display = "flex";
            getMain.style.display = "none";
        } else {
            getInventoryMenu.style.display = "none";
            getMain.style.display = "flex";
        }
        switch (playerInfo.classType) {
            case 'Warrior':
            case 'Archer':
                getStamAttack.style.display = "none";
                break;
            case 'Mage':
                getManaAttack.style.display = "none";
                break;
        }
        toggleBattleMenuStatus = false;
    }
}
// Shop menu
let toggleShopMenu = function() {
    if (toggleShopMenuStatus === false) {
        switch (toggleInventoryMenuStatus) {
            case false:
                getShopMenu.style.display = "block";
                getInventoryMenu.style.display = "none";
                getMain.style.display = "none";
                grabShopItems();
                switch (playerInfo.classType) {
                    case 'Warrior':
                        getWarriorShop.style.display = "block";
                        getMiscShop.style.display = "block";
                        break;
                    case 'Archer':
                        getArcherShop.style.display = "block";
                        getMiscShop.style.display = "block";
                        break;
                    case 'Mage':
                        getMageShop.style.display = "block";
                        getMiscShop.style.display = "block";
                        break;
                }
                break;
            case true:
                getShopMenu.style.display = "block";
                getInventoryMenu.style.display = "block";
                getMain.style.display = "none";
                break;
        }
        toggleShopMenuStatus = true;
    } else if (toggleShopMenuStatus === true) {
        switch (toggleInventoryMenuStatus) {
            case false:
                getShopMenu.style.display = "none";
                getInventoryMenu.style.display = "none";
                getMain.style.display = "block";
                // switch (playerInfo.classType) {
                //     case 'Warrior':
                //         getWarriorShop.style.display = "none";
                //         getMiscShop.style.display = "none";
                //         break;
                //     case 'Archer':
                //         getArcherShop.style.display = "none";
                //         getMiscShop.style.display = "none";
                //         break;
                //     case 'Mage':
                //         getMageShop.style.display = "none";
                //         getMiscShop.style.display = "none";
                //         break;
                // }
                break;
            case true:
                getShopMenu.style.display = "none";
                getInventoryMenu.style.display = "block";
                getMain.style.display = "none";
                break;
        }
        toggleShopMenuStatus = false;
    }
}
// Gather Menu
let toggleGatherMenu = function() {
    applyChangeStone();
    if (toggleGatherMenuStatus === false) {
        switch (toggleInventoryMenuStatus) {
            case false:
                getGatherMenu.style.display = "block";
                getInventoryMenu.style.display = "none";
                getMain.style.display = "none";
                break;
            case true:
                getGatherMenu.style.display = "block";
                getInventoryMenu.style.display = "block";
                getMain.style.display = "none";
                break;
        };
        switch (toggleShopMenuStatus) {
            case false:
                getGatherMenu.style.display = "block";
                getShopMenu.style.display = "none";
                getMain.style.display = "none";
                break;
            case true:
                getGatherMenu.style.display = "block";
                getShopMenu.style.display = "none";
                getMain.style.display = "none";
                break;
        };
        gatherButtonToggled = true;
        toggleGatherMenuStatus = true;
    } else if (toggleGatherMenuStatus === true) {
        switch (gatherButtonToggled) {
            case true:
                switch (toggleRebuildButtonStatus) {
                    case false:
                        toggleRebuildButton();
                        $("<p>The option to help the town rebuild is now open. Please click the rebuild button to do that, or would you rather visit the Shop, go back to Battle (b), or Continue to the Town Gate (c)?</p>").insertAfter("#placeholder");
                        break;
                    case true:
                        break;
                }
                break;
            case false:
                switch (toggleRebuildButtonStatus) {
                    case false:
                        break;
                    case true:
                        $("<p>Press the rebuild button to continue repairing, or would you rather visit the Shop, go back to Battle (b), or Continue to the Town Gate (c)?</p>").insertAfter("#placeholder");
                        break;
                }
                break;
        }
        switch (toggleInventoryMenuStatus) {
            case false:
                switch (toggleShopMenuStatus) {
                    case false:
                        getGatherMenu.style.display = "none";
                        getInventoryMenu.style.display = "none";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "block";
                        break;
                    case true:
                        getGatherMenu.style.display = "none";
                        getInventoryMenu.style.display = "none";
                        getShopMenu.style.display = "block";
                        getMain.style.display = "none";
                        break;
                }
                break;
            case true:
                switch (toggleShopMenuStatus) {
                    case false:
                        getGatherMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                    case true:
                        getGatherMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "block";
                        getMain.style.display = "none";
                        break;
                }
                break;
        };
        switch (toggleShopMenuStatus) {
            case false:
                switch (toggleInventoryMenuStatus) {
                    case false:
                        getGatherMenu.style.display = "none";
                        getInventoryMenu.style.display = "none";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "block";
                        break;
                    case true:
                        getGatherMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                }
                break;
            case true:
                switch (toggleInventoryMenuStatus) {
                    case false:
                        getGatherMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                    case true:
                        getGatherMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "block";
                        getMain.style.display = "none";
                        break;
                }
                break;
        };
        toggleGatherMenuStatus = false;
    }
}
// Rebuild Menu
let toggleRebuildMenu = function() {
    if(toggleRebuildMenuStatus == false) {
        switch (toggleInventoryMenuStatus) {
            case false:
                getRebuildMenu.style.display = "block";
                getInventoryMenu.style.display = "none";
                getMain.style.display = "none";
                break;
            case true:
                getRebuildMenu.style.display = "block";
                getInventoryMenu.style.display = "block";
                getMain.style.display = "none";
                break;
        };
        switch (toggleShopMenuStatus) {
            case false:
                getRebuildMenu.style.display = "block";
                getShopMenu.style.display = "none";
                getMain.style.display = "none";
                break;
            case true:
                getRebuildMenu.style.display = "block";
                getShopMenu.style.display = "none";
                getMain.style.display = "none";
                break;
        };
        toggleRebuildMenuStatus = true;
    } else if (toggleRebuildMenuStatus == true) {
        switch (toggleRebuildButtonStatus) {
            case true:
                switch (toggleProductionButtonStatus) {
                    case false:
                        toggleProductionButton();
                        $("<p>The option to use any production facilities you helped rebuild has now unlocked. Please click the production button to do that, or would you rather visit the Shop, go back to Battle (b), or Continue to the Town Gate (c)?</p>").insertAfter("#placeholder");
                        break;
                    case true:
                        break;
                }
            break;
            case false:
                switch (toggleProductionButtonStatus) {
                    case false:
                        break;
                    case true:
                        $("<p>The option to use the production facilities you helped rebuild has now unlocked. Please click the production button to do that, or would you rather visit the Shop, go back to Battle (b), or Continue to the Town Gate (c)?</p>").insertAfter("#placeholder");
                        break;
                }
            break;
        }
        switch (toggleInventoryMenuStatus) {
            case false:
                switch (toggleShopMenuStatus) {
                    case false:
                        getRebuildMenu.style.display = "none";
                        getInventoryMenu.style.display = "none";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "block";
                        break;
                    case true:
                        getRebuildMenu.style.display = "none";
                        getInventoryMenu.style.display = "none";
                        getShopMenu.style.display = "block";
                        getMain.style.display = "none";
                        break;
                }
                break;
            case true:
                switch (toggleShopMenuStatus) {
                    case false:
                        getRebuildMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                    case true:
                        getRebuildMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "block";
                        getMain.style.display = "none";
                        break;
                }
                break;
        };
        switch (toggleShopMenuStatus) {
            case false:
                switch (toggleInventoryMenuStatus) {
                    case false:
                        getRebuildMenu.style.display = "none";
                        getInventoryMenu.style.display = "none";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "block";
                        break;
                    case true:
                        getRebuildMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                }
                break;
            case true:
                switch (toggleInventoryMenuStatus) {
                    case false:
                        getRebuildMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                    case true:
                        getRebuildMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "block";
                        getMain.style.display = "none";
                        break;
                }
                break;
        };
        toggleRebuildMenuStatus = false;
    }
}
// Production Menu
let toggleProductionMenu = function() {
    if(toggleProductionMenuStatus == false) {
        switch (toggleInventoryMenuStatus) {
            case false:
                getProductionMenu.style.display = "block";
                getInventoryMenu.style.display = "none";
                getMain.style.display = "none";
                break;
            case true:
                getProductionMenu.style.display = "block";
                getInventoryMenu.style.display = "block";
                getMain.style.display = "none";
                break;
        };
        switch (toggleShopMenuStatus) {
            case false:
                getProductionMenu.style.display = "block";
                getShopMenu.style.display = "none";
                getMain.style.display = "none";
                break;
            case true:
                getProductionMenu.style.display = "block";
                getShopMenu.style.display = "none";
                getMain.style.display = "none";
                break;
        };
        toggleProductionMenuStatus = true;
    } else if (toggleProductionMenuStatus == true) {
        switch (toggleInventoryMenuStatus) {
            case false:
                switch (toggleShopMenuStatus) {
                    case false:
                        getProductionMenu.style.display = "none";
                        getInventoryMenu.style.display = "none";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "block";
                        break;
                    case true:
                        getProductionMenu.style.display = "none";
                        getInventoryMenu.style.display = "none";
                        getShopMenu.style.display = "block";
                        getMain.style.display = "none";
                        break;
                }
                break;
            case true:
                switch (toggleShopMenuStatus) {
                    case false:
                        getProductionMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                    case true:
                        getProductionMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "block";
                        getMain.style.display = "none";
                        break;
                }
                break;
        };
        switch (toggleShopMenuStatus) {
            case false:
                switch (toggleInventoryMenuStatus) {
                    case false:
                        getProductionMenu.style.display = "none";
                        getInventoryMenu.style.display = "none";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "block";
                        break;
                    case true:
                        getProductionMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                }
                break;
            case true:
                switch (toggleInventoryMenuStatus) {
                    case false:
                        getProductionMenu.style.display = "none";
                        getInventoryMenu.style.display = "none";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                    case true:
                        getProductionMenu.style.display = "none";
                        getInventoryMenu.style.display = "block";
                        getShopMenu.style.display = "none";
                        getMain.style.display = "none";
                        break;
                }
                break;
        };
        toggleProductionMenuStatus = false;
    }
}

// Submenus:
// Weapon Smith
let toggleWeaponSmith = function() {
    switch (toggleWeaponSmithOn) {
        case false:
            getWeaponSmithMenu.style.display = "block";
            toggleWeaponSmithOn = true;
            break;
        case true:
            getWeaponSmithMenu.style.display = "none";
            toggleWeaponSmithOn = false;
            break;
    };
}
// Armor Smith
let toggleArmorSmith = function() {
    switch (toggleArmorSmithOn) {
        case false:
            getArmorSmithMenu.style.display = "block";
            toggleArmorSmithOn = true;
            break;
        case true:
            getArmorSmithMenu.style.display = "none";
            toggleArmorSmithOn = false;
            break;
    };
}
// Apothecary Building
let toggleApothecaryBuilding = function() {
    switch (toggleApothecaryBuildingOn) {
        case false:
            getApothecaryBuildingMenu.style.display = "block";
            toggleApothecaryBuildingOn = true;
            break;
        case true:
            getApothecaryBuildingMenu.style.display = "none";
            toggleApothecaryBuildingOn = false;
            break;
    };
}
// Forge
let toggleForge = function() {
    switch (toggleForgeOn) {
        case false:
            getForgeMenu.style.display = "block";
            toggleForgeOn = true;
            break;
        case true:
            getForgeMenu.style.display = "none";
            toggleForgeOn = false;
            break;
    };
}
// Tanner
let toggleTanner = function() {
    switch (toggleTannerOn) {
        case false:
            getTannerMenu.style.display = "block";
            toggleTannerOn = true;
            break;
        case true:
            getTannerMenu.style.display = "none";
            toggleTannerOn = false;
            break;
    };
}
// Apothecary
let toggleApothecary = function() {
    switch (toggleApothecaryOn) {
        case false:
            getApothecaryMenu.style.display = "block";
            toggleApothecaryOn = true;
            break;
        case true:
            getApothecaryMenu.style.display = "none";
            toggleApothecaryOn = false;
            break;
    };
}