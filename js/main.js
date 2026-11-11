//These are variables declared in the global scope because they need to be called outside the main game function
let version = document.querySelector(".version").innerHTML = "0.0.2";
let input;
let mainArea = 'Endora';

// This is the main game function
$(document).ready(function() {
	$(document).keypress(function(key) { //When a key is press:
        if (key.which === 13 && $('#command_line').is(':focus')) { //If enter key is pressed and the focus is on the command line:
            input = $('#command_line').val().toLowerCase(); //Express what is in the command line in lower case.
            $('#command_line').val(""); //Erase the value of what is shown in the command box after enter has been released.
            // This is the initial phase of the game to build the user profile
            while (playerInfo.area == "Pre-Start") {
                switch (input) {
                    case 'yes':
                    case 'y':
                        $("<p>Thank you for playing the Phoenix Destitute! What is your gender, Male or Female?</p>").insertAfter("#placeholder");
                        playerInfo.area = "Gender Assignment";
                        break;
                    case 'no':
                    case 'n':
                        $("<p>Sorry to see you go. Press F5 to reload the game or exit the tab you have this game loaded in.</p>").insertAfter("#placeholder");
                        playerInfo.area = "Nope";
                        break;
                    default:
                        $("<p>Come again? I didn't catch that... Would you like to play, yes or no?</p>").insertAfter("#placeholder");
                        break;
                }
                return;
            }
            while (playerInfo.area == "Gender Assignment") {
                gender();
                return;
            }
            while (playerInfo.area == "Set Name") {
                setName();
                return;
            }
            while (playerInfo.area == "Set Class") {
				setClass();
                if (playerInfo.area === "Start") {
                    toggleCheatButton();
                }
                return;
            }
            // This concludes the character creation part
            // Now we begin the game
            while (playerInfo.area == "Start") {
                switch (input) {
                    case 'sleep':
                    case 's':
                        $("<p>You peacefully drift off to sleep again. Hours later you awake to a most spectacular sunset.<br />Wait, that isn't a sunset, that's a roaring fire, and it seems to be coming from the village!<br />Do you choose to run to town or flee?</p>").insertAfter("#placeholder");
                        playerInfo.area = "Something Bad";
                        break;
                    case 'wake up':
                    case 'w':
                        $("<p>You set up and give a long yawn and stretch a bit before standing up. You catch a whiff of smoke, and faintly hear what sounds like pleas for help.<br/>The eery sounds seem to be coming from town!<br />Do you choose to run to town or flee?</p>").insertAfter("#placeholder");
                        playerInfo.area = "Something Bad";
                        break;
                    default:
                        $("<p>Sorry, what was you wanting to do?</p>").insertAfter("#placeholder");
                        break;
                }
                return;
            }
            while (playerInfo.area == "Something Bad") {
                switch (input) {
                    case 'run to town':
                    case 'r':
                        $("<p>You finally arrive at the town entrance... shit was a lot further than you remember!<br/>You take a moment to gather your thoughts, and take a look around the charred land and buildings.<br/>Then you spot your best friend " + playerInfo.friend + " covered in blood, and bleeding profusely.<br/>It doesn't take long before you see the Monster that did all this. Rage builds inside you. Do you want to attack it (a) or run away (n)?</p>").insertAfter("#placeholder");
                        playerInfo.area = "Battle";
                        break;
                    default:
                        $("<p>Sorry, what was you wanting to do?</p>").insertAfter("#placeholder");
                        break;
                }
                return;
            }
            while (playerInfo.area == "Battle") {
                switch (input) {
                    case 'attack':
                    case 'a':
                        toggleBattleMenu();
                        battle();
                        break;
                    case 'run':
                    case 'run away':
                    case 'n':
                        $("<p>You ran away, bravely ran away, away! </br>This currently does nothing, so... gonna toss you into battle anyways.</p>").insertAfter("#placeholder");
                        toggleBattleMenu();
                        battle();
                        break;
                    default:
                        $("<p>Sorry, what was you wanting to do?</p>").insertAfter("#placeholder");
                        break;
                }
                return;
            }
            while (playerInfo.area == "Post-Battle-Reprieve") {
                switch (input) {
                    case 'gather':
                    case 'g':
                        if (toggleGatherButtonStatus == false) {
                            toggleGatherButton();
                            $("<p>You have unlocked the menu to start gathering material.</p>").insertAfter("#placeholder");
                        } else {
                            $("<p>Please click the gathering button to begin.</p>").insertAfter("#placeholder");
                        }
                        break;
                    case 'battle':
                    case 'b':
                        $("<p>You have circled back into the throws of battle! Would you like to attack (a) or run away (n)?</p>").insertAfter("#placeholder");
                        $("<p>Get ready for more carnage!</p>").insertAfter("#battle-placeholder");
                        playerInfo.area = "Battle";
                        break;
                    case 'gate':
                    case 'c':
                        if (toggleShopButtonStatus == true || toggleGatherButtonStatus == true || toggleRebuildButtonStatus == true || toggleProductionButtonStatus == true) {
                            switch (toggleShopButtonStatus) {
                                case false:
                                    break;
                                case true:
                                    toggleShopButton();
                                    break;
                            }
                            switch (toggleGatherButtonStatus) {
                                case false:
                                    break;
                                case true:
                                    toggleGatherButton();
                                    break;
                            }
                            switch (toggleRebuildButtonStatus) {
                                case false:
                                    break;
                                case true:
                                    toggleRebuildButton();
                                    break;
                            }
                            switch (toggleProductionButtonStatus) {
                                case false:
                                    break;
                                case true:
                                    toggleProductionButton();
                                    break;
                            }
                            $("<p>Press enter to continue to the city gates.</p>").insertAfter("#placeholder");
                            playerInfo.area = "City Gates";
                        }
                    break;
                }
                return;
            }
            while (playerInfo.area == "City Gates") {
                $("<p>You are standing at the city gates and see an enormous expanse of land as far as the eye can see. This is the current end of the game. Please refresh the screen or hit F5 to restart.</p>").insertAfter("#placeholder");
                return;
            }
        }
    });
});