//Alert closing
let alertCloseButton = document.querySelectorAll('.btn-close[data-bs-dismiss="alert"]');
let alertCloseEventHandlerFunction = function(ev) {
    this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButton.length; i++) {
    alertCloseButton[i].addEventListener("click", alertCloseEventHandlerFunction);
};

//Generate random number for the computer to choose the weapon -- 1:rock; 2:paper; 3:scissors
let generateRandomNumber = function() {
    let randIntForWeapon = Math.floor(Math.random() * 3) + 1;
    return randIntForWeapon;
};

//Outcome situation functions
let winSituationFunction = function() {
    document.getElementById('outcome').innerHTML = "Win!";
    document.getElementById('outcome').style.paddingLeft = "105px";
    document.getElementById('outcome').style.color = "green"
    document.getElementById('computerWeapon').className = "alert alert-success col-2"
};

let defeatSituationFunction = function() {
    document.getElementById('outcome').innerHTML = "Defeat!";
    document.getElementById('outcome').style.paddingLeft = "85px";
    document.getElementById('outcome').style.color = "red"
    document.getElementById('computerWeapon').className = "alert alert-danger col-2"
};

let drawSituationFunction = function() {
    document.getElementById('outcome').innerHTML = "Draw!";
    document.getElementById('outcome').style.paddingLeft = "95px";
    document.getElementById('outcome').style.color = "black"
    document.getElementById('computerWeapon').className = "alert alert-dark col-2"
};

//Computer weapon pictures
let computerRock = '<i style="padding-left: 60px;" class="far fa-hand-rock fa-7x"></i>'
let computerPaper = '<i style="padding-left: 60px;" class="far fa-hand-paper fa-7x"></i>'
let computerScissors = '<i style="padding-left: 60px" class="far fa-hand-peace fa-7x"></i>'

//Clear the computer weapons alert-table
let clearComputerWeaponAlertFunction = function() {
    document.getElementById('computerWeapon').style.display = "none"
    document.getElementById('computerWeapon').innerHTML = ""
};

//Main function -- game
let run = function(userWeaponId) {
    let machineWeapon = generateRandomNumber();
    if (userWeaponId == machineWeapon){
        drawSituationFunction();
        console.log(machineWeapon);
    } else if (machineWeapon == 1) {
        clearComputerWeaponAlertFunction();
        document.getElementById('computerWeapon').innerHTML = computerRock
        document.getElementById('computerWeapon').style.display = "inline"
        if (userWeaponId == 2) {
            winSituationFunction();
        } else {
            defeatSituationFunction();
        };
    } else if (machineWeapon == 2) {
        document.getElementById('computerWeapon').innerHTML = computerPaper
        document.getElementById('computerWeapon').style.display = "inline"
        if (userWeaponId == 3) {
            winSituationFunction();
        } else {
            defeatSituationFunction();
        };
    } else if (machineWeapon == 3) {
        document.getElementById('computerWeapon').innerHTML = computerScissors
        document.getElementById('computerWeapon').style.display = "inline"
        if (userWeaponId == 1) {
            winSituationFunction();
        } else {
            defeatSituationFunction();
        };
    }
};